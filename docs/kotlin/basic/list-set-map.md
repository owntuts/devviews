---
sidebar_position: 1000
sidebar_label: List vs Set vs Map
title: List vs Set vs Map in Kotlin?
slug: /list-set-map
tags:
  - Basic Kotlin Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`List` vs `Set` vs `Map` in Kotlin?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  
`List`, `Set`, and `Map` are collections in Kotlin that are used to store and organize data.
Here is a table summarizing the differences between `List`, `Set`, and `Map` in Kotlin:

| Collection | Order | Duplicates | Access by index | Access by key | Mutable |
| --- | --- | --- | --- | --- | --- |
| List | Ordered | Allowed | Yes | No | No |
| Set | Unordered | Not allowed | No | No | No |
| Map | Unordered | Key: Not allowed <br/> Value: Allowed | No | Yes | No |

Example:

```kt
val numbers = listOf(1, 2, 3, 4, 5)
val numbers = listOf(1, 2, 3, 4, 5)
val phonebook = mapOf("Alice" to "123-4567", "Bob" to "234-5678", "Charlie" to "345-6789")

```


</details>