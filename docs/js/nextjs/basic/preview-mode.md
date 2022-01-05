---
sidebar_position: 1000
sidebar_label: Preview Mode
title: What Is Preview Mode In NextJS?
slug: /what-is-preview-mode-nextjs
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What Is **Preview Mode** In NextJS? And What will Happen if you navigate to a preview url?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
**Preview mode** allows you to ***view the draft content*** on certain page immediately (That means NextJS will renders the editing content at request time instead of build time).

The **draft content** (or preview content) is the content that you're editing uncompletely, it may be saved on other database table.

### Workflow Of Preview Mode

When you navigate to the preview url like this:
`https://<your-site>/api/preview?secret=<token>&slug=<path>`.

- Default function in `preview.js` file (that you need to create first) in `pages/api` will receive the request.
- Calling `res.setPreviewData` in the function will enable preview mode (NextJS will set these cookies `__prerender_bypass` and `__next_preview_data` in brower).
- And `res.writeHead` will redirect to the regular API - the API page that you want to fetch the preview content.

```js title="pages/api/preview.js"
export default async (req, res) => {
  // Fetch data based on url query to check if `slug` exists
  // const post = await getPreviewPost ...
  // ...
  
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    post: {
      id: post.databaseId,
      slug: post.slug,
      status: post.status,
    },
  });

  // Redirect to the path from the fetched post
  res.writeHead(307, { Location: `/posts/${post.slug || post.databaseId}` })
  res.end()
}
```

In the regular API page, when `getStaticProps` runs, NextJS will check browser cookies to know whether preview mode is turned on, if yes, it sets `preview = true` in the context param of `getStaticProps`. You will fetch preview content based on that.

```js title="pages/posts/[slug].js"
export default function Post({ post, posts, preview }) {
  if (preview) {
    // render preview content
  } else {
    // render regular content
  }
}

export async function getStaticProps({ params, preview = false, previewData }) {
  // get preview/draft data
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  // pass data to Post above
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}
```

</details>