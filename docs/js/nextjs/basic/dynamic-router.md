---
sidebar_position: 1000
sidebar_label: Dynamic Router
title: What Is Dynamic Routing?
slug: /dynamic-routing
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What Is **Dynamic Routing**?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Dynamic Routing** is routing that you define via file name and add brackets ([param]) into it. (In other words, the ***route that depends on param***).

  ### Example
  When you define a page `pages/post/[pid].js` like this:
  ```jsx
  export const myPage = () => {
    const router = useRouter();
    {pid} = router.query;
    return <div>Page with {pid}</div>
  }
  ```
  Any route like `/post/1`, `/post/abc`, etc. will be matched by `pages/post/[pid].js`.

</details>