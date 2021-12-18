---
sidebar_position: 1000
sidebar_label: VueJS Lifecycle Hooks
title: VueJS Lifecycle Hooks Interview Question
slug: /vuejs-lifecycle-hooks-interview-question
tags:
  - Basic Vuejs Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is **Lifecycle Hooks** in VueJS? Please tell the names & functions of each hook?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  **Lifecycle hooks** are methods giving developers the opportunity to **add their own code at specific stages** of initialization of a component when it's created.

<figure>

![](/img/interviews/vue/lifecycle.svg)

</figure>

### Phases of Lifecycle

  There are 5 phases of a component lifecycle:
  1. **Creating (or Initialization) phase**: When **_data & events_** will be initialized.
  2. **Compiling Phase**: When **_templates or render functions_** will be compiled.
  3. **Mounting phase**: When **_templates and Virtual DOM_** will be mounted or rendered.
  4. **Updating phase**: When **_Virtual DOM_** will be re-rendered or patched based on data changes on your component.
  5. **Destroying phase**: When **_Everything_** that was attached to component will be destroyed.

:::tip
You can remember these phases (as well as lifecycle hooks) when thinking of `CRUD` in backend programming, but here's it is `CCMUD`!
:::

### Names & Functions of Each Hook

  - The **beforeCreate** hook runs at the middle of **creating phase**. So, here, you can't access ***data and events***
  - The **created** hook runs after **creating phase** but before ***Compiling Phase***. So, here, you can access ***data and events*** but not ***templates and Virtual DOM***.
  - The **beforeMount** hook runs after ***compiling phase*** and right before ***Mounting phase***. So, you can't access DOM (such as `this.$el`) here.
  - The **mounted** hook runs after ***Mounting phase***, you will have full access to the reactive component, templates, and rendered DOM (via `this.$el`).
  - The **beforeUpdate** hook runs after data changes on your component and before ***Updating phase***. At this point, Virtual DOM has not re-rendered or patched yet.
  - The **updated** hook runs after ***Updating phase***. Here, you can access data changes on your component and the updated DOM.
  - **beforeDestroy** hook runs before ***Destroying phase***. Your component will still be fully present and functional.
  - **destroyed** hook runs after ***Destroying phase***, there’s practically nothing left on your component.

</details>