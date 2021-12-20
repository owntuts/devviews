---
sidebar_position: 1000
sidebar_label: Event Binding
title: Event Binding in Angular And Example
slug: /event-binding-angular-example
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is event binding in Angular? Please give an example?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Event binding** is a mechanism of Angular to handle (pass) the native events (browser events) raised from the DOM like button click, mouse move etc to upper components and deligate the event handler to specified component's method.

  ### Event Binding Example

  1. Child component receive an native click event of a button. 
  2. It deligate the native event to Parent component. 
  3. The Parent component handles the deligated event.

```ts title="child.Component.ts"
@Component({
  selector: 'Child',
  template: `
    <button (click)="handleNativeEvent()">Notify Parent!</button>
  `
})
export class Child {
  @Output notifyToParent: EventEmiter<any> = new EventEmiter();
  handleNativeEvent() {
    notifyToParent.emmit("Hi, I'm your child!");
  }
}
```

```ts title="parent.Component.ts"
@Component({
  selector: 'Parent',
  template: `
    <Child (notifyParent)=handleNotify($event)></Child>
  `
})
export class Parent {
  handleNotify(evt) {
    // do something with child notification data sent from Child (evt)
  }
}
```

</details>