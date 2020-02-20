# ⚙️ Base Project Config ⚙️

This repository stores basic configuration for JS project tooling. I use it to streamline the process of setting up new projects, so that I'll be able to easily use the configuration I prefer (while making any project-specific changes).

## ESLint

`.eslintrc.js` defines ESLint rules to use. Most of them are code quality centric, as Prettier will handle any styling rules. Additionally, many of them might not be necessary in a TypeScript project (e.g. `no-use-before-define`).

`.eslintignore` defines some common directories to ignore (e.g. `dist/`).

### Possible Variations

The following rules/configuration options could be tweaked depending on the project.

* `env`
* `parserOptions`
* `plugins`
* `no-console`
* Jest rules

## Prettier

 `.prettierrc.js` defines Prettier configuration to override some of their defaults. Because who needs semi-colons when your linter can catch the edge cases where you need them? 😃
 
 `.prettierignore` defines some common directories to ignore (e.g. `dist/`).
 
## `package.json`

This file does not exist as an actual `package.json` to be consumed by npm/yarn. It is solely used to house more shared functionality (e.g. `scripts` for running ESLint and Prettier).

### Notes

* The `prettier` commands will possibly updated in the future to not include extensions. Prettier has hinted at support for formatting all files without using a glob that specifies extensions in [Prettier 2.0](https://github.com/prettier/prettier/issues/3503)

## TypeScript

`tsconfig.json` defines a TypeScript configuration to use. It uses all recommended "strict" rules, along with some linting rules. If using TypeScript, you'll likely be able to disable some ESLint rules (e.g. `no-unused-vars`).
