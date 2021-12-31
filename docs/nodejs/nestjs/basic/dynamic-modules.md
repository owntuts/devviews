---
sidebar_position: 1000
sidebar_label: Dynamic modules
title: What Is Dynamic modules In NestJS?
slug: /dynamic-modules-nestjs
tags:
  - NestJS Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
What Is Dynamic modules In NestJS?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Dynamic Module** is customizable modules that ***can register and configure providers dynamically*** (dynamic providers is provider depends on certain parameters).
  ```ts {6}
  @Module({
    // ...
  })
  export class MyModule {
    static forRoot(options? = ''): DynamicModule {
      const dynamicProviders = myFunction(options); // depends on certain option
      return {
        providers: dynamicProviders,
        exports: providers,
      };
    }
  }
  ```

</details>