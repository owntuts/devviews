---
sidebar_position: 1000
sidebar_label: what is Deadlocks
title: what is Deadlocks
slug: /deadlock
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
what is Deadlocks? & example in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  **Deadlock** is a situation that can occur in concurrent programming where two or more threads are blocked, ***waiting for each other*** to release a resource or finish executing some code, resulting in a standstill or "deadlock".

  #### Here's an example of a deadlock in C#:

  ```cs
  public class MyApiController : ApiController
  {
    // Top-level method
    public ActionResult HandleRESTApiCall(){
      SomeType someObj = DoSomethingAsync().Result;
      return OkResult(someObj);
    }

    private async Task<SomeType> DoSomethingAsync(){
      var someData = await GetDataAsync();
      return new SomeType(someData);
    }
  }

  ```

![Deadlock](/img/interviews/csharp/deadlock.png)

Pay attention to `.Result` and `await` keyword.
1. First, `.Result` lock resource to wait for `DoSomethingAsync()` completed.
2. `DoSomethingAsync()` runs -> calls `GetDataAsync()`
3. `await` lock resource & wait for `GetDataAsync()`
4. `GetDataAsync()` returns result but `await` need resource (HTTP context) released to execute but `DoSomethingAsync().Result` holds that resource and waiting for `DoSomethingAsync()` returns.

That means `.Result` and `wait`  are waiting to each other => cause deadlock.

There are two solutions:

1. Do not block on async code.
```cs
// Top-level method
public async ActionResult HandleRESTApiCall(){
  SomeType someObj = await DoSomethingAsync(); // remove .Result
  return OkResult(someObj);
}
```
or
```cs
private async Task<SomeType> DoSomethingAsync(){
  var someData = await GetDataAsync().ConfigureAwait(false);
  return new SomeType(someData);
}
```

</details>