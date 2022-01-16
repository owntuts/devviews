---
sidebar_position: 1000
sidebar_label: Apply CSS
title: block vs inline vs inline-block Element In CSS
slug: /block-vs-inline-vs-inline-block-element-css
tags:
  - CSS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please explain the difference between `block`, `inline` and `inline-block` element?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

  - **A block-level element**: (Such as, `<p>`, `<h1>`, `<div>`, `<header>`)
    - Always takes up the ***full width*** available => it always starts on a new line.
    - You can apply `width`, `height`, `margin-top`, `margin-bottom` to a block-level element.
    ```css
    div {
      width: 12px;
      height: 12px;
      margin-top: 14px;
      margin-bottom: 14px;
      margin-left: 14px; 
      margin-right: 14px
    }
    ```
  - **An inline element**: (Such as, `<a>`, `<span>` , `<strong>`, `<img>`)
    - Only takes up ***as much width as necessary*** => An inline element does not start on a new line. 
    - Doesn't respect `width`, `height`, `margin-top`, `margin-bottom`.
    ```css
    span {
      width: 12px; // doesn't effect to inline element
      height: 12px; // doesn't effect to inline element
      margin-top: 14px; // doesn't effect to inline element
      margin-bottom: 14px; // doesn't effect to inline element
      margin-left: 14px; 
      margin-right: 14px
    }
    ```
  - **An inline-block element**: (Such as, `<input>`, `<button>`, `<select>`, `<textarea>`)
    - ***Like inline element*** when An inline-block element does not start on a new line. 
    - BUT ***like block element*** when you can apply `width`, `height`, `margin-top`, `margin-bottom`.
    ```css
    button {
      width: 12px;
      height: 12px;
      margin-top: 14px;
      margin-bottom: 14px;
      margin-left: 14px; 
      margin-right: 14px
    }
    ```

</details>