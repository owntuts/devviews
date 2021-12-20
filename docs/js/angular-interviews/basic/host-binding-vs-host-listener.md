---
sidebar_position: 1000
sidebar_label: HostBinding vs HostListener
title: What are @HostBinding and @HostListener & Example
slug: /hostbinding-hostlistener-example
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What are **@HostBinding** and **@HostListener** and what they used for? Please give an example of using the twos?!

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **@HostBinding**: ***Host*** means host element, ***binding*** means ***binding (binding data) to an attribute*** of a host element. It's same as input biding `[value]="inputData"`.
  - **@HostListener**: ***binding to an event emitted*** by the host element. It's same as event `(click)="myClick()"`.

**@HostBinding** and **@HostListener** are usually using in custom directive, to bind attribute and event of a host element to change it's style or structure.

### @HostBinding & @HostListener example

```ts title="decorate.directive.ts"
@Directive({
  selector: '[decorate]'
})
export class Decorate {

  @HostBinding('style.color') color: string; // biding color style of host element to `color` variable
  @HostBinding('style.border-color') borderColor: string; 

  @HostEvent('keydown) changeColor() {
    this.color = this.borderColor = 'red'; // change `color` variable will change the color style of the host element
  }

}
```
Using directive `decorate` in other component. (**Host element** here, is the `input` element)

```ts title="text.component.ts"
@Component({
  selector: 'text',
  template: `
    <input type='text' decorate />
  `
})
```

</details>