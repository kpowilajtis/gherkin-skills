const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const prefix = 'skills/gherkin/';
const layers = ['gherkin.md', 'gherkin.mini.md', 'gherkin.nano.md'];
let baseline;
for (const layer of layers) {
  const text = read(prefix + 'references/' + layer);
  const chunks = layer === 'gherkin.nano.md'
    ? [...text.matchAll(/^- \*\*(BDD-\d+) (MUST|SHOULD):\*\* (.+)$/gm)].map(m => [m[1],m[2],m[3]])
    : [...text.matchAll(/^## (BDD-\d+) — [^\n]+\n\n\*\*(MUST|SHOULD)\.\*\* (.+)$/gm)].map(m => [m[1],m[2],m[3]]);
  assert.equal(chunks.length, 20, `${layer}: expected 20 rules`);
  assert.equal(new Set(chunks.map(r=>r[0])).size, 20, `${layer}: duplicate IDs`);
  if (baseline) assert.deepEqual(chunks, baseline, `${layer}: strength or principle drift`);
  else baseline = chunks;
  assert.equal((text.match(/^```/gm)||[]).length % 2, 0, `${layer}: unbalanced fences`);
  assert(text.includes('Copyright (c) 2026 Pandy Knight'), `${layer}: missing attribution`);
}
const skill = read(prefix+'SKILL.md');
assert(skill.startsWith('---\nname: gherkin\ndescription: '), 'Missing skill metadata');
assert(skill.includes('\nlicense: MIT\n'), 'Missing license field');
assert(!skill.includes('[TODO:'), 'Unfinished skill scaffold');
const ui = read(prefix+'agents/openai.yaml');
assert(ui.includes('allow_implicit_invocation: true'), 'Unexpected invocation policy');
assert(ui.includes('$gherkin'), 'Default prompt must name skill');
function walk(dir) {
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})) {
    const f = path.join(dir,ent.name);
    if(ent.isDirectory()) walk(f);
    else if(f.endsWith('.md')) {
      for(const m of fs.readFileSync(f,'utf8').matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
        if(/^(https?:|#)/.test(m[1])) continue;
        const target = path.resolve(path.dirname(f),m[1].split('#')[0]);
        assert(target.startsWith(root+path.sep), `Link escapes package: ${m[1]}`);
        assert(fs.existsSync(target), `Broken local link: ${m[1]}`);
      }
    }
  }
}
walk(root);
for(const f of ['README.md','LICENSE','.github/workflows/validate.yml']) assert(fs.existsSync(path.join(root,f)),`Missing ${f}`);
console.log('PASS: skill metadata, 20 consistent rules in 3 layers, attribution, fences, and local links.');
console.log('Package integrity only; no parser, runner, or model evaluation performed.');
