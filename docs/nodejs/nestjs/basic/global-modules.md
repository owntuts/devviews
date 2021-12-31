---
sidebar_position: 1000
sidebar_label: Global modules
title: Global modules In NestJS?
slug: /global-modules-nestjs
tags:
  - NestJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
How to make a feature module to be global in NextJS?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  Just use `@Global` decorator. After making the module global, other modules that wish to inject it's service will not need to import it. But Making everything global is not a good design decision.
  ```ts
  @Global() // other modules can access exported controllers & services
  @Module({
    controllers: [MyController],
    providers: [MyService],
    exports: [MyController, MyService],
  })
  export class FeatureModule {}
  ```

</details>