---
sidebar_position: 1000
sidebar_label: JIT vs AOT
title: Methods vs Computed in Vue
slug: /methods-vs-computed-vue
tags:
  - Basic Vuejs Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is the main difference between a **methods** and a **computed** value in Vue.js?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **Computed properties**: are ***cached*** based on their dependencies. A computed property will only re-evaluate when some of its dependencies have changed.

  - **Method**: is just like a normal method in the javascript. It always re-executes the code irrespective of changes in the code.

</details>