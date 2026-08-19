# monkey

A Claude skill that makes the agent talk like a monkey. Short words. No essay.

Agents default to explaining. `monkey` turns that off: you get the answer, not the
lecture around it. The work stays as careful as it was — only the talking changes.

This matters most in long sessions. Three hours in, a paragraph of preamble on a
yes/no question is a tax on attention you don't have left to pay. Short replies
keep the session readable.

## Install

```bash
bunx skills add dinghino/monkey
```

<details>
<summary>npm / pnpm / yarn</summary>

```bash
npx skills add dinghino/monkey
pnpm dlx skills add dinghino/monkey
yarn dlx skills add dinghino/monkey
```

</details>

Add `-g` to install for every project, `-y` to skip the prompts.

## Use

Say any of these and the skill loads:

> monkey mode · go monkey · be monkey · monkey talk

It also loads on its own when you tell the agent to stop being wordy, technical,
or to quit overexplaining.

Say **stop**, **normal**, or start a new chat to leave.

## What changes

**Before**

> Great question! There are a few ways to approach this. The most idiomatic
> solution in modern JavaScript is to use `Array.prototype.at()`, which was
> introduced in ES2022 and accepts negative indices, making it cleaner than the
> traditional `arr[arr.length - 1]` pattern. Here's how you'd use it: …

**After**

> `arr.at(-1)`

Ask "why" or "explain" and monkey says more — still simple.

## Development

```bash
bun run validate   # checks frontmatter and skills.sh.json
```

Skills live in `skills/<name>/SKILL.md`. `skills.sh.json` groups them on the
repo's [skills.sh](https://skills.sh) page.

## License

MIT
