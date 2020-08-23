---
layout: example.11ty.cjs
title: <jwc-project-card> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: jwc-project-card ⌲ Examples
---

<style>
</style>

<jwc-project-card></jwc-project-card>

<h3>HTML</h3>

```html
<jwc-project-card></jwc-project-card>
```

<jwc-project-card class="example-2" image="https://apprecs.org/gp/images/app-icons/300/76/net.cubo2.afistro.jpg" data="{name: 'Jander Clander'}"></jwc-project-card>

<script>
  var sample2Element = document.querySelector('.example-2');
  sample2Element.data = {
                name: "Codersnack",
                description: "Learn and review your programming skills with snacks",
                website: "http://jesidea.com",
                repo: "http://jander.com",
                download: "http://playstore.com",
            };
</script>

<h3>HTML</h3>

```html
<jwc-project-card image="https://apprecs.org/gp/images/app-icons/300/76/net.cubo2.afistro.jpg"></jwc-project-card>
<script>
  var sample2Element = document.querySelector('.example-2');
  sample2Element.data = {
                name: "Codersnack",
                description: "Learn and review your programming skills with snacks",
                website: "http://jesidea.com",
                repo: "http://jander.com",
                download: "http://playstore.com",
            };
</script>
```
