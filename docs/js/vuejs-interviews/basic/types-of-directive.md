---
sidebar_position: 1000
sidebar_label: Types of Directive
title: Types of Directive In VueJS
slug: /types-directive-vuejs
tags:
  - Basic Vuejs Interviews
---

<!-- truncate -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
Could you tell some Types of **Directive** In VueJS? And demonstrate by examples?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

- **Common Directive**: v-text, v-once, v-html, v-bind, v-show, v-model
- **Conditionals**: `<p v-if="shouldShowThis">Hey!</p>`
- **Loops**: `<li v-for="(value, name, index) in object" :key="value.id">{{ index }}</li>`
- **Events**: `<form v-on:submit.prevent="formSubmitted"></form>`
- **Literal Directives**: `<div v-component="my-component"></div>` (string -> resolve the type of component)
- **Inline Expressions**: `<div v-text="'hello ' + user.firstName + ' ' + user.lastName"></div>`
- **Argument**: `<div v-on="click : clickHandler"></div>`
- **Filters**:
- **Multiple Clauses (object synctax)**: `<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>`
- **Empty Directives**: `<div v-pre><pre>`

</details>