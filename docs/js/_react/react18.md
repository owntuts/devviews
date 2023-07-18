
<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>React 18 New Features</h5></summary>

React 18 was released in March 2022, and it includes a number of new features and improvements. Some of the most notable new features include:

* **Concurrent rendering:** Concurrent rendering allows React to ***render multiple components at the same time***, even if they are not related to each other. This can improve performance, especially on devices with slower processors. For example, if a user is scrolling through a list of items, React can render the items that are currently visible and the items that are about to be visible, even if the data for those items is not yet available. This can help to prevent the user from seeing blank screens while data is loading.
* **Automatic batching:** Automatic batching ***groups together state updates and renders them all at once***. This can also improve performance, as it reduces the number of times React has to re-render the entire application. For example, if a user changes the value of a single input field, ***React will only have to re-render the components that are affected by that change***. This can help to improve performance, especially on devices with slower processors.
* **Suspense:** Suspense allows React to ***load data asynchronously*** and render components only when the data is available. This can improve performance and user experience, as it prevents users from seeing blank screens while data is loading. For example, if a user clicks on a link to a page that contains a lot of data, React can start ***loading the data in the background*** while the user continues to interact with the current page. This can help to improve the user experience, as the user does not have to wait for the entire page to load before they can start using it.
* **Transitions**: This is a new API that ***lets you tell React which updates are urgent*** and which can be delayed. Transitions help keep your app responsive by ***avoiding blocking the main thread with long-running renders***.
* **New root API:** There are also some new APIs and hooks in React 18, such as `createRoot`, `hydrateRoot`, `renderToPipeableStream`, `renderToReadableStream`, `useId`, `useTransition`, `useDeferredValue`, `useSyncExternalStore`, and `useInsertionEffect`. Some of these are experimental and may change in the future. Additionally, React 18 no longer supports IE11 and discourages the use of ReactDOM.render and renderToString.

</details>

<details>
<summary><h5>useTransition</h5></summary>

Here is a simple example of using `useTransition` to update a list of items based on a search input:

```jsx
import { useState } from "react";
import { useTransition } from "react";

function App() {
  // State for the input value
  const [inputValue, setInputValue] = useState("");

  // State for the list of items
  const [items, setItems] = useState([]);

  // A function that fetches items based on a query
  async function fetchItems(query) {
    // Simulate a network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return some mock data
    return ["apple", "banana", "carrot", "date", "eggplant"].filter((item) =>
      item.startsWith(query.toLowerCase())
    );
  }

  // A function that handles input change
  function handleChange(event) {
    const value = event.target.value;
    // Update the input value state
    setInputValue(value);
    // Start a transition to update the items state
    startTransition(() => {
      // Fetch items based on the input value
      fetchItems(value).then((data) => {
        // Update the items state with the fetched data
        setItems(data);
      });
    });
  }

  // Get the isPending flag and the startTransition function from useTransition
  const [isPending, startTransition] = useTransition();

  return (
    <div className="App">
      <h1>useTransition Example</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

In this example, the input value state is updated immediately as the user types, while the items state is updated asynchronously with a delay. The `useTransition` hook returns an `isPending` flag that tells you whether there is a pending transition and a `startTransition` function that lets you mark a state update as a transition. The `startTransition` function tells React that the items state update is not urgent and can be deferred until the input value state update is done. This way, the user can see the letters as they type without waiting for the items to load. The `isPending` flag can be used to display a loading indicator while the transition is in progress.

You can try this example on CodeSandbox: https://codesandbox.io/s/usetransition-example-8xk4g


</details>

<details>
<summary><h5>renderToPipeableStream</h5></summary>

`renderToPipeableStream` is a new API in React 18 that renders a React element to its initial HTML and returns a Node.js stream with a `pipe` method to pipe the output and an `abort` method to abort the request. This API enables streaming server-side rendering with built-in support for Suspense and concurrent features.

Here is a simple example of using `renderToPipeableStream` to render a React component on the server and send it to the client as a stream:

```js
// Import React and ReactDOMServer
import React from "react";
import { renderToPipeableStream } from "react-dom/server";

// A component that displays a message
function Message() {
  return <div>Hello, world!</div>;
}

// A function that handles an HTTP request
function handleRequest(request, response) {
  // Render the Message component to a stream
  const { pipe, abort } = renderToPipeableStream(<Message />);
  // Set the content type header
  response.setHeader("Content-Type", "text/html");
  // Pipe the stream to the response
  pipe(response);
  // Handle errors or aborts
  request.on("error", abort);
  request.on("close", abort);
}
```

In this example, the `handleRequest` function renders the `Message` component to a stream using `renderToPipeableStream` and pipes it to the response. The `renderToPipeableStream` function returns an object with a `pipe` method and an `abort` method. The `pipe` method takes a Node.js writable stream as an argument and writes the HTML output to it. The `abort` method cancels the rendering and closes the stream. The function also handles errors or aborts by listening to the request events.

You can try this example on Replit: https://replit.com/@heyitsarpit/renderToPipeableStream-example

</details>

<details>
<summary><h5>renderToReadableStream</h5></summary>
`renderToReadableStream` is a new API in React 18 that renders a React element to its initial HTML and returns a Readable Web Stream. This API enables streaming server-side rendering with built-in support for Suspense and concurrent features in environments that support Web Streams, such as Deno or modern edge runtimes.

Here is a simple example of using `renderToReadableStream` to render a React component on the server and send it to the client as a stream:

```js
// Import React and ReactDOMServer
import React from "react";
import { renderToReadableStream } from "react-dom/server";

// A component that displays a message
function Message() {
  return <div>Hello, world!</div>;
}

// A function that handles an HTTP request
async function handleRequest(request) {
  // Render the Message component to a stream
  const stream = await renderToReadableStream(<Message />, {
    bootstrapScripts: ["/main.js"],
  });
  // Return a response with the stream
  return new Response(stream, {
    headers: { "Content-Type": "text/html" },
  });
}
```

In this example, the `handleRequest` function renders the `Message` component to a stream using `renderToReadableStream` and returns a response with the stream. The `renderToReadableStream` function takes a React element and an optional options object as arguments and returns a promise that resolves to a Readable Web Stream. The options object can specify various streaming options, such as bootstrap scripts, identifier prefix, namespace URI, nonce, error handler, progressive chunk size, and abort signal.

You can try this example on Replit: https://replit.com/@heyitsarpit/renderToReadableStream-example

</details>

<details>
<summary><h5>useDeferredValue</h5></summary>

useDeferredValue is a React Hook that ***lets you defer updating a part of the UI***. It is useful for situations where you ***want to show stale content while fresh content is loading***, or when you want to ***defer re-rendering for a part of the UI that is computationally expensive***. For example, you can use useDeferredValue to create a natural debouncing effect for a search input and a result list.

For example, you can use it to ***filter a large list of items*** and display the results. The filtering operation will be performed in the background and will not block the main thread. This way, the input field will remain responsive and reflect what the user types immediately, while the result list will update with a slight delay.

```jsx
import { useState, useDeferredValue } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  // useDeferredValue marks the query is less urgent
  // This value will be updated less frequently than query
  const deferredQuery = useDeferredValue(query); 
  
  const list = useMemo(() => {
    // Filter through a large list using deferredQuery
    return largeList.filter(item => item.name.includes(deferredQuery));
  }, [deferredQuery]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <>
      <input type="text" value={query} onChange={handleChange} placeholder="Search" />
      {list.map(item => (
        <SearchResultItem key={item.id} item={item} />
      ))}
    </>
  );
}
```

`useDeferredValue` is like `debounce`. However, there is one major difference between the two techniques. In React 18, `useDeferredValue` will only ***make a value “lag behind”*** if the rendering takes a while.

-  If you use `debounce`, you will set a ***fixed delay*** (for example, 500 milliseconds) before updating the result list.

- If you use `useDeferredValue`, if the user types something in the input and the computer takes a long time to render the result list, React will ***defer updating the result list until it finishes rendering other parts of the UI*** that are more urgent. This way, you can avoid blocking the main thread or causing visual glitches.

</details>

<details>
<summary><h5>useSyncExternalStore</h5></summary>

`useSyncExternalStore` is a React Hook that lets you ***subscribe to an external store***. An external store is something that you can subscribe to, such as ***Redux store, Zustand store, global variables, module scope variables, DOM state***, etc. It is different from internal stores, such as props, context, useState, useReducer, which are managed by React.

useSyncExternalStore is useful for situations where you ***want to read some data from an external store and update your component when the store changes***. It also works well with concurrent rendering, which is a new feature in React 18 that lets you render your UI in a non-blocking way. useSyncExternalStore ensures that your component will not show inconsistent or stale data when using concurrent rendering.

Here is an example of how to use useSyncExternalStore with a Redux store:

```jsx
import { useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';

function Counter() {
  // Subscribe to Redux store and get current state
  const state = useSyncExternalStore(
    // Subscribe function
    (callback) => {
      const unsubscribe = useSelector.subscribe(callback);
      return unsubscribe;
    },
    // Get snapshot function
    () => useSelector.getState()
  );

  // Get counter value from state
  const counter = state.counter;

  return <div>Counter: {counter}</div>;
}
```

</details>


<details>
<summary><h5>useInsertionEffect</h5></summary>

`useInsertionEffect` is a new React Hook that was introduced in React 18. It is ***similar to `useLayoutEffect`, but it fires synchronously before all DOM mutations***. This means that it is ***executed before `useLayoutEffect`*** and before the browser paints the screen.

The use case for `useInsertionEffect` is ***to inject styles into the DOM before reading layout***. This is useful for CSS-in-JS libraries, such as styled-components, that need to insert `<style>` tags or other global DOM nodes before the browser calculates the layout. By using useInsertionEffect, these libraries can avoid layout thrashing and improve performance.

Here is an example of how to use `useInsertionEffect` to inject a `<style>` tag into the DOM:

```jsx
import { useInsertionEffect } from 'react';

function MyComponent() {
  // Create a style element
  const style = document.createElement('style');
  // Set the CSS content
  style.textContent = `
    .my-class {
      color: red;
    }
  `;

  // Use insertion effect to insert the style element into the head
  useInsertionEffect(() => {
    document.head.appendChild(style);
    // Return a cleanup function to remove the style element
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div className="my-class">Hello</div>;
}
```

</details>
