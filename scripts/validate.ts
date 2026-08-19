#!/usr/bin/env bun
// Checks every SKILL.md has valid frontmatter, and that skills.sh.json only
// references skills that actually exist. Run: bun run validate
import { Glob } from "bun";

const root = new URL("..", import.meta.url).pathname;
let failed = false;

const fail = (msg: string) => {
  console.error(`✗ ${msg}`);
  failed = true;
};

const found: string[] = [];

for await (const file of new Glob("skills/*/SKILL.md").scan(root)) {
  const dir = file.split("/")[1]!;
  const text = await Bun.file(root + file).text();
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);

  if (!match) {
    fail(`${file}: missing YAML frontmatter block`);
    continue;
  }

  const fields = new Map<string, string>();
  for (const line of match[1]!.split("\n")) {
    const kv = line.match(/^([a-zA-Z0-9_.]+):\s*(.*)$/);
    if (kv) fields.set(kv[1]!, kv[2]!.trim());
  }

  const name = fields.get("name");
  const description = fields.get("description");

  if (!name) fail(`${file}: frontmatter has no 'name'`);
  else if (name !== dir) fail(`${file}: name '${name}' != directory '${dir}'`);
  if (!description) fail(`${file}: frontmatter has no 'description'`);
  else if (description.length < 20)
    fail(`${file}: description too short to route on (${description.length} chars)`);

  if (!text.slice(match[0].length).trim()) fail(`${file}: body is empty`);

  if (name) found.push(name);
  console.log(`  ${file} → ${name}`);
}

if (found.length === 0) fail("no skills/*/SKILL.md found");

const config = Bun.file(root + "skills.sh.json");
if (await config.exists()) {
  const { groupings = [] } = await config.json();
  for (const group of groupings) {
    for (const slug of group.skills ?? []) {
      if (!found.includes(slug))
        fail(`skills.sh.json: group '${group.title}' lists unknown skill '${slug}'`);
    }
  }
}

console.log(failed ? "\nvalidation failed" : `\n✓ ${found.length} skill(s) ok`);
process.exit(failed ? 1 : 0);
