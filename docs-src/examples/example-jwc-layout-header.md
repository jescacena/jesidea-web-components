---
layout: example.11ty.cjs
title: <jwc-layout-header> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: jwc-layout-header ⌲ Examples
---

<style>
</style>

<jwc-layout-header></jwc-layout-header>

<h3>HTML</h3>

```html
<jwc-layout-header></jwc-layout-header>
```

<jwc-layout-header class="example-lh" logo="https://apprecs.org/gp/images/app-icons/300/76/net.cubo2.afistro.jpg"></jwc-layout-header>

<script>
  var sample2Element = document.querySelector('.example-lh');
  sample2Element.menuItems = [
        { label: "Jander", url: "/home" },
        { label: "Clander", url: "/home/clander" },
        { label: "Pecador", url: "/home/pecador" }
    ];
</script>

<h3>HTML</h3>

```html
<jwc-layout-header logo="https://apprecs.org/gp/images/app-icons/300/76/net.cubo2.afistro.jpg"></jwc-layout-header>
<script>
  var sample2Element = document.querySelector('.example-lh');
  sample2Element.menuItems = [
        { label: "Jander", url: "/home" },
        { label: "Clander", url: "/home/clander" },
        { label: "Pecador", url: "/home/pecador" }
    ];
</script>
```
