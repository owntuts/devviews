<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>refetchQueries</h5></summary>

The `client.refetchQueries` method is ***a way to update your data on the client side by refetching queries*** asking the server for new data. You can use this method when you want to make sure your data is fresh and up-to-date. Usually, we'll call `client.refetchQueries` to re-run some queries after a mutation.

#### Options of `client.refetchQueries`

```ts

interface RefetchQueriesOptions<
  TCache extends ApolloCache<any>,
  TResult = Promise<ApolloQueryResult<any>>,
> {
  updateCache?: (cache: TCache) => void;
  include?: Array<string | DocumentNode> | "all" | "active";
  onQueryUpdated?: (
    observableQuery: ObservableQuery<any>,
    diff: Cache.DiffResult<any>,
    lastDiff: Cache.DiffResult<any> | undefined,
  ) => boolean | TResult;
  optimistic?: boolean;
}

```

The method takes an options object that has some fields that you can use to control how the refetching works. These fields are:

- **updateCache**: This is ***a function that you can use to change some data in the cache***. The cache is where Apollo Client stores the data that it gets from the server. ***When you change some data in the cache, Apollo Client will refetch any queries that use that data***.
- **include**: This is an array that you can use to list ***the queries that you want to refetch***. A query is a request for some data from the server. You can use the name or the document of the query to identify it. You can also use ***"active" or "all" to refetch all the queries that are active or all the queries*** that Apollo Client knows about.
- **onQueryUpdated**: This is ***a function that you can use to decide what to do with each query*** that needs to be refetched. You can use this function to check if the query has changed or not, and if you want to refetch it or not. You can also use this function to do something else with the query, ***like showing a loading indicator or an error message***.
- **optimistic**: This is a boolean that you can use to tell Apollo Client ***if you want to use optimistic updates or not***. Optimistic updates are when you show some changes in the UI before they are confirmed by the server. This can make your app feel faster and more responsive, but it can also cause some problems if the server rejects your changes.

</details>

<details>
<summary><h5>Example of refetchQueries</h5></summary>

In this example, the addTodo function first calls the mutate function with the text variable, then calls the client.refetchQueries method with all the options. The updateCache option modifies the cache by appending the new todo to the existing todos. The include option specifies the GET_ALL_TODOS query by name. The onQueryUpdated option decides whether to refetch the query based on its name and diff. The optimistic option uses optimistic updates to show changes immediately.

```jsx
import { gql, useMutation } from "@apollo/client";
import * as AddTodoTypes from "./__generated__/AddTodo";
import { GET_ALL_TODOS } from "../queries/getAllTodos";

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo (text: $text) {
      id
      text
    }
  }
`;

export function useAddTodo() {
  const [mutate, { data, error }] = useMutation<
    AddTodoTypes.AddTodo,
    AddTodoTypes.AddTodoVariables
  >(ADD_TODO);

  const client = useApolloClient();

  async function addTodo(text: string) {
    await mutate({
      variables: { text },
    });

    await client.refetchQueries({
      updateCache(cache) {
        // Update the cache to trigger refetching of GET_ALL_TODOS query
        cache.modify({
          fields: {
            todos(existingTodos = []) {
              // Append the new todo to the existing todos
              const newTodoRef = cache.writeFragment({
                data: data.addTodo,
                fragment: gql`
                  fragment NewTodo on Todo {
                    id
                    text
                  }
                `
              });
              return [...existingTodos, newTodoRef];
            }
          }
        });
      },
      include: ["GET_ALL_TODOS"], // Specify the query to refetch by name
      onQueryUpdated(observableQuery, diff) {
        // Decide whether to refetch each query based on its name and diff
        if (observableQuery.queryName === "GET_ALL_TODOS") {
          // Only refetch if there are new todos added
          return diff.result.todos.length > diff.previousResult.todos.length;
        }
        // Return false for other queries to prevent refetching
        return false;
      },
      optimistic: true // Use optimistic updates to show changes immediately
    });
  }

  return { addTodo, data, error };
}

```

</details>

<details>
<summary><h5>client.refetchQueries vs useQuery</h5></summary>

| Method              | Purpose                                                                 | Behavior                                                                 |
| ------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| client.refetchQueries | To update client-side GraphQL data by refetching queries from the server more selectively | Does not execute automatically on render, but can be called at any time. Does not create a subscription to the query key. |
| useQuery             | To fetch data from the server and display it in a component             | Executes automatically on render, and can be controlled by some options. Creates a subscription to the query key. |

#### Here's the corresponding between `client.refetchQueries` and `useQuery` options:

| client.refetchQueries(options) | useQuery(options) |
| ------------------------------ | ----------------- |
| updateCache                    | update            |
| include                        | query             |
| onQueryUpdated                 | onCompleted       |
| optimistic                     | optimisticResponse|

</details>

<details>
<summary><h5>client.refetchQueries vs client.mutate</h5></summary>

`client.mutate` is the same as `mutate` in `[mutate, { data, error }] = useMutation`. It's used to modify server-side GraphQL data by sending a mutation request to the server. It's used ***when we need to execute a mutation outside of a React component***, for example in a custom hook or a utility function

#### Here's the corresponding between `client.mutate` options and `client.refetchQueries` options:

| client.mutate(options) | client.refetchQueries(options) |
| ---------------------- | ------------------------------ |
| update                 | updateCache                    |
| refetchQueries         | include                        |
| onQueryUpdated         | onQueryUpdated                 |
| optimisticResponse     | optimistic                     |

</details>