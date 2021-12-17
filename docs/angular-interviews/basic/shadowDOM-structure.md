---
sidebar_position: 1000
sidebar_label: Shadow DOM Structure
title: Shadow DOM Structure
slug: /shadow-dom-structure
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please describe **Shadow DOM structure**? Why Do Shadow DOMs Matter? Please give an example of creating shadow dom?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
### The Structure of Shadow DOM contains:

  ![Shadow DOM](/img/tutorial/angular/shadowdom.png)

  - **Shadow host**: A regular DOM node that the shadow DOM is attached to. Browsers will render *Shadow Host* in DOM tree.
  - **Shadow tree**: DOM tree of shadow DOM behind ***Shadow host*** & all it's elements are hidden from the regular DOM tree.
  - **Shadow boundary**: Like an area encapsulates Shadow tree into a separate local scope to hide DOM logic (structure, style,...) behind other elements.
  - **Shadow root**: The root node of the shadow tree.

### Why Do Shadow DOMs Matter?
Shadow DOM allows us to hide DOM logic (structure, style,...) behind other elements. That forms the so call **local scoped variables** and **local scoped style sheet** which mean it's seperate & not conflict with the global scope of regular DOM. 

### Example of creating shadow dom

  ```js title="./shadowDomExample.js"
  // Create a shadow host
  let hostEl = document.createElement('p', {"id":"im-host-el"});
  // Attach shadow context to the host element
  let shadow = hostEl.attachShadow({mode: 'open'});
  // `open` means that you can access the shadow DOM using JavaScript written in the main page context (which is outside shadow context). 
  // If you set `close`, it returns null. 
  console.log(hostEl.shadowRoot);
  // Attach element to the Shadow DOM tree
  let childEl = document.createElement('span');
  shadow.appendChild(childEl);
  // log the shadow DOM behind host elelment
  console.log(hostEl);
  ```

  The output of the shadow dom is like this:

  ![Shadow DOM output](/img/tutorial/angular/shadowdomoutput.PNG)

</details>