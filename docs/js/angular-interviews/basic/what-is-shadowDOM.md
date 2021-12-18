---
sidebar_position: 1000
sidebar_label: What is Shadow DOM
title: What is Shadow DOM
slug: /what-is-shadow-dom
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is **Shadow DOM** in Angular? could you give an example about Shadow DOM? and What is it different from DOM?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Shadow DOM** is like shadow of a regular element DOM. It's attached to an element, it's markup structure, style, and behavior is kepp hidden and separated from the code and the regular DOM. Browsers don't show Shadow DOM explicitly except you turn on `Show user agent shadow DOM` of browser's dev tool.

  #### Shadow DOM Example

  Let's look at the video element below:

  ![Shadow DOM](/img/interviews/angular/shadowDOM-video.PNG)

  ```html title="Source code as well as rendered DOM"
  <video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
  </video>
  ```

  The rendered DOM is the `video` tag and `source` tags, but where are buttons and other controls inside the video that you see? it's just the shadow DOM behind video element!

</details>