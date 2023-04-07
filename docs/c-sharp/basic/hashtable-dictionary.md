---
sidebar_position: 1000
sidebar_label: Hash Table vs Dictionary
title: Hash Table vs Dictionary In C# (C-Sharp)
slug: /hashtable-dictionary-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Hash Table vs Dictionary in C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  `Hashtable` and `Dictionary` are two collections in C# that allow you to store data as key-value pairs. The `Hashtable` class is an older collection that was introduced in the early versions of C#. 

| Feature | Hashtable | Dictionary |
| --- | --- | --- |
| Type Safety | Not type-safe (any type of object can be stored) | Type-safe (you specify the type of the key and value to be stored) |
| Boxing and Unboxing | All values are stored as objects; can be slow for value types | Values are stored as the specified type; no overhead for boxing and unboxing |
| NULL keys | Allows null keys | Does not allow null keys |
| Performance for small/medium data sets | Provides faster performance | Provides slower performance |
| Performance for large data sets | Provides slower performance | Provides faster performance |
| Enumeration | Provides a non-generic enumerator; requires casting for strongly typed values | Provides a generic enumerator; no need for casting |

```cs
// Hashtable example
Hashtable ht = new Hashtable();
ht.Add("key1", "value1");
ht.Add("key2", 25);
ht.Add("key3", true);

foreach (DictionaryEntry item in ht)
{
    Console.WriteLine($"Key: {item.Key}, Value: {item.Value}");
}

// Output:
// Key: key1, Value: value1
// Key: key2, Value: 25
// Key: key3, Value: True

// Dictionary example
Dictionary<string, object> dict = new Dictionary<string, object>();
dict.Add("key1", "value1");
dict.Add("key2", 25);
dict.Add("key3", true);

foreach (KeyValuePair<string, object> item in dict)
{
    Console.WriteLine($"Key: {item.Key}, Value: {item.Value}");
}

// Output:
// Key: key1, Value: value1
// Key: key2, Value: 25
// Key: key3, Value: True

```

</details>