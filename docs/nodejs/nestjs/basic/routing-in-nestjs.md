---
sidebar_position: 1000
sidebar_label: Routing
title: Routing In NestJS?
slug: /routing-in-nestjs
tags:
  - NestJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Does NextJS provides with routing system? Please give an example how to route to a sub domain `admin.example.com`?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  NextJS doesn't support routing system separately but the routing comes with `Controller` like in Spring or .Net.

  ### Example
  ```ts
  @Controller({ host: 'admin.example.com' })
    export class AdminController {
      @Get()
      index(): string {
        return 'Admin page';
      }
    }
  ```

  In case, you want to deal with multiple subdomains (such as, `admin1.example.com` & `admin2.example.com`). You can use dynamic subdomain routing like below.
  ```ts
  @Controller({ host: ':dashboard.example.com' })
  export class AccountController {
    @Get()
    getInfo(@HostParam('dashboard') dashboard: string) {
      return account;
    }
  }
  ```

</details>