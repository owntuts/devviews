---
sidebar_position: 1000
sidebar_label: Persisted Queries Link
title: Persisted Queries Link
slug: /persisted-query-link-apollojs
tags:
  - Basic Apollo GraphQL Interviews
---


:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain about Persisted Queries Link? Why we need it?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
All requests in GraphQL contains in a big file that will effect the performance. `Persisted Queries Link` is a useful link in Apollo Client that can ***help reduce the amount of network traffic*** between the client and server, and can speed up query execution time.

#### Example

```jsx
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { sha256 } from 'crypto-hash';

const httpLink = new HttpLink({ uri: "/graphql" });
const persistedQueriesLink = createPersistedQueryLink({ sha256 });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: persistedQueriesLink.concat(httpLink),
});
```
#### Send Query

```jsx
{
  operationName: 'MyQuery',
  variables: null,
  query: `query MyQuery { id }`,
  extensions: {
    persistedQuery: {
      version: 1,
      sha256Hash: hashOfQuery
    }
  }
}
```

When the `query` method is called with this context information, the `Persisted Queries Link` will ***intercept the request and replace the query text with the query ID***. The server will use the ID to look up the full query text from a cache and execute the query as usual.

</details>