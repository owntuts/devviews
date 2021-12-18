---
sidebar_position: 1000
sidebar_label: JIT vs AOT
title: Differences Between JiT and AOT in Angular
slug: /differences-jit-aot-angular
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What are Differences between **Just-in-Time (JiT)** vs **Ahead-of-Time (AOT)** compilation techniques in Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **AOT** refers to Ahead-of-time compilation, ***compiled at build time*** before the application runing in a browser.
  - **JIT**: Just-in-time compilation, where code is ***compiled at run time*** just before it is run in the browser.

| JIT                                           | AOT                                              |
|-----------------------------------------------|--------------------------------------------------|
| `ng build && ng serve`                        | `ng build --aot && ng serve --aot`               |
| Compiled in the browser (run time)            | Compiled by command line on machine (build time) |
| Each file compiled & loaded separately        | All code compiled together                       |
| Used for local development                    | Used for production builds                       |

</details>