---
layout: page.11ty.cjs
title: JESIDEA Web Components Documentation
---

# Introduction

JESIDEA web components are created to be consumed mainly in JESIDEA web apps, but with motivation for spread its use all over the world.
`jesidea-wc` is distributed on npm, so you can install it locally or use it via npm CDNs like unpkg.com.

# Guide
* [my-elements](./my-element-index)

## Local Installation

```bash
npm i jesidea-wc
```

## CDN

npm CDNs like [unpkg.com]() can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

For this element to work from unpkg.com specifically, you need to include the `?module` query parameter, which tells unpkg.com to rewrite "bare" module specificers to full URLs.

### HTML
```html
<script type="module" src="https://unpkg.com/jesidea-wc?module"></script>
```

### JavaScript
```html
import {JwcProjectCard} from 'https://unpkg.com/jesidea-wc?module';
```
