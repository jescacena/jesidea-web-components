---
layout: page.11ty.cjs
title: <jwc-project-card>
---

# &lt;jwc-project-card>

`<jwc-project-card>` wraps in a nice card box all related content for a personal project: including repositories, website and download urls (mobile apps)

## As easy as HTML

<section class="columns">
  <div>

`<jwc-project-card>` is just an HTML element. You can it anywhere you can use HTML!

```html
<jwc-project-card></jwc-project-card>
```

  </div>
  <div>

<jwc-project-card></jwc-project-card>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<jwc-project-card>` can be configured with attributed in plain HTML.

```html
<jwc-project-card image="https://www.bioecoactual.com/wp-content/uploads/2016/09/gandhi.jpg"></jwc-project-card>
```

  </div>
  <div>

<jwc-project-card name="https://www.bioecoactual.com/wp-content/uploads/2016/09/gandhi.jpg"></jwc-project-card>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<jwc-project-card>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;jwc-project-card&gt;</h2>
  <jwc-project-card image=${image}></jwc-project-card>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;jwc-project-card&gt;</h2>
<jwc-project-card name="lit-html"></jwc-project-card>

  </div>
</section>
