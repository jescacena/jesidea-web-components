---
layout: page.11ty.cjs
title: <jwc-layout-header>
---

# &lt;jwc-layout-header>

`<jwc-layout-header>` layout header component

## As easy as HTML

<section class="columns">
  <div>

`<jwc-layout-header>` is just an HTML element. You can it anywhere you can use HTML!

```html
<jwc-layout-header></jwc-layout-header>
```

  </div>
  <div>

<jwc-layout-header></jwc-layout-header>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<jwc-layout-header>` can be configured with attributed in plain HTML.

```html
<jwc-layout-header logo="https://www.bioecoactual.com/wp-content/uploads/2016/09/gandhi.jpg"></jwc-layout-header>
```

  </div>
  <div>

<jwc-layout-header logo="https://www.bioecoactual.com/wp-content/uploads/2016/09/gandhi.jpg"></jwc-layout-header>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<jwc-layout-header>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;jwc-layout-header&gt;</h2>
  <jwc-layout-header logo=${image}></jwc-layout-header>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;jwc-layout-header&gt;</h2>
<jwc-layout-header></jwc-layout-header>

  </div>
</section>
