---
sidebar_position: 1000
sidebar_label: Query vs ResolveField
title: Query vs ResolveField In NestJS?
slug: /query-vs-resolvefield-nestjs
tags:
  - NestJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please explain the difference between `@Query` and `@ResolveField` in NextJS GraphQL App?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  `@ResolveField()` is like "sub-query", it is used for adding relationships reference.

  ### Example
  You have a query like this

  ``` {5}
  query {
      author {
          firstName
          lastName
          posts {
              title
              description
          }
      }
  }
  ```

  The posts field will be reference to independent `BlogEntity` type

  ```ts {9}
 @Resolver('Author')
  export class AuthorsResolver {
      @Query()
      async author(@Args('id') id: number) {
        return this.authorsService.findOneById(id);
      }

      // the field `posts` references to `BlogEntity` type
      @ResolveField(returns => [BlogEntity])
      // `@Parent()` is reference to current classs
      async posts(@Parent() author) {
        const { id } = author;
        return this.postsService.findAll({ authorId: id });
      }
  }
  ```

</details>