---
sidebar_position: 1000
sidebar_label: CSS vs CSS3
title: CSS Selectors Comparison
slug: /css-selectors-comparison
tags:
  - CSS Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please tell the differences among **Descendant Selector** (space), **Child Selector** (>), **Adjacent Sibling Selector** (+), **General Sibling Selector** (~)?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **[Descendant Selector](https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_element)**: Allows you to ***select all descendants*** of an element.
  ```css
  #parent .box {
    float: left;
  }
  ```
  ```html
  <div id="parent">
      <p>
          <div class="box">Selected element (I'm a descendant)</div>
      </p>
      <div class="box">Selected element (I'm a child => I'm a descendant)</div>
  </div>
  ```
  - **[Child Selector](https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_gt)**: ***Select child*** elements (elements at first level), not descendant elements.
  ```css
  #parent > .box {
    float: left;
  }
  ```
  ```html
  <div id="parent">
      <p>
          <div class="box">This is descendant element (won't be selected)</div>
      </p>
      <div class="box">Selected element (I'm a child)</div>
  </div>
  ```
  - **[Adjacent Sibling Selector](https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_pluss)**: select an element that is directly after another specific element.
  ```css
  #me + .sibling {
    background-color: yellow;
  }
  ```
  ```html
  <div id="me"></div>
  <div class="sibling">Selected element</div>
  <div class="sibling">Unselected element</div>
  <div class="sibling">Unselected element</div>
  ```
  - **[General Sibling Selector](https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_tilde)**: select all elements that are next siblings of a specified element
  ```css
  #me ~ .sibling {
    background-color: yellow;
  }
  ```
  ```html
  <div id="me"></div>
  <div class="sibling">Selected element</div>
  <div class="sibling">Selected element</div>
  <div class="sibling">Selected element</div>
  ```

</details>