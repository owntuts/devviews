<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>useMutation</h5></summary>

The `useMutation` hook is the primary API for executing mutations in an Apollo application. It returns a tuple that includes a `mutate` function and an object with fields that represent the current status of the mutation's execution. You can pass options to `useMutation` as the second parameter or to the mutate function itself. Some of the options are:

- **variables**: An object containing all of the variables your mutation needs to execute
- **context**: Shared context between your Apollo Client instance and your GraphQL server (for example, headers)
- **fetchPolicy**: How you want your client to interact with the Apollo cache for this mutation
- **refetchQueries**: An array of query names or query documents that will be refetched after your mutation completes
- **awaitRefetchQueries**:  is a boolean that specifies whether you want your mutation to await the completion of any `refetchQueries` before it can be marked as `resolved`.
- **update**: A function that lets you update the cache based on the result of your mutation
- **onCompleted**: A function that will be called when your mutation successfully completes
- **onError**: A function that will be called if your mutation encounters an error
- **onQueryUpdated**: is a way to tell Apollo Client ***what to do with other queries after you make a change*** with a mutation.

</details>

<details>
<summary><h5>Example</h5></summary>

```js
import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

function AddTodo() {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
    // variables: { type: input.value }, // you can pass variables here or to the mutate function
    context: { headers: { authorization: 'Bearer token' } }, // shared context between client and server
    fetchPolicy: 'no-cache', // how to interact with the cache
    refetchQueries: ['GetTodos'], // queries to refetch after mutation
    awaitRefetchQueries: true, // whether to wait for refetchQueries
    update: (cache, { data: { addTodo } }) => {
      // function to update the cache based on mutation result
      const data = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [addTodo].concat(data.todos) },
      });
    },
    onCompleted: (data) => {
      // function to run when mutation completes successfully
      console.log('Mutation completed:', data);
    },
    onError: (error) => {
      // function to run if mutation encounters an error
      console.error('Mutation error:', error);
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } }); // you can pass variables here or to the useMutation hook
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

</details>

<details>
<summary><h5>onQueryUpdated</h5></summary>

The onQueryUpdated option gives you more control over ***how your app reacts to changes made by mutations***.

For example, if you add a new item to a list with a mutation, you might want to update other queries that show the same list. The `onQueryUpdated` option ***lets you check each query and decide if you want to refetch it or not***. You can also do other things before refetching, like showing a message or loading indicator. 

```js
import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

function AddTodo() {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({
            variables: { type: input.value },
            // Update the cache directly with the new todo
            update(cache, { data: { addTodo } }) {
              cache.modify({
                fields: {
                  todos(existingTodos = []) {
                    const newTodoRef = cache.writeFragment({
                      data: addTodo,
                      fragment: gql`
                        fragment NewTodo on Todo {
                          id
                          type
                        }
                      `
                    });
                    return [...existingTodos, newTodoRef];
                  }
                }
              });
            },
            // Use onQueryUpdated to refetch any queries that depend on the todos field
            onQueryUpdated(observableQuery, diff) {
              // If the query includes a todos field, refetch it
              if (diff.wasInvalidated && diff.result.todos) {
                return observableQuery.refetch();
              }
              // Otherwise, do nothing
              return false;
            }
          });
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

- `observableQuery` is the current query that is being checked by the onQueryUpdated callback.
- `diff` tells the ***difference between the cache and the query result***. The **query result** is what Apollo Client reads from the cache to show in the UI. The **cache** is where Apollo Client stores the data it gets from the server. Sometimes, the cache changes because of a mutation or an update function, and the query result becomes outdated. The `diff` helps you detect when that happens and refetch the query to get the latest data from the server.
    - The `diff.wasInvalidated` is a way to tell if something has changed in the cache that affects the related query result.

</details>

<details>
<summary><h5>Option precedence</h5></summary>

If you provide the same option to both `useMutation` and `mutate`, the option passed to `mutate` will take precedence over the one passed to `useMutation`. This allows you to override some options for a specific mutation execution.

Here is an example of using option precedence with `useMutation`:

```js
import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

function AddTodo() {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
    // Provide some options to useMutation
    variables: { type: 'default' },
    context: { headers: { authorization: 'Bearer token' } },
    refetchQueries: ['GetTodos'],
    awaitRefetchQueries: true,
    onCompleted: (data) => {
      console.log('Mutation completed:', data);
    },
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({
            // Override some options for this mutation execution
            variables: { type: input.value },
            refetchQueries: ['GetTodos', 'GetDoneTodos'],
            onCompleted: (data) => {
              console.log('New todo added:', data);
            },
          });
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```
</details>

<details>
<summary><h5>reset the mutation state</h5></summary>

The `reset` function in `useMutation` is a way to reset the mutation state to its initial values. This can be useful if you ***want to reuse the same mutation hook for multiple executions and don't want to keep the previous state***.

In the example below, after clicking the Clear button, the data property of the mutation result object will be set to undefined, and the UI that depends on it will disappear

```js
import { useMutation } from 'react-query';

function AddTodo() {
  let input;
  const [addTodo, { data, loading, error, reset }] = useMutation(addTodoToServer);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
      {data && (
        <div>
          <p>New todo added: {data}</p>
          <button onClick={() => reset()}>Clear</button>
        </div>
      )}
    </div>
  );
}
```
</details>
