---
sidebar_position: 1000
sidebar_label: Incremental Static Regeneration
title: What is Incremental Static Regeneration(ISR)?
slug: /incremental-static-regeneration
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is Incremental Static Regeneration(ISR) in NextJS?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
 As you well know NextJS allows you to generate static site. But How if you want to update your site based content data changes? If your site has milion pages, you need to re-build entire site -> It's intimidating, right?!. So, NextJS provides you with a feature called **Incremental Static Regeneration (ISR)** that enables you to use static-generation ***on a per-page basis***, ***without needing to rebuild the entire site***.

 **Incremental Static Regeneration (ISR)** can be enable by using `revalidate` property.

 ```ts
 export default function Blog({ post }) {
   // render posts
 }

 export async function getStaticProps() {
  // contact API to get posts
  // const post = await APIcall
  return {
    props: { 
      posts: 
    },
    revalidate: 10, // Every 10 seconds, Try to re-generate the page when a request comes in
  }
 }

 ```

</details>