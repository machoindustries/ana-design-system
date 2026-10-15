// check-tokens.mjs — fails when styling bypasses the semantic token layer.
//
// Components and pages use semantic tokens (tokens.css, CONTRIBUTING.md).
// This flags the ways primitives sneak back in:
//   - var(--ana-*) outside tokens.css
//   - Tailwind's ana-* palette classes (bg-ana-navy, text-ana-blue, ...)
//   - Tailwind's own grays (slate, gray, zinc, neutral, stone)
//   - hex colors in JS/JSX
//   - inline style={...}
//
// Run with `npm run lint:tokens` (also part of `npm run lint`).

import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const srcDir = join(root, 'src')

const UTILITY = '(?:bg|text|border|from|via|to|outline|ring|fill|stroke|decoration|divide|accent|caret|placeholder|shadow)'

const rules = [
  {
    id: 'primitive-var',
    pattern: /var\(--ana-[a-z]+(?:-\d+)?\)/,
    message: 'Primitive token. Use the semantic token for its purpose, e.g. --color-background-dark, --color-text-brand, --color-background-info.',
  },
  {
    id: 'ana-class',
    pattern: new RegExp(`\\b${UTILITY}-ana-(?:red|green|navy|blue|orange|yellow|gray|white)\\b`),
    message: 'Tailwind palette class. Use a semantic one: bg-surface-dark (navy), text-[var(--color-text-brand)] (navy text), bg-surface-brand (green), text-[var(--color-text-info)] (blue).',
  },
  {
    id: 'tailwind-gray',
    pattern: new RegExp(`\\b${UTILITY}-(?:slate|gray|zinc|neutral|stone)-\\d`),
    message: 'Tailwind gray. Use --color-text-secondary for supporting text, bg-surface-muted / bg-surface-soft for panels.',
  },
  {
    id: 'hex',
    pattern: /(?<![&\w])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/,
    extensions: ['.js', '.jsx'],
    message: 'Hard-coded color. Colors belong in tokens.css.',
  },
  {
    id: 'inline-style',
    pattern: /\bstyle=\{/,
    extensions: ['.jsx'],
    message: 'Inline style. Use a Tailwind class or a component class in index.css.',
  },
]

// Files allowed to break a rule, and why.
const exceptions = {
  'src/tokens.css': { all: true, why: 'defines the primitives' },
  'src/components/core/ColorSwatch.jsx': { rules: ['primitive-var'], why: 'displays the primitives on Foundations' },
  'src/data/systemData.js': { rules: ['hex'], why: 'hex values are documentation data' },
  'src/pages/DocsPage.jsx': { rules: ['primitive-var'], why: 'shows a primitive as the example of what to avoid' },
}

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else if (/\.(js|jsx|css)$/.test(entry.name)) yield path
  }
}

const findings = []
for (const file of walk(srcDir)) {
  const rel = relative(root, file)
  const exception = exceptions[rel]
  if (exception?.all) continue
  const ext = rel.slice(rel.lastIndexOf('.'))
  readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, i) => {
    for (const rule of rules) {
      if (rule.extensions && !rule.extensions.includes(ext)) continue
      if (exception?.rules?.includes(rule.id)) continue
      const match = line.match(rule.pattern)
      if (match) findings.push({ rel, line: i + 1, rule, found: match[0] })
    }
  })
}

if (findings.length) {
  for (const f of findings) {
    console.error(`${f.rel}:${f.line}  ${f.found}\n  ${f.rule.message}`)
  }
  console.error(`\n${findings.length} token issue${findings.length === 1 ? '' : 's'} found.`)
  process.exit(1)
}
console.log('Token check passed: no primitives, Tailwind grays, hex colors or inline styles outside the allowed files.')
