# skills

agent skills. made by dinghino. one folder each.

| skill | what it do |
| --- | --- |
| [monkey](skills/monkey) | make agent talk short. no essay. |

## install

all of them:

```bash
bunx skills add dinghino/skills
```

just one:

```bash
bunx skills add dinghino/skills --skill monkey
```

add `-g` for every project. add `-y` to skip questions.

<details>
<summary>npm / pnpm / yarn</summary>

```bash
npx skills add dinghino/skills
pnpm dlx skills add dinghino/skills
yarn dlx skills add dinghino/skills
```

</details>

works with Claude Code, Codex, Cursor, Copilot, OpenCode, and more. see [skills.sh](https://skills.sh/dinghino/skills).

## add a skill

new folder, one file:

```
skills/<name>/SKILL.md
```

frontmatter need `name` and `description`. name must match folder.

```bash
bun run validate
```

check frontmatter is good and `skills.sh.json` point at skills that exist. run before push.

`skills.sh.json` group the skills on the skills.sh page. put new skill in a group.

## license

MIT
