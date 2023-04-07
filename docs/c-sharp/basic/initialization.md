---
sidebar_position: 1000
sidebar_label: Initialization
title: Initialization In C# (C-Sharp)
slug: /initialization-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 

Initialization of difference generic types in c#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

  **1. Initializing a List of strings:**
  ```cs
  List<string> stringList = new List<string> { "foo", "bar", "baz" };
  ```
  **2. Initializing a Dictionary with a string key and an integer value:**
  ```cs
  Dictionary<string, int> dict = new Dictionary<string, int> { {"foo", 1}, {"bar", 2}, {"baz", 3} };
  ```
  **3. Hash table**
  ```cs
  Hashtable<string, string> hashtable = new Hashtable<string, string>(){	{"UK", "London"},	{"USA", "Chicago"}, {"India", "Mumbai"}};
  ```
  **4. Creating an instance of a generic class:**
  ```cs
  MyGenericClass<string> myObj = new MyGenericClass<string>("hello");
  ```
  **5. Creating an instance of a generic method:**
  ```cs
  int result = MyGenericMethod<int>(10, 20);
  ```
</details>