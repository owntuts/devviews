---
sidebar_position: 1000
sidebar_label: Event vs Deligate
title: Event vs Deligate In C# (C-Sharp)
slug: /Event-vs-Deligate-c-sharp
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
`Event` vs `Deligate` In C#?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
  Event is higher-level language construct that builds on top of delegates.

1. **Deligate overwriting Problem:** Suppose you have a delegate object that hold multiple method references. If someone uses the = to refer a new method then all the other method references will be lost. Event encapsulates a delegate; it avoids overwriting of a method reference by restricting the use of the assignment = operator.
2. **Security Problem**: a delegate can be invoked outside of a class (thus it can be called anywhere). Event overcomes this issue because an event cannot be invoked outside the class.


</details>