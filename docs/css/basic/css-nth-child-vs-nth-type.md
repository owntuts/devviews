---
sidebar_position: 1000
sidebar_label: nth-child vs nth-of-type
title: CSS nth-child() vs nth-of-type()?
slug: /css-nth-child-vs-nth-type
tags:
  - CSS Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is the difference between the `nth-child()` and `nth-of-type()` in CSS?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

  - *`nth-child()`*: Select ***the child*** at ***nth position of children***.

  **Example**: We want to select a child `p` at position 2. But at that position, there's no `p` tag => so nothing will be selected.
  ```css
  .container p:nth-child(2) { background: red; }
  ```
  ```html
  <div class="container">
    <p>Position 1</p>
    <div>Position 2</div> <!-- At position 2, there's no child with p tag -->
    <div>Position 3</div>
    <p>Position 4</p>
  </div>
  ```
  - *`nth-of-type()`*: Select ***the type*** of certain tag at ***nth position of that type***.

  **Example**: We want to select a child `p` at position 2 of it's type.
  ```css
  .container p:nth-of-type(2) { background: red; }
  ```
  ```html
  <div class="container">
    <p>Position 1 of type P</p>
    <div>Position 1 of type DIV</div> 
    <div>Position 2 of type DIV</div>
    <p>Position 2 of type P</p> <!-- Selected -->
  </div>
  ```

:::note
Note that `nth-child()` and `nth-of-type()` use the same formular:
- `:nth-child(2n+3)`, `:nth-child(odd/even)`, `:nth-child(3n)`, `:nth-child(3)`
- `:nth-of-type(2n+3)`, `:nth-of-type(odd/even)`, `:nth-of-type(3n)`, `:nth-of-type(3)`
:::

</details>