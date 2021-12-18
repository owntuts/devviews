---
sidebar_position: 1000
sidebar_label: forRoot vs forChild
title: Differences Between forRoot() and forChild() Patterns
slug: /differences-forroot-forchild-patterns
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is the differences between `forRoot()` and `forChild()` Patterns and what are the use cases for each?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  As default, lazyloaded module (feature module) can’t use Services declared in root level (see image below). To use the services, you need to import them again. This may cause bug & the imported service is not singeton (because you're sharing the service among modules).

  <figure>

  ![for root](/img/interviews/angular/forroot.png)
  
  <figcaption>Feature modules can't use services in root module!</figcaption>
  </figure>

  #### Solution:

  We declare `forRoot` and `forFeature` in the feature module.

  ```tsx {11,18} title='FeatureModule.tsx'
  const rootProviders = [...]; // providers for root level
  const lazyProviders = [...]; // providers for feature level

  @ngModule({
    declarations: [],
    exports: []
  })
  class NgModule {
    private static created = false;
    // forRoot allows lazyloaded module access to root level
    forRoot(): ModulesWithProviders {
      // make it Singleton (created only once)
      if (NgModule.created) {
        return throw new Error('NgModule. forRoot() used more than once');
      }
      return { module: NgModule, providers: [...rootProviders] };
    }
    forFeature(): ModulesWithProviders {
      return { module: NgModule, providers: [...lazyProviders] };
    }
  }
  ```

  then we import feature module in root module

  ```tsx title='RootModule.ts'
  @ngModule({
    imports: [FeatureModule.forRoot()]
  })
  ```

  and in other feature modules, we use it on demand

  ```tsx title='OtherFeatureModule.ts'
  @ngModule({
    imports: [FeatureModule.forFeature()]
  })
  ```

</details>