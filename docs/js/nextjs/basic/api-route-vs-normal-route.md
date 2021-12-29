---
sidebar_position: 1000
sidebar_label: API Route
title: API Route vs Normal Route in NextS?
slug: /api-route-vs-normal-route-nexts
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
API route vs normal route?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  > Any file inside the folder `pages/api` is mapped to `/api/*` and will be treated as an API endpoint instead of a page.
  
  ```ts title="pages/api/myAPI.js"
  export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
  ```

</details>