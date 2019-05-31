# ⚙️ Base Project Config ⚙️

This repository stores basic configuration for JS project tooling. I use it to streamline the process of setting up new projects, so that I'll be able to easily use the configuration I prefer (while making any project-specific changes).

## ESLint

`.eslintrc.js` defines ESLint rules to use. Most of them are code quality centric, as Prettier will handle any styling rules. Additionally, many of them might not be necessary in a TypeScript project (i.e. `no-use-before-define`).

### Possible Variations
The following rules/configuration options could be tweaked depending on the project.

* `env`
* `parserOptions`
* `plugins`
* `no-console`
* Jest rules

## Prettier
 `.prettierrc.js` defines Prettier configuration to override some of their defaults. Because who needs semi-colons when your linter can catch the edge cases where you need them? 😃