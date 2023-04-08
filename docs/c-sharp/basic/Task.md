---
sidebar_position: 1000
sidebar_label: Task
title: Task In C# (C-Sharp)
slug: /task-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is `Task` in C#?  `.Result` vs`.Wait()`?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  `Task` is implementation of asynchronous programming in C#.

#### Example 1

```cs
Task<string> task = Task<string>.Run(() =>
{
    // This is the work that will be done asynchronously
    return "Hello, World!";
});

string result = await task; // Wait for the task to finish and get the result

```

#### Example 2

```cs
using System;
using System.Threading.Tasks;

public class Example {
    public static void Main() {
      // Declare 4 Tasks. The first one start (`StartNew`)the chain, the others chains to the first (`ContinueWith`)
       Task<DataType> getDataTask = Task.Factory.StartNew(() => { return GetData(); } );
       Task<ProcessedDataType> processDataTask = getDataTask.ContinueWith((data) => { return ProcessData(data);} );
       Task saveDataTask = processDataTask.ContinueWith((pData) => { SaveData(pData)} );
       Task<string> displayDataTask = processDataTask.ContinueWith((pData) => { return CreateDisplayString(pData); } );

       Console.WriteLine(displayDataTask.Result);
      //  ensure that the `SaveData` operation completes before the application ends.
       saveDataTask.Wait();
    }
}

```

The difference from calling .Result or .Wait() is that the await keyword sends the current thread back to the thread pool, instead of keeping it in a blocked state.

</details>