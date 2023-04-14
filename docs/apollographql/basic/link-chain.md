---
sidebar_position: 1000
sidebar_label: Apollo Link & Link Chain
title: What Is Apollo Link & Link Chain
slug: /what-is-apollo-link--link-chain
tags:
  - Basic Apollo GraphQL Interviews
---


:::quest Question:

\***`ಠ_ಠ`**\* : 
What Is Apollo Link & Link Chain?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
 In Apollo Client, 
 - A `Link` represents a ***Node*** (or a middleware) 
 - A `Link` chain is lik a ***pipeline of Nodes*** (or middleware functions) 

![Apollo Link Chain](/img/interviews/apollojs/linkchain.png)

 They are used to modify GraphQL operations (queries, mutations, and subscriptions) as they pass through the pipeline. Each `Link` in the pipeline has the ability to modify the operation in some way, either by adding headers, logging information, or modifying the operation itself. This allows developers to build a custom pipeline of `Links` that fit the specific needs of their application. ***The `Link` concept is inspired by the concept of middleware*** in web frameworks like Express.js, which allows developers to add layers of functionality to their applications.

 #### Example About Link

 `forward` is like `next` function in Express.js passes data to next Link in the chain

```jsx
import { ApolloLink } from '@apollo/client';

const roundTripLink = new ApolloLink((operation, forward) => {
  // Called before operation is sent to server
  operation.setContext({ start: new Date() });

  return forward(operation).map((data) => {
    // Called after server responds
    const time = new Date() - operation.getContext().start;
    console.log(`Operation ${operation.operationName} took ${time} to complete`);
    return data;
  });
});
```

</details>