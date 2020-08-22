---
layout: page.11ty.cjs
title: <jwc-user-profile>
---

# &lt;jwc-user-profile>

`<jwc-user-profile>` wraps in a nice card box all related content for a user: including repositories, social networks, etc

## As easy as HTML

<section class="columns">
  <div>

`<jwc-user-profile>` is just an HTML element. You can it anywhere you can use HTML!

```html
<jwc-user-profile></jwc-user-profile>
```

  </div>
  <div>

<jwc-user-profile></jwc-user-profile>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<jwc-user-profile>` can be configured with attributed in plain HTML.

```html
<jwc-user-profile image="https://www.bioecoactual.com/wp-content/uploads/2016/09/gandhi.jpg"></jwc-user-profile>
```

  </div>
  <div>

<jwc-user-profile name="https://www.bioecoactual.com/wp-content/uploads/2016/09/gandhi.jpg"></jwc-user-profile>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<jwc-user-profile>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;jwc-user-profile&gt;</h2>
  <jwc-user-profile image=${image}></jwc-user-profile>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;jwc-user-profile&gt;</h2>
<jwc-user-profile name="lit-html"></jwc-user-profile>

  </div>
</section>
