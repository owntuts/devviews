---
sidebar_position: 1000
sidebar_label: Local vs Global Components
title: Local Components vs Global Components in VueJS
slug: /local-components-vs-global-components-vuejs
tags:
  - Basic Vuejs Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Could you explain the differences between **Local Components** and **Global Components** in VueJS?

Please give me example of creating **Local Components** and **Global Components**?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  - A global is a component that is ***registered globally by app instance*** and can be accessed every where in app instance.
  - Alocal component is a component that is not registered globally but ***locally in a module (a seperate file)***, and can therefore only be used on components where it is registered.

#### Global Registration Example
```js
const app = Vue.createApp({})
app.component('component-a', {
  /* ... */
})
app.component('component-b', {
  /* ... */
})
app.mount('#app')
```

```html
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
</div>
```

#### Local Registration Example

```js title="RootComponent.vue"
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export default {
  components: {
    ComponentA,
    ComponentC
  }
  // ...
}
```

```js title="app.vue"
import RootComponent from './RootComponent.vue'
const app = Vue.createApp(RootComponent)
```

</details>