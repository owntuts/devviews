---
sidebar_position: 1000
sidebar_label: Schema First vs Code First
title: Schema First vs Code First In Building NestJS GraphQL applications?
slug: /schema-first-vs-code-first-graphql-apps
tags:
  - Advanced NestJS Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
What are **Schema First** and **Code First** In Building NestJS GraphQL applications?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  In GraphQL app, schema file provides schema for ***type checking***. GraphQL ***checks the types of queries, mutation, or subscription*** before passing to resolvers to resolve and response data based on the schema file.

  ![graphql schema file explained](/img/interviews/nestjs/graphql-schema-file-explained.svg)

  - **Schema First**: ***You define the schema files*** first, then NextJS will search for these files to generate a `graphql.schema.ts` file and you will use the generated `interfaces` or `classes` in the `graphql.schema.ts` file for type checking in typescipt code.

  1️⃣ Define your schema file
  ```ts {1} title="src/cats/cats.graphql"
  input CreateCatInput {
    name: String
    age: Int
  }
  ```

  2️⃣ Tell NestJS where to find your schema file
  ```ts {2,4} title="app.module.ts"
  GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'], // tell NestJS where to search for graphql files that you defined
    definitions: {
      path: join(process.cwd(), 'src/graphql.schema.ts'), // tell NestJS where to generate graphql.schema.ts
    },
  }),
  ```

  3️⃣ Using the `graphql.schema.ts` file in typescript for type checking

  ```ts {3,10} title="src/cats/cats.resolver.ts"
  import { CreateCatInput } from '../../graphql.schema';

  export class CreateCatDto extends CreateCatInput {
    // ...
  }

  @Resolver('Cat')
  export class CatResolver {
    @Mutation('CreateCat')
    async create(@Args('createCatInput') args: CreateCatDto): Promise<Cat> {
      // ...
    }
  }
  ```
  - **Code First**: You code typescript first, then based on your code, ***NextJS will generate the schema file*** `schema.gql` for graphQl.

  1️⃣ Tell NestJS where to generate `schema.gql`:
  ```ts {2} title="app.module.ts"
  GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  ```

  2️⃣ Code in Typescript like normal
  ```ts {2,12} title="src/cats/cats.resolver.ts"
  @InputType()
  export class CreateCatInput {
    @Field()
    @MaxLength(30)
    title: string;
    // ...
  }

  @Resolver('Cat')
  export class CatResolver {
    @Mutation('CreateCat')
    async create(@Args('createCatInput') args: CreateCatInput): Promise<Cat> {
      // ...
    }
  }
  ```

  3️⃣ Then, NextJS will generate `schema.gql` file.
  ```ts {1}
  input CreateCatInput {
    title: String!
    '''...'''
  }
  ```

</details>