---
sidebar_position: 1000
sidebar_label: useClass vs useValue vs useFactory
title: Difference between useClass vs useValue vs useFactory providers In Angular?
slug: /useclass-vs-usevalue-vs-usefactory-providers
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is the difference between `useClass` vs `useValue` vs `useFactory` providers In Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **`useClass`**: Inject instance of declared service instead of instance of curent service class.

  Example: by default, the instance of `TestService` below will be injected, but if you declare `useClass`, the instance of `OtherTestService` will be injected insteads.
  ```ts
  @Injectable({
    providedIn: SomeModule,
    useClass: OtherTestService
  })
  class TestService {}
  ```

  - **`useFactory`**: Inject services based on some cases decided by factory function.
  ```ts
  // a factory (a function) decides which service will be injected insteaad of instance of TestService.
  export function xyzFactory(http?: HttpClient) {
    return new OtherTestService();
  }

  @Injectable({
    providedIn: SomeModule,
    useFactory: xyzFactory,
    deps: [HttpClient], // arguments of factory, this is optional
  })
  class TestService {}
  ```
  - **`useValue`**: Inject a declared value.

  ```ts
  @Injectable({
    providedIn: SomeModule,
    // Inject this value (which is an object) instead of instance of TestService
    useValue: {
      sayhi: function() {}
    },
  })
  class TestService {}
  ```
  - **`useExisting`**: is like an alias for an already registered provider.

  ```ts
  @Injectable({
    providedIn: SomeModule,
    // Inject OtherTestService which is registered in parent module's providers
    useExisting: OtherTestService,
  })
  class TestService {}
  ```

</details>