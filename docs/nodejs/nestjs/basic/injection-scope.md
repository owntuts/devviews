---
sidebar_position: 1000
sidebar_label: Injection Scope
title: DEFAULT vs REQUEST vs TRANSIENT in NestJS?
slug: /default-vs-request-vs-transient
tags:
  - NestJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Pleas describe the difference among injection scope of provider: `DEFAULT` vs `REQUEST` vs `TRANSIENT` In NestJS? Does an controller has it's scope?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  In NestJS, **Injection Scope** of a provider declares ***its lifetime***. Controller has it's scope similar to scope of provider.

  - `DEFAULT`: When provider is `DEFAULT` scope, the application initialize one ***singleton*** instance for all injections.
  - `REQUEST`: ***Each request*** will receive a new instance of the provider. The instance is garbage-collected after the request completion.
  - `TRANSIENT`:	***Each consumer*** that injects a transient provider will receive a new, dedicated instance.

  #### Example of Scope
  ```ts
  @Injectable({
    scope: Scope.REQUEST
  })
  class MyService {
    //  you may want to access a reference to request object
    constructor(@Inject(REQUEST) private req: REQUEST) {}
  }
  ```

</details>