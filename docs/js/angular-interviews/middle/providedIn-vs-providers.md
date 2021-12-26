---
sidebar_position: 1000
sidebar_label: ProvidedIn vs Providers
title: ProvidedIn vs Providers In Angular?
slug: /providedin-vs-providers-angular
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Could you tell the difference between **`injectable.providedIn`** vs **`module.providers`** In Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **providers**: are services provided by a module to injectors (such as, components or other services). And it's ***not Tree-shakeable*** (see [webpack tree-shaking](https://webpack.js.org/guides/tree-shaking/)) which means if the service is not used it won't get shaken out -> your app contains unsed code.
  ```ts
  @NgModule({
    // provide services to child modules
    providers: [
      CertainService
    ]
  })
  class AppModule {}
  ```
  - **providedIn**: Is ***Tree-shakeable providers*** - a service can ***provide himself*** to a specific injector and is ***tree-shakeable***. That means if the service is not used it will get shaken out to get your application smaller and faster.
  ```ts
  @Injectable({
    // provide himself no need module provides
    providedIn: 'root'
  })
  class CertainService {}
  ```
  
</details>