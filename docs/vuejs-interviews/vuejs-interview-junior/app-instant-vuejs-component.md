---
sidebar_position: 1000
sidebar_label: App instance and Vuejs component
title: Relationship Between Vuejs App Instance and Vuejs Component
slug: /relationship-vuejs-app-instance-vuejs-component
tags:
  - Vuejs Interviews Juniors
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is the relationship between **Vuejs app instance** and **Vuejs component**? Could we have multiple Vuejs intances in one project?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  1. A new **application instance** is as a ***starting point of a Vue application*** .
  2. A **root component** is as a ***starting point of application instance*** for rendering when we mount the application.
  3. A **root component** will the contains other ***components***

  So, the hierarchy of an Vuejs application is like below:

  ```
  Root Component
  └─ ComponentA
    ├─ Child Component
    │  ├─ ...
    │  └─ ...
  └─ ComponentB
      ├─ Child Component
    │  ├─ ...
    │  └─ ...
  ```

  And the code to start a Vue application:

  ```js
  const RootComponent = {
    /* options */
    components: {
      'component-a': ComponentA,
      'component-b': ComponentB
    }
  }
  const app = Vue.createApp(RootComponent)
  const vm = app.mount('#app') // mount does not return the application. Instead it returns the root component instance
  ```

  The application instance is used to register ***'globals' (route, component, directive, plugins,...)*** that can then be used by components within that application.

  ```js
  const app = Vue.createApp({})
  app.component('AGlobalComponent', AGlobalComponent)
  app.directive('aGlobalDirective', AGlobalDirective)
  app.use(AGlobalPlugin)
  ```

  And it's ok to have two instances in the same project.

</details>