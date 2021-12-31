---
sidebar_position: 1000
sidebar_label: Injection Scope Dependence
title: Injection Scope Dependence in NestJS
slug: /injection-scope-dependence
tags:
  - NestJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
In which case when you declare a scope of a service but then it effect to scope of a component?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  In NestJS, Scope bubbles up the injection chain. For example, if you have an injection chain like this:
  `MyController <- (injects) MyService <- (injects) MyRepository`, then when you declare `MyService` scope is `SCOPE.REQUEST` then that makes `MyController` to be `SCOPE.REQUEST` too, but it's not effect `MyRepository`.

</details>