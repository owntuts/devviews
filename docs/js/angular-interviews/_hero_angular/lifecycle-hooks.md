<details open>
  <summary><h5>Lifecycle Hooks</h5></summary>

  \***`◔̯◔`**\* : 
In Angular, every component instance has a lifecycle which is phases from initialization the component -> rendering it's view along with its child views to destroying the component instance and removes its rendered template from the DOM. Along with these phases Angular provides hooks to tap into to change or add your custom functions at specific phases in a lifecycle.

There's 8 lifecycle hooks in ANgular

![Angular Lifcycle hooks](/img/interviews/angular/lifcycle-hooks.png)

</details>

<details>
  <summary><h5>ngAfterContentCheck</h5></summary>

`ngAfterContentChecked` is a lifecycle hook that is ***called after Angular checks the content projected into the component***. It will run after the content has been checked and most of the time it's during a change detection cycle.

- **What does "Angular checks the content" mean?** It means that Angular ***compares the current state of the content with the previous state and updates the view accordingly***. The content is the part of the template that is inserted by another component using the `<ng-content>` directive.

- **When does Angular check the content?** Initially, after the ngAfterContentInit hook finishes. ***Every time the change detection is run (application state change)***. What causes the application state change? Events - click, submit, etc. Ajax calls - fetching data from a remote server Timers - setTimeout, setInterval, etc.

- **Why use `ngAfterContentChecked`?** You can use this hook to perform any custom logic or actions after the content has been checked and updated. For example, you can access and manipulate the content children using the @ContentChild and `@ContentChildren` decorators.

Here is an example of how to use `ngAfterContentChecked` in Angular:

```ts
import { Component, AfterContentChecked, ContentChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <ng-content></ng-content>
  `,
})
export class ParentComponent implements AfterContentChecked {
  @ContentChild('child') child; // get a reference to the child element

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    console.log(this.child); // log the child element
  }
}

@Component({
  selector: 'app-child',
  template: `
    <h3 #child>Child Component</h3>
  `,
})
export class ChildComponent {}
```

</details>

<details>
  <summary><h5>Order of lifecycle running of nested components</h5></summary>

The order of lifecycle running of nested components in Angular is determined by the order of creation and destruction of the components. Angular creates and destroys components in a ***depth-first manner, which means it goes from the parent to the child, and then back to the parent***.

For example, if you have a nested component structure like this:

```html
<app-parent>
  <app-child>
    <app-grandchild></app-grandchild>
  </app-child>
</app-parent>
```

The order of lifecycle running of these components would be:

- When creating components:
  - app-parent: ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked
  - app-child: ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked
  - app-grandchild: ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked
  - app-child: ngAfterViewInit, ngAfterViewChecked
  - app-parent: ngAfterViewInit, ngAfterViewChecked
- When destroying components:
  - app-parent: ngOnDestroy
  - app-child: ngOnDestroy
  - app-grandchild: ngOnDestroy

</details>