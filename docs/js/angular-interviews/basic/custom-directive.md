---
sidebar_position: 1000
sidebar_label: Custom Directives
title: What is an Angular Directive?
slug: /angular-directive
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is an Angular Directive? Please give an example about custom directive?!

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
**Angular Directives** is like attribute of a HTML element. It attaches custom behavior to elements in the DOM to change the structure (Structural Directives) or the style (Attribute Directives) of the DOM elelment.

### Angular Custom Directive

```ts title="active.directive.ts"
@Directive({
  selector: '[greenBg]' // the Directive selector is like CSS attribute selector of an HTML element
})
export Class ActiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }
}
```

</details>