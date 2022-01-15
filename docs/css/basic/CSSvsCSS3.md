---
sidebar_position: 1000
sidebar_label: CSS vs CSS3
title: CSS vs CSS3 and New Features In CSS3
slug: /css-vs-css3-new-features-css3
tags:
  - CSS Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please tell the ***differences between CSS and CSS3***? And tell some ***new popular features of CSS3***?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  CSS3 is new version of CSS. CSS3 does not deprecate older CSS code, it is just add more features to CSS. Here are main benefits of CSS3:
  - CSS3 allows developers to style HTML elements ***easier*** with fewer lines of code.
  - CSS3 is aiming to ***responsive designs*** (media queries, flexbox, grid,..) & ***modern design*** (animation, drop shaddows,...).

#### Some popular features of CSS3

  - **Pseudo-classes**:
  ```css
  :root{}
  a:link, a:visited, a:hover, a:active, a:focus {}
  ```
  - **Box Shadow**: `box-shadow: topOffset leftOffset blurRadius spreadRadius color;`
  ```css
  box-shadow: 1px 2px 0 0 rgba(42, 42, 32, 1);
  ```
  - **Text Shadow**: `text-shadow: topOffset leftOffset blurRadius color;`
  ```css
  text-shadow:5px 5px 5px red;
  ```
  - **Linear Gradients**: `background: linear-gradient(direction, color-stop1, color-stop2, ...)`
  ```css
  div {
    background: linear-gradient(to right, red , yellow);
  }
  ```
  - **Radial Gradients**: `background: radial-gradient(shape of gradient, start-color, ..., last-color);`
  ```css
  div {
    background: radial-gradient(circle, red, yellow, green);
  }
  ```
  - **Rounded Corners**: `border-radius: 25px;`
  - **Attribute Selectors**: 
  ```css
  img[src*='artwork']{
    border-color: #C3B087 #FFF #FFF #C3B087;
  }
  ```
  - **New Colors**: CSS3 adds new more colors: RGBA, HSL, HSLA, Gradient Colors.
  ```css
  div {
    background-color: rgba(0, 0, 0, 0.5);
  }
  ```
  - **Media Queries**:
  ```html
  <link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
  ```
  ```css
  @media not|only mediatype and (expressions) {
    CSS-Code;
  }
  ```
  - **Multiple Background Images**: 
  ```css
  background-image:
    url(1.jpg),
    url(2.gif),
    url(3.png);
  ```

</details>