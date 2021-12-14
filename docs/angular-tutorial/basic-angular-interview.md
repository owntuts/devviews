---
sidebar_position: 3
id: basic-angular-interview-questions-answers
sidebar_label: Basic Angular Interview
title: Basic Angular Interview Questions
tags:
  - Angular Interview
---

# Basic Angular Interview Questions & Answers

Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

[----------]::
:::quest Question:

\***`ಠ_ಠ`**\* : 
AOT vs JIT?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **AOT** refers to Ahead-of-time compilation, compiled at build time before the application runing in a browser.
  - **JIT**: Just-in-time compilation, where code is compiled just before it is run in the browser.

</details>

[----------]::

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is the differences between `forRoot()` and `forChild()` Patterns and what are the use cases for each?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  As default, lazyloaded module (feature module) can’t use Services declared in root level (see image below). To use the services, you need to import them again. This may cause bug & the imported service is not singeton (because you're sharing the service among modules).

  <figure align="center">

  ![for root](/img/tutorial/angular/forroot.png)
  
  <figCaption>Feature modules can't use services in root module!</figCaption>
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

[----------]::
:::quest Question:

\***`ಠ_ಠ`**\* : 
bootstrapped component vs entry component

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

  - You do not reference these inside any template -> use entry component -> This prevents the compiler to treeshake these components out of the module.
  - 3 main types of entry components:
    - A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap process (renders the root component inside the DOM) (application launch).
    - A component you specify in a route definition
    - Dynamic component

:::note

> As of Angular 9 entryComponents is no longer required

:::

</details>