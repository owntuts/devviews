---
sidebar_position: 1000
sidebar_label: Explain About `Async` `Await` in C#
title: Explain About `Async` `Await` in C# (C-Sharp)
slug: /async-await-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain About `Async` `Await` in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  In C#, `async` and `await` are keywords used for asynchronous programming.

```cs
public async Task<ResultType> DoWorkAsync()
{
  ResultType retVal;
  try {
    Task<APIResult> apiResultTask = CallAnAPIAsync();
    var fileName = CreateFileName();
    var apiResult = await apiResultTask;
    await WriteToAFileAsync(fileName, apiResult);
    retVal = await StartAsyncOperation(fileName);
  } catch (RealException rex) {
    HandleError(rex);
    retVal = null
  }
  return retVal;
}

```


</details>