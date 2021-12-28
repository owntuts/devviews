---
sidebar_position: 1000
sidebar_label: Directive of Lifecycle Hooks
title: Lifecycle Hooks of Directive In VueJS
slug: /directive-lifecycle-hooks
tags:
  - Basic Vuejs Interviews
---

<!-- truncate -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain about **Lifecycle Hooks of Directive** in VueJS?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

  ```ts
  app.directive('my-directive', {
    // called before bound element's attributes or event listeners are applied
    created() {},
    // called before bound element's parent component is mounted
    beforeMount() {},
    // called when bound element's parent component is mounted
    mounted() {},
    // called before the containing component's VNode is updated
    beforeUpdate() {},
    // called after the containing component's VNode and the VNodes of its
    // children have updated
    updated() {},
    // called before the bound element's parent component is unmounted
    beforeUnmount() {},
    // called when the bound element's parent component is unmounted
    unmounted() {}
  })
  ```

</details>