# Contributing to boggler

Thanks for considering contribution to boggler. You can git clone the
boggler source on the following address and send PR with your patch. But,
before doing that, I recommend you to read this to follow the conventions.

https://github.com/Bogglian/boggler

```
$ git clone https://github.com/Bogglian/boggler.git
# OR
$ git clone https://github.com/Bogglian/boggler
```

## Coding style

The boggler is written in vscode. So we use the vscode extension for the coding style. follow:

- Prettier in vscode
- eslint in vscode

we use 'prettier-eslint' for default environment. also, use eslint plugin 'eslint-config-airbnb'.

https://github.com/prettier/prettier-eslint

```
$ yarn add eslint-config-airbnb
// or $ npm install eslint-config-airbnb
```

## Commit Style

Our commit messages conform to the following rules:

> Please don't write commit messages in the past. also, don't use periods in the title. But, please write in the content.

### Commit Style Types

|Title |Describe                                         |Usage - commit title                               |
|------|-------------------------------------------------|---------------------------------------------------|
|feat  |Add or Delete a feature.                         |feat: Add feature.js or feat: Add feature name     |
|fix   |fix the code                                     |fix: Modify code.js                                |
|docs  |All about documentation.                         |docs: Add title or docs: Modify README.md contents |
|env   |All about the development environment settings.  |env: Update Package.json or Update Packages        |

## Issue Template

We are using [issue templates](.github/ISSUE_TEMPLATE/).
