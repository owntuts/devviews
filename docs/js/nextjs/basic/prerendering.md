---
sidebar_position: 1000
sidebar_label: Pre-rendering
title: What is Pre-rendering in NextJS
slug: /pre-rendering-nextjs
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is **Pre-rendering** in NextJS? How many forms of Pre-rendering in NextJS?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Pre-rendering**: means **rendering HTML in advance** instead of having it all done by client-side JavaScript (this is call Client-side Rendering). By default, Next.js pre-renders every page, that speeds up your web surfing experience and improve SEO.

  There are two forms of pre-rendering in NextJS:
  - **Static Generation**: The HTML is generated at build time and will be reused on each request.
  - **Server-side Rendering**: The HTML is generated on each request.

  :::note
  **Client-side Rendering**: is not Pre-rendering feature of NextJS because it use Javascript to load data on demand. However, you can use Javascript to preload data like images or videos,...
  :::

</details>