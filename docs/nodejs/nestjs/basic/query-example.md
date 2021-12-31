---
sidebar_position: 1000
sidebar_label: Query Example
title: Query Example In NestJS?
slug: /query-example-nestjs
tags:
  - NestJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
In NestJS GraphQL app, I want to query an Author by his id, could you please let me know how to do that?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  If you want to query an author by his id, you simply use `@Query()` and `@Args('id')` for that.

  ```ts
  @Query(returns => Author)
  async getAuthor(@Args('id') id ) {
    // return something based on id
  }
  ```
  This generates the following entry with the same name for the author query in schema file.

  ```ts
  type Query {
    getAuthor(id: Int!): Author
  }
  ```
  
  Execute the following query GraphQL playground (usually on http://localhost:3000/graphql):
  ```
  query GetAuthor {
    author(123) {
      id
    }
  }
  ```

</details>