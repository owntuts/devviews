---
sidebar_position: 1000
sidebar_label: associateBy vs groupBy in Kotlin
title: associateBy vs groupBy in Kotlin
slug: /associateBy-vs-groupBy
tags:
  - Basic Kotlin Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`associateBy` vs `groupBy` in Kotlin

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  
`associateBy` and `groupBy` are functions in Kotlin that allow you to transform a collection into a map based on some criteria.

The differences between `associateBy` and `groupBy`

| Function | Output | Key behavior when duplicates are present |
| --- | --- | --- |
| `associateBy` | Map | Only the last element with the same key is included in the map |
| `groupBy` | Map> | All elements with the same key are grouped together in the list |

#### 1. Example of `associateBy`:

```kt
val list = listOf("apple", "banana", "orange", "papaya", "pineapple")
val map = list.associateBy { it.first() }
print(map)
// Since there are two words ("papaya" and "pineapple") that start with the letter "a", only the last one ("orange") appears in the resulting map.
// {a=apple, b=banana, o=orange, p=pineapple}

```

#### 2. Example of `groupBy`:

```kt
val list = listOf("apple", "banana", "orange", "papaya", "pineapple")
val map = list.groupBy { it.first() }
// Both "papaya" and "pineapple" appear in the resulting map under the key "a".
// {a=[apple], b=[banana], o=[orange], p=[papaya, pineapple]}

```


</details>