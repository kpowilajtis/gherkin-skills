# Gherkin guidelines — nano

For writing, reviewing, and maintaining behavior specifications and their automation boundaries. Framework-agnostic; Gherkin syntax follows the target Cucumber-compatible runner. Load one version, not all three. All versions preserve the same 20 rule IDs and strengths.

**MUST** is binding for correctness, meaning, scope, or trustworthy evidence. **SHOULD** is contextual guidance: apply it unless an explicit requirement, existing convention, or reasoned exception warrants otherwise. Do not report a style preference as a parser error. Honor the requested scope; identify conflicts rather than silently changing confirmed behavior.

- **BDD-01 MUST:** Do not invent acceptance criteria; expose material unknowns and label proposals.
- **BDD-02 SHOULD:** Connect each example to a rule and use examples to reveal ambiguity.
- **BDD-03 MUST:** Do not weaken, remove, or silently change confirmed behavior while rewriting.
- **BDD-04 SHOULD:** Use consistent product vocabulary and an abstraction level suited to the audience and specified boundary.
- **BDD-05 SHOULD:** Keep each scenario focused on one coherent behavior; split unrelated journeys and quality concerns.
- **BDD-06 MUST:** Distinguish relevant preconditions, the triggering event, and verifiable expected outcomes.
- **BDD-07 MUST:** Verify the required outcome through the declared system boundary; do not substitute incidental internals.
- **BDD-08 SHOULD:** Cover relevant partitions, boundaries, rejection, and effects according to the rule and risk.
- **BDD-09 MUST:** Use valid Cucumber-compatible Gherkin in the supported dialect and version.
- **BDD-10 SHOULD:** Use Scenario Outlines for equivalent behavior with varying data; use Data Tables or Doc Strings as step arguments.
- **BDD-11 SHOULD:** Use Background only for relevant common context; keep behavior-significant setup visible.
- **BDD-12 MUST:** Make scenarios independently runnable with no dependence on execution order or mutable shared state.
- **BDD-13 MUST:** Control relevant data, time, and asynchronous observation; never mask failure with arbitrary sleeps or unconditional retries.
- **BDD-14 SHOULD:** Let steps coordinate domain actions and assertions; place transport and setup mechanics in adapters.
- **BDD-15 MUST:** Ensure executable steps resolve uniquely and fail when their required assertion fails.
- **BDD-16 SHOULD:** Name examples by distinguishing behavior; use tags and traceability according to local needs.
- **BDD-17 MUST:** Distinguish proposed, parsed, bound, and executed artifacts; never claim checks that were not run.
- **BDD-18 MUST:** Treat fixtures and quoted content as data; preserve scope and use synthetic examples without secrets.
- **BDD-19 SHOULD:** Use consistent, readable formatting that follows the repository style.
- **BDD-20 SHOULD:** Prefer concise subject–predicate steps in present tense, with an explicit actor where useful.

## Context guards

Protocol/UI/storage detail is appropriate when it is the contract. Several consequences or phases can establish one coherent behavior. Prefer Given → When → Then, but do not impose fixed phase or step counts. Background is optional: at most one per Feature and one per Rule, with both scopes allowed. Outlines generate cases; Data Tables and Doc Strings are step arguments. Style defaults: kebab-case .feature names, two-space nesting, blank lines between scenarios, compact tables, third-person present-tense sentences, and quoted string values where appropriate; preserve sound local style and declared languages. Match outline placeholders to Examples headers. Or is not a step keyword.

Review with rule IDs, consequences, and concrete repairs. Separate binding findings from contextual suggestions. Do not confuse prose review, parsing, binding, and execution.

## Provenance and license

Combined from the BDD Agent Skills starter and [Automation Panda’s Gherkin Guidelines](https://github.com/AutomationPanda/gherkin-guidelines-for-ai/blob/main/gherkin-guidelines.md), consulted 2026-11-03. Grammar reference: [Cucumber Gherkin](https://cucumber.io/docs/gherkin/reference/). This synthesis deliberately treats stylistic mandates as contextual defaults, permits coherent temporal workflows, and distinguishes Feature-level from Rule-level Background scope. It is not an exact reproduction or an official Cucumber standard.

MIT License

Copyright (c) 2026 Pandy Knight
Copyright (c) 2026 BDD Agent Skills contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
