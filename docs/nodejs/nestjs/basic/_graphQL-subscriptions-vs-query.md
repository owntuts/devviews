---
sidebar_position: 1000
sidebar_label: Query Example
title: GraphQL Subscriptions vs Query?
slug: /graphQL-subscriptions-vs-query.md
tags:
  - NestJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is diferences between ***GraphQL Subscriptions*** vs ***Query*** in NestJS GraphQL app?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  > **Subscriptions** are similar to queries in that they specify a set of fields to be delivered to the client, but instead of immediately returning a single answer, ***a channel is opened*** and a result is ***sent to the client every time*** a particular event happens on the server.

  For example, every time a post added, Subscription of that event will get the payload and return to client.

  ```ts {6,14}
  @Resolver(() => Post)
  export class PostsResolver {
  
    @Subscription(() => Post)
    postAdded() {
      return this.pubSub.asyncIterator(POST_ADDED_EVENT);
    }

    @Mutation(() => Post)
    async createPost(
      @Args('input') createPostInput: CreatePostInput,
    ) {
      // const newPost = await ...
      this.pubSub.publish(POST_ADDED_EVENT, { postAdded: newPost });
      return newPost;
    }
    
    // ...
  }
  ```

</details>