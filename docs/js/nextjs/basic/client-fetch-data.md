---
sidebar_position: 1000
sidebar_label: Get Data On Client Side
title: Get Data On Client Side In NextJS?
slug: /get-data-client-side-nextjs
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
How to get data on client side? Do nextjs support a way to get data on client side?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
Yes, as NextJS is based on React (Javascript). So, you can use `fetch` function to fetch data on client side.
And nextJS doesn't support a fetch function but it provides you with `useSWR` hooks for more convenience.

```js
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)
  // ...
}
```

</details>