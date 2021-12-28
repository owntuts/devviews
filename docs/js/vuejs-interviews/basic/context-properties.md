---
sidebar_position: 1000
sidebar_label: Types of Directive
title: Arguments of Lifecycle Hooks In VueJS
slug: /arguments-lifecycle-hooks
tags:
  - Basic Vuejs Interviews
---

<!-- truncate -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain about **context properties** - arguments of lifecycle hooks of VueJS directive?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

  - el: which is a vnode (virtual node) - a blueprint of the real DOM of bound element.
  - prevNode: The previous virtual node, only available in the beforeUpdate and updated hooks
  - binding: An object containing the binding infos.
    - **instance**: The instance of the component where directive is used.
    - **value**: The value passed to the directive: `v-my-directive="2"`.
    - **oldValue**: The previous value, only available in ***beforeUpdate*** and ***updated***.
    - **arg**: The argument passed to the directive: `v-my-directive:foo`.
    - **modifiers**: `v-my-directive.foo.bar`, the modifiers object would be { foo: true, bar: true }.
    - **dir**: an object, the second argument of directive function.
    ```ts
    app.directive('focus', {
      mounted(el) {
        el.focus()
      }
    })
      ```

</details>