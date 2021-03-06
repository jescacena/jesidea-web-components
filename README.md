# Jesidea Web Components
Web components repository for Jesidea web apps

[Storybook demo in github pages](https://jescacena.github.io/jesidea-web-components)

## Install

Node v12.16.0+
```
npm i
```


## Local development

Run local development server & open browser in develop page (/dev)
```
npm run serve
```

Watch for *.ts changes
```
npm run build:watch
```

## Demoying with storybook
```
npm run storybook
```
**NOTE**: Stories get components from "dist/index.bundled.js" bundle. So make sure to have this bundle updated




## npm publish
https://www.npmjs.com/package/jesidea-wc

Log in into the public npm registry (jescacena)
```
npm adduser
```

*NOTA*: No olvidar indexar desde el /src/index.js si hay un componente nuevo

1. Edit package.json to bump up “version”
2. npm run storybook:build
3. npm run build:pro
4. git add . ; git commit -m ‘XXXX’
5. git tag -a v0.0.X -m "version 0.0.X"
6. git push origin master —tags
7. npm publish

## Test jesidea-landing-page in local
```
npm run build:pro-local-jesidea-landing
```
## Taggeo de commit antes de los publish

```
git tag -a v0.0.3 -m "version 0.0.3"
```

## Copy lib assets into jesidea-landing-page
```
npm run build:pro-local-jesidea-landing
```



---

### LitElement TypeScript starter 

This project includes a sample component using LitElement with TypeScript.

## Setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing

This sample uses Karma, Chai, Mocha, and the open-wc test helpers for testing. See the [open-wc testing documentation](https://open-wc.org/testing/testing.html) for more information.

Tests can be run with the `test` script:

```bash
npm test
```

## Dev Server

This sample uses open-wc's [es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) for previewing the project without additional build steps. ES dev server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.

## Editing

If you use VS Code, we highly reccomend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:
  - Syntax highlighting
  - Type-checking
  - Code completion
  - Hover-over docs
  - Jump to definition
  - Linting
  - Quick Fixes
  
  The project is setup to reccomend lit-plugin to VS Code users if they don't already have it installed.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Polymer Project's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when commiting files, but this can be added with Husky and and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Static Site

This project includes a simple website generated with the [eleventy](11ty.dev) static site generator and the templates and pages in `/docs-src`. The site is generated to `/docs` and intended to be checked in so that GitHub pages can serve the site [from `/docs` on the master branch](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

To enable the site go to the GitHub settings and change the GitHub Pages &quot;Source&quot; setting to &quot;master branch /docs folder&quot;.</p>

To build the site, run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:watch
```

The site will usually be served at http://localhost:8000.

## More information

See [Get started](https://lit-element.polymer-project.org/guide/start) on the LitElement site for more information.
