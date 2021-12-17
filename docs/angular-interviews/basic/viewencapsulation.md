---
sidebar_position: 1000
sidebar_label: What Is ViewEncapsulation in Angular?
title: What Is ViewEncapsulation in Angular?
slug: /viewencapsulation-angular
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What Is **`ViewEncapsulation`** mode in Angular? What is the difference among **`ViewEncapsulation.Emulated`** vs **`ViewEncapsulation.Native`** and **`ViewEncapsulation.None`**?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  Independent building blocks of Angular app is **Components**. Each cmponent has it's own structure and style. The style can be defined at a ***global level*** or they can be defined at the component level (***local level***). But do you know how to define style of component to make it's local or global? That is what `ViewEncapsulation` mode in Angular will help us.

  There are three types of `ViewEncapsulation`:

  ![ViewEncapsulation types](/img/tutorial/angular/ViewEncapsulation.png)

  - **ViewEncapsulation.Native** (local scope): Each component has it's own ***native Shadow DOM***. The generated style is scoped in each shadow DOM. So,
    - Styles from main HTML do not propagate to the component.
    - Styles of component do not apply to all children.
    - Styles of component do not affect to the global styles.
  - **ViewEncapsulation.Emulated** (local scope): The Emulated mode is ***the default one***. Each component has it's own ***simulated Shadow DOM*** (use it for browser doesn't support shadow DOM natively). The style scope is similar to `ViewEncapsulation.Native` mode.
  - **ViewEncapsulation.None** (global scope): The style of component will be rendered in style tag in the header of html => It's visible to all components and so apply to all children too.

:::note
There's **ViewEncapsulation.ShadowDom**: Which uses browser’s **[native Shadow DOM v1](https://developers.google.com/web/fundamentals/web-components/shadowdom)** for better cross-browser support and is a shared standard across the browsers.
:::

</details>