---
sidebar_position: 1000
sidebar_label: Get Data On Client Side
title: Fallback Strategies (Modes) in getStaticPaths?
slug: /fallback-strategies-getstaticpaths
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is diference when you specify `fallback` as `blocking` or `true` or `false` in return object of `getStaticPaths`?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  ```ts
export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // params for generating available paths
    ],
    fallback: // true, false, or 'blocking' -> deal with unavailable paths
  };
}
```
In static generation (dynamic routing), NextJS Provides us with three strategies (modes) to deal with the case when some ***contents have not available yet*** (-> the path doesn't exist & the page is not generated bacause there's no content yet).
  - `{ fallback: blocking }`: At build time, pre-render only available paths, and NextJS will ***server-render unavailable pages*** on-demand later.
  - `{ fallback: false }`: If fallback is false, then any unavailable paths (not returned by getStaticPaths) will result in a ***404 page***.
  - `{ fallback: true }`: Will render the ***fallback content*** which you define.
  ```ts
  export default function Post({ post }) {
    const router = useRouter()
    // If the page is not yet generated, this will be displayed
    if (router.isFallback) {
      return <div>Loading...</div>
    }
    // ...
  }
  export async function getStaticPaths() {
    return {
      paths: [
        { params: { ... } }
      ],
      fallback: true
    };
  }
  ```


</details>