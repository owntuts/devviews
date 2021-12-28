---
sidebar_position: 1000
sidebar_label: Dynamic Directive Arguments
title: Dynamic Directive Arguments Example
slug: /dynamic-directive-argument-example
tags:
  - Basic Vuejs Interviews
---

<!-- truncate -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please give an example of **Dynamic Directive Arguments**? And point out what is **directive**, **argument**, **value**, **modifiers**, **context properties** and **lifecycle hooks** in your example?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

  In the following example, 
  - `<p>` is **bound element**.
  - `App` is **parent component** of bound element.
  - `v-pin` is **directive**, `[direction]` is **dynamic argument**, `pinPadding` is **value**.
  - `clickable.dragable` are **modifiers**.
  - `mounted` & `updated` is **lifecycle hooks**
  - `el, binding`: are ***arguments of lifecycle hooks*** (or called **context properties**).

```html title="index.html"
<p v-pin.clickable.dragable:[direction]="pinPadding"></p>
```
```js title="index.js"
const app = Vue.createApp({
  data() {
    return {
      direction: 'right',
      pinPadding: 200
    }
  }
})

app.directive('pin', {
  mounted(el, binding, modifiers) {
    const s = binding.arg || 'top';
    el.style[s] = binding.value + 'px';
    console.log(modifiers) // { clickable: true, dragable: true }
  },
  updated(el, binding) {
    // ...
  }
})
```

</details>