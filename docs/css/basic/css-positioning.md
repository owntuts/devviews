---
sidebar_position: 1000
sidebar_label: CSS Properties
title: static vs absolute vs relative vs fixed vs sticky position in CSS
slug: /css-static-vs-absolute-vs-relative-vs-fixed-vs-sticky
tags:
  - CSS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please explain the differences among CSS position Properties: *`static`*, *`absolute`*, *`relative`*, *`fixed`*,  *`sticky`*?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - *`position: static`*: Default position property. static-positioned element always positioned according to the ***normal flow*** of the page & ***not affected by the top, bottom, left, and right*** properties.
  - *`position: relative`*: relatively-positioned element is positioned ***relative to its normal position*** (you can set `top`, `right`, `bottom`, and `left` properties to shift the element out of it's original position).
  ```css
  div.relative {
    position: relative;
    left: 30px;
  }
  ```
  - *`position: absolute`*: Element is positioned ***relative to the nearest positioned ancestor***.  You can use `top`, `right`, `bottom`, and `left` properties to position the element.
  ```css
  /*relative ancestor*/
  div.relative {
    position: relative;
  }

  div.absolute {
    position: absolute;
    top: 80px;
    right: 0;
  }
  ```
  - *`position: fixed`*: Element is positioned ***relative to the viewport*** (fixed at the same place even if you sroll). You can use `top`, `right`, `bottom`, and `left` properties to position the element.
  - *`position: sticky`*: A sticky element ***toggles between `relative` and `fixed`***. It is positioned relative then it changes to fixed position when you scroll (up or down) to a viewport offset.
  ```css
  div.sticky {
    position: sticky;
    top: 0; /*or bottom: 0*/ /*<- viewport offset*/
    background-color: red;
  }
  ```

</details>