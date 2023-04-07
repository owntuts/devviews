---
sidebar_position: 1000
sidebar_label: Lambda Function vs Expression Function
title: Lambda Function vs Expression Function
slug: /lambda-vs-expression-function
tags:
  - Basic Kotlin Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
lambda function vs expression function?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  
A lambda function and an expression function are two different ways of defining a function in Kotlin, and they have some subtle differences. 

1. **A lambda function** is a function that has no name and can be passed as an argument to another function. It is defined using curly braces `{}` and `->`.

 This is a lambda fuunction.

It's equivalent to

```kt
val lambdaFunc: (Int, Int) -> Int = { a, b -> a + b }
```

2. **An expression function** is a named function that has an expression as its body. It is defined using the `fun` keyword, followed by the function name and its parameters.

```kt
fun sum(a: Int, b: Int) = a + b
```


</details>