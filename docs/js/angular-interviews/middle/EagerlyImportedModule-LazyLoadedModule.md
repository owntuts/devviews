---
sidebar_position: 1000
sidebar_label: providedIn Type
title: ProvidedIn EagerlyImportedModule vs LazyLoadedModule vs root In Angular?
slug: /providedin-eagerlyimportedmodule-vs-lazyloadedmodule-vs-root
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is the difference among `providedIn: 'root'`, `providedIn: platform`, `providedIn: any` In Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  `providedIn` in Angular allows a service inject itself to a specific module. For example, when you declare:
  ```ts title="user-service.service.ts"
  @Injectable({
    providedIn: EagerModule
  })
  export class UserService {}
  ```
  You can use the service in every components of `EagerModule` no need to add it to a module's providers array.
  ```ts title="eager-component.component.ts"
  @Component({})
  export class EagerComponent {
    constructor(private userService: UserService){}
  }
  ```

  - **`providedIn: 'root'`**: 'root' stands for root module scope. That means injecting service itself to root module as a singleton instance. It's equivalent to providers with `forRoot`.
  ```ts
  @Injectable({
    providedIn: 'root'
  })
  export class UserService {}
  ```
  In any components of the rest of application. You can use `UserService`
  ```ts
  @Component({})
  export class AppComponent {
    constructor(private userService: UserService){}
  }
  ```
  - **`providedIn: 'platform'`**: 'platform' stands for platform scope. A page (platform) may have multiple Angular apps. `providedIn: 'platform'` inject services itself as singleton instance to each app.
  - **`providedIn: 'any'`**: 'any' stands for any scope. Provides a unique instance to every module (except lazy modules - different instances will be available to each lazy module) that injects the service.
  ![any provider in Angular](/img/interviews/angular/any-provider.svg)

  This is diffrence from `root` strategy in which lazy or eager module shared the same singleton service instance.
  
</details>