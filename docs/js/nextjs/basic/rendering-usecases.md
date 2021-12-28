---
sidebar_position: 1000
sidebar_label: JIT vs AOT Node
title: Static Generation and Server Rendering Usecases
slug: /static-generation-use-server-rendering
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
When you use **Static Generation** and when use **server rendering**? Can you use both on the same NextJS app?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
#### When use Static Generation? 
  - Using Static Generation Rendering for performance reasons. Such as, cached by CDN, SEO,...
  - Using in case you can pre-render a page ahead of a user's request. Such as, landing pages, Blog posts and portfolios, documentation,...

#### When use Server-Side Rendering?
  - When your page need data to be updated frequently. Such as, forum, communities,...

#### When Use Client-side Rendering?
  - When you need javascript loads data instead of generating page with data at the begining. Such as, realtime apps, chat apps, loading video streams,...

You can use three Rendering methods above in the same NextJS app.


</details>