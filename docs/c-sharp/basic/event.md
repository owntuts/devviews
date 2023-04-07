---
sidebar_position: 1000
sidebar_label: Event in C#
title: explain about `Event` in C# (C-Sharp)
slug: /event-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain about `Event` in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  In C#, an `event` is a language feature that enables classes to send notifications or signals to other objects. It follows the ***publisher/subscriber pattern***.

```cs
// Define the event arguments
public class DataReceivedEventArgs : EventArgs
{
    public string Data { get; set; }
}

// Define the publisher class
public class DataReceiver
{
    // Declare the event
    public event EventHandler<DataReceivedEventArgs> DataReceived;
    
    public void ReceiveData(string data)
    {
        // Fire the event
        DataReceived?.Invoke(this, new DataReceivedEventArgs { Data = data });
    }
}

// Define the subscriber class
public class DataConsumer
{
    public void OnDataReceived(object sender, DataReceivedEventArgs e)
    {
        Console.WriteLine($"Received data: {e.Data}");
    }
}

// Usage
var receiver = new DataReceiver();
var consumer = new DataConsumer();

receiver.DataReceived += consumer.OnDataReceived; // Subscribe to the event
receiver.ReceiveData("Some data"); // Raise the event

```

</details>