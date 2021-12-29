---
sidebar_position: 1000
sidebar_label: Script Tag Loading Strategy
title: beforeInteractive vs afterInteractive vs lazyOnload
slug: /beforeinteractive-vs-afterinteractive-vs-lazyonload
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please tell the difference among loading strategies of Next.js `Script` tag: `beforeInteractive` vs `afterInteractive` vs `lazyOnload`?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  NextJS supports `Script` tag to add a third-party script to your application. Example,
  `<Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" />`
  
  With `Script` tag, There are three different loading strategies that can be used:

  - **`beforeInteractive`**: Load before the page is interactive
  - **`afterInteractive`** (default): Load immediately after the page becomes interactive
  - **`lazyOnload`**: Load during idle time

</details>