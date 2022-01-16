---
sidebar_position: 1000
sidebar_label: CSS counter
title: CSS Counter
slug: /css-counter
tags:
  - CSS Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
I have a list of elements, how can I index the list items by number?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  You can use `counter` in CSS.
  ```css title="CSS code"
  ol {
    counter-reset: section; /*(define a counter named section)*/
    list-style-type: none;
  }

  li::before {
    counter-increment: section; /*(start the counter `section`)*/
    content: counters(section,".") " "; /*Insert the counter to content of before li*/
  }
  ```
  ```html title="HTML code"
  <ol>
    <li>item</li>
    <li>item   
    <ol>
      <li>item</li>
      <li>item
      <ol>
        <li>item</li>
        <li>item</li>
      </ol>
      </li>
      <li>item</li>
    </ol>
    </li>
    <li>item</li>
  </ol>
  ```
  Output:
  
  ![CSS Counter list interview question](/img/interviews/css/css-counter.PNG)

</details>