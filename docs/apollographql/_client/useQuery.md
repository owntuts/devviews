<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>useQueries</h5></summary>

The `useQuery` hook accepts an optional second argument that is an object of configuration options. Some of the available options are:

- **variables**: An object containing all of the variables your query needs to execute
- **pollingInterval**: Specifies the interval in milliseconds at which you want your component to poll for data. Defaults to 0 (no polling). This can be useful for scenarios where you want to display ***near-real-time information*** from your server, such as chat messages, notifications, or live updates.
- **notifyOnNetworkStatusChange**: Whether updates to the network status or network error should re-render your component. Defaults to `false`. (The network status is an enum that indicates the current state of your query, such as `loading`, `ready`, `refetching`, `polling`, etc.)
- **fetchPolicy**: How you want your component to ***interact with the Apollo cache***.
    - **cache-first**: This is the default policy. Apollo Client checks the cache to see if the result is present before making a network request. If the result is present, no network request occurs.
    - **cache-and-network**: Apollo Client returns a result from the cache if available, and always makes a network request regardless. The query updates with the network result when it arrives.
    - **network-only**: Apollo Client makes a network request and ignores any cached data. but ***it does write the data to the cache after the query completes***. This means that subsequent queries for the same data can use the cache if they have a different fetch policy (such as cache-first or cache-and-network). This fetch policy ***cannot be used with subscriptions***.
    - **cache-only**: Apollo Client returns a result from the cache if available, and does not make any network requests. This fetch policy cannot be used with subscriptions.
    - **no-cache**: Apollo Client makes a network request and ignores any cached data, but it ***does not write any data to the cache after the query completes***. This means that subsequent queries for the same data will always make a network request regardless of their fetch policy.
    - **standby**: is a special policy that is used for queries that are not actively watched, but should be available for refetching. This policy is useful for scenarios where you want to ***execute a query only under certain conditions***, such as user input or network status.
- **errorPolicy**: The errorPolicy option determines how your component handles GraphQL errors that occur during the execution of your query.
    - The default errorPolicy is `none`, which means that if any GraphQL errors occur, they are returned on the `error.graphQLErrors` array of your `useQuery` hook and the data field is set to `undefined` (even if the server returns some data in its response).
    - `all` to ***populate both the data and `graphQLErrors` fields*** with the partial data and errors returned by the server.
    - `ignore` to ignore the `graphQLErrors` field and ***only return the data field***.
- **context**: Shared context between your component and your network interface (Apollo Link).
- **skip**: If skip is true, the query will be skipped entirely.

</details>

<details>
<summary><h5>Example</h5></summary>

```jsx
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks($author: String) {
    books(author: $author) {
      id
      title
      genre
    }
  }
`;

function Books({ author }) {
  const { loading, error, data, networkStatus, refetch } = useQuery(GET_BOOKS, {
    variables: { author }, // pass the author name variable to the query
    pollInterval: 5000, // poll the server every 5 seconds (i.e, refetch every 1 second)
    notifyOnNetworkStatusChange: true, // re-render every time the query starts and stops polling
    fetchPolicy: 'cache-and-network', // use both cache and network for the query
    errorPolicy: 'all', // return both data and errors from the query
    context: { headers: { 'X-Auth-Token': 'some-token' } }, // pass some custom headers to the query
    skip: !author, // skip the query if author is falsy
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h2>Books by {author}</h2>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            {book.title} ({book.genre})
          </li>
        ))}
      </ul>
      {networkStatus === 4 && <p>Refetching...</p>}
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  );
}

```
</details>

<details>
<summary><h5>standby fetchPolicy vs cache-only fetchPolicy</h5></summary>

When you use the `standby` fetch policy, Apollo Client ***returns a result from the cache if available, and does not make any network requests***. However, unlike the `cache-only` policy, the standby policy ***allows you to refetch the query manually*** or ***with a different fetch policy when needed***.

For example, You can set the initial fetch policy to `standby` and then use the `refetch` function with a different fetch policy (such as `network-only`) when the user clicks a button to apply the filters. For example:

```js
function Chart({ filters }) {
  const { loading, error, data, refetch } = useQuery(GET_DATA, {
    variables: filters,
    fetchPolicy: "standby" // do not execute the query until refetched
  });

  function handleApplyFilters() {
    refetch({ fetchPolicy: "network-only" }); // execute the query with the current filters
  }

  return (
    <div>
      <button onClick={handleApplyFilters}>Apply filters</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && <Chart data={data} />}
    </div>
  );
}
```

</details>

<details>
<summary><h5>useQuery vs useLazyQuery</h5></summary>

The main difference between `useQuery` and `useLazyQuery` is whether the hook executes the query immediately or not.

| useQuery | useLazyQuery |
| --- | --- |
| Executes the query immediately when the component renders | Does not execute the query until the returned function is called |
| Returns an object with loading, error, data, and other properties | Returns a tuple with a function and an object with loading, error, data, and other properties |
| Can refetch the query manually or with a different fetch policy | Can execute the query with variables and options |
| Useful for fetching data that is needed for rendering the component | Useful for fetching data that depends on user input or other conditions |

```js
// useQuery example
function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS); // execute the query when the component renders

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}

// useLazyQuery example
function Chart({ filters }) {
  const [getChart, { loading, error, data }] = useLazyQuery(GET_CHART); // do not execute the query until getChart is called

  function handleApplyFilters() {
    getChart({ variables: filters }); // execute the query with the current filters
  }

  return (
    <div>
      <button onClick={handleApplyFilters}>Apply filters</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && <Chart data={data} />}
    </div>
  );
}
```

</details>
