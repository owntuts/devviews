---
sidebar_position: 1000
sidebar_label: Data Fetching
title: Data Fetching Methods in NextJS
slug: /data-fetching-methods-nextjs
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is **Data Fetching Methods** in NextJS? Please explain about them?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Data Fetching Methods** are unique functions in Next.js you can use to fetch data for pre-rendering.
  - **`getStaticProps`** (Static Generation): Fetch data at build time.

  ```js {1,11} title="/pages/post.js"
  const Post = ({ data }) => {
    return <div>{data}</div>
  }

  export async function getStaticProps() {
    const res = await fetch('https://.../posts')
    const data = await res.json()

    return {
      // pass data down to Post via props
      props: {
        data,
      },
    }
  }
  export default Blog;
  ```

  - **`getStaticPaths`** (Static Generation): In case of dynamic routing (- routing depends on param), you use `getStaticProps` to fetch data, you won't know which page/route to fetch data to because it's dynamic. So, to let `getStaticProps` know which page to fetch data to, you need `getStaticPaths`.

  ```js {7,15}
  function Post({ post }) {
    // Render post...
  }

  export async function getStaticPaths() {
    const paths = [
      { params: { id: 1 }},
      { params: { id: 2 }}
    ]
    // Pass paths params to getStaticProps
    // { fallback: false } means other routes (not in the params list above) should 404.
    return { paths, fallback: false }
  }

  export async function getStaticProps({ params }) {
    const res = await fetch(`https://.../posts/${params.id}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
  }

  export default Post
  ```

  - **`getServerSideProps`** (Server-side Rendering): Fetch data on each request.
  ```jsx
  function Page({ data }) {
    // Render data...
  }

  // This gets called on every request
  export async function getServerSideProps() {
    const res = await fetch(`https://.../data`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
  }

  export default Page
  ```
  
</details>