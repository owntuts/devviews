---
sidebar_position: 1000
sidebar_label: Dynamic Import
title: Dynamic Import vs React Lazy?
slug: /dynamic-import-vs-react-lazy
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Could you please tell the diference between **Dynamic Import** in NextJS vs **React Lazy**?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
**Dynamic Import** in NextJS and **React Lazy** are similar, they're used to load component dynamically.
But Dynamic Import supports more unique features to use with NextJS. Such as, used as a child component of normal component, like below. (while React lazy is only placed inside `Suspense` tag).

```js {8}
const DynamicComponent = dynamic(() =>
  import('../components/hello').then((mod) => mod.Hello)
)

function Home() {
  return (
    <Header>
      <DynamicComponent />
    </Header>
  )
}
```
or disable `SSR`
```js {3}
const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/hello3'),
  { ssr: false }
)
```
Or you can use with suspense like React lazy too.

```js {2}
const DynamicLazyComponent = dynamic(() => import('../components/hello4'), {
  suspense: true,
});

// const DynamicLazyComponent = lazy(() => import('./SomeComponent');

function Home() {
  return (
    <div>
      <Suspense fallback={`loading`}>
        <DynamicLazyComponent />
      </Suspense>
    </div>
  )
}
```

</details>