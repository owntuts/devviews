---
sidebar_position: 1000
sidebar_label: Shallow Routing
title: Shallow routing in NextS
slug: /shallow-routing-nexts
tags:
  - NextJS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is Shallow routing in NextS? And The Caveat when using it? 

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Shallow routing** in NextJS allows you to change the URL ***without running data fetching methods*** (`getServerSideProps`, `getStaticProps`, and `getInitialProps`) again. And the ***page won't get replaced***, only the ***state of the route is changed***.

  #### Example
  Current URL is `/`, when you change `/?counter=10`, only the router state is changed. You can use router object to check that.

  ```ts {6,11,17}
  export default function Page() {
    const router = useRouter()

    useEffect(() => {
      // Change the route
      router.push('/?counter=10', undefined, { shallow: true })
    }, [])

    useEffect(() => {
      // Check router state
    }, [router.query.counter])
  }

  componentDidUpdate(prevProps) {
    const { pathname, query } = this.props.router
      // Check router state
    if (query.counter !== prevProps.router.query.counter) {
    }
  }
  ```

  #### Caveats
  Shallow routing only works for same page URL changes (such as, changing query). If you navigate to other page, the route will reload the new page.

</details>