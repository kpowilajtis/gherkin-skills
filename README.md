# Gherkin Skills

Write, review, and maintain behavior-focused Gherkin with a framework-agnostic agent skill and three levels of guidance.

| Version | Use it for |
| --- | --- |
| [Full](skills/gherkin/references/gherkin.md) | Rationale, examples, deeper reviews, and automation boundaries |
| [Mini](skills/gherkin/references/gherkin.mini.md) | Everyday drafting and review |
| [Nano](skills/gherkin/references/gherkin.nano.md) | Compact reminders in an existing agent context |

All three preserve the same **20 rules** and **MUST/SHOULD** distinctions. They are alternative levels of detail for one capability, packaged as one discoverable skill to avoid three competing automatic triggers. The entrypoint loads mini by default and full when detail is needed.

## Install

Clone this repository and copy the complete `skills/gherkin` folder into your agent's skill directory. Keep its references and metadata together.

For Codex, use `~/.codex/skills/gherkin` (or the skills folder under your configured CODEX_HOME). For Claude Code, use `~/.claude/skills/gherkin` for personal use or `.claude/skills/gherkin` in a project. Follow the host's discovery/reload behavior after copying. No installation is performed by cloning alone.

For an agent without SKILL.md discovery, attach or reference one of the three Markdown versions through its project-instruction mechanism. The rule files work independently; no tool dependencies are required to read them. Validate actual Gherkin and automation with your project's parser and runner.

## Use

Example requests:

- “Use the gherkin skill to review these features. Separate binding findings from contextual suggestions.”
- “Use the full Gherkin guidance to refactor this scenario without dropping any confirmed outcomes.”
- “Use nano guidance to draft examples for this rule. List unresolved product questions.”

In Codex, invoke `$gherkin`. In Claude Code, invoke `/gherkin`. Availability depends on successful installation and discovery by the host.

MUST rules protect correctness, meaning, isolation, evidence, and scope. SHOULD rules guide contextual choices. Public HTTP details may belong in an API specification; third-person phrasing, short scenarios, kebab-case names, and two-space indentation remain defaults rather than universal correctness claims.

## Layout

```text
skills/gherkin/
  SKILL.md
  agents/openai.yaml
  references/
    gherkin.md
    gherkin.mini.md
    gherkin.nano.md
```

## Contribute and validate

Keep the three layers consistent: preserve IDs, strengths, and behavioral meaning. Prefer a narrowly justified contextual rule over a blanket ban. Add rationale or examples to full, compress explanation in mini/nano, and retain important exceptions. Do not introduce framework requirements into the core.

Run `node scripts/validate.cjs` with Node.js 20 or later. It checks package structure, layer consistency, local links, and metadata. It does not parse feature files, compile Java, execute services, or evaluate an agent's decisions.

## Attribution

Combines the original BDD Agent Skills guidance with [Automation Panda's Gherkin Guidelines](https://github.com/AutomationPanda/gherkin-guidelines-for-ai/blob/main/gherkin-guidelines.md) by Pandy Knight. Adaptations distinguish style defaults from binding principles and account for workflow and Background scope. See each reference for provenance and retained notices.

MIT licensed. See [LICENSE](LICENSE). No affiliation with or endorsement by Cucumber or Automation Panda is implied.
