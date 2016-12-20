# Corilla React Components

A collection of React components used to build [Corilla](http://corilla.com).

This is a work in progress as we look at migrating our components over to this repository.

At the moment this isn't usable but the ultimate goal is to make it easy for others to use these components (publish to npm etc).

## Installation

```bash
npm install --save corilla-components
```

## Usage

### Use modularized corilla-components

* Manually import

  ```bash
  import { ComponentName } from 'corilla-components/lib/ComponentName'
  ```

## Components

- [MarkdownPreview](src/components/MarkdownPreview/)

## Commands

* Run examples website

  ```bash
  npm run demo
  ```

* Run components tests

  ```bash
  // run once
  npm t

  // run in watch mode
  npm run watch-tests

  // run test coverage
  npm run cover-test

  // run coverage in watch mode
  npm run watch-cover
  ```

## Versioning

- `npm run release-patch`: minor bug fixes, extra documentation, etc. Does not add any new functionality.
- `npm run release-minor`: new functionality & features
- `npm run release-major`: backwards-incompatible changes, like if there is a significant rewrite / refactor. Not used very often.