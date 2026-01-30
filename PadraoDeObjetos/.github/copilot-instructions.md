# Copilot instructions for PadraoDeObjetos ✅

## Big picture
- This repository is a small, educational collection of JavaScript object-pattern examples. Current folders: `ConstrutoreseClasses(ES6)` and `FactoryFunctions(FuncoesFabrica)`.
- Purpose: demonstrate common object creation patterns (ES6 `class` and factory functions) with minimal dependencies and direct console output.

## How to run examples 🔧
- These are plain Node scripts. Run any example with:
  - `node ConstrutoreseClasses(ES6)/index.js`
  - `node FactoryFunctions(FuncoesFabrica)/index.js`
- There is no `package.json` or test runner; assume Node >= 12 for ES6 features.

## Coding conventions & patterns observed 📐
- Folder naming pattern: `EnglishName(PortugueseName)` (e.g., `FactoryFunctions(FuncoesFabrica)`). New examples should follow this convention.
- Source files are tiny, self-contained demos. Keep new examples focused and limited to a single `index.js` for the pattern demonstration.
- Style notes:
  - Uses ES6 features: `class`, concise method syntax, template literals, `const`/`let`.
  - Uses `"` double quotes and semicolons; 2-space indentation.
  - Identifiers and comments are in Portuguese (e.g., `criarCarro`, `exibirInfo`). Keep naming consistent with existing files.
- Methods use `this` and concise syntax: prefer `exibirInfo() { ... }` over function properties.

## What an AI agent should do (practical rules) 🤖
- Make minimal, self-contained edits: add a new folder for a new pattern with one `index.js` and short explanatory comment at the top.
- When updating examples, preserve the simple console-based output and Portuguese identifiers unless the change is to add an English translation file — add both `index.js` (Portuguese) and `index.en.js` (English) if translations are required.
- Do not introduce build tools, bundlers, or transpilation without explicit user instruction.
- If adding dependencies or tests, ask first; there is no existing test or dependency infrastructure.

## Files to reference when making changes 🔍
- `ConstrutoreseClasses(ES6)/index.js` — canonical ES6 class example.
- `FactoryFunctions(FuncoesFabrica)/index.js` — canonical factory function example.

## Quick examples to copy style from
- Factory example:
```js
function criarCarro(marca, modelo) {
  return { marca, modelo, exibirInfo() { console.log(`${this.marca} ${this.modelo}`); } };
}
```
- Class example:
```js
class Animal {
  constructor(nome) { this.nome = nome; }
  falar() { console.log(`${this.nome} faz um som.`); }
}
```

## When in doubt
- Ask the repo maintainer before adding tests, dependencies, or changing folder naming.

---

Please review these instructions and tell me if you'd like me to add:
- a short top-level `README.md` summarizing patterns, or
- an example `package.json` and a basic test using the built-in `assert` module.
