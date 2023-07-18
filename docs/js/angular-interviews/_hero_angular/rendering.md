<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/custom-element.png) -->

<details open>
<summary><h5>Ivy Rendering Engine In Angular</h5></summary>

Ivy is the new rendering engine for Angular that compiles and converts Angular code (template HTML + TS) into pure HTML and JavaScript that the browser understands. ***Ivy works by using incremental DOM and locality principle*** to optimize the compilation and rendering process.

- **Incremental DOM** means that Ivy ***only updates the parts of the DOM that have changed, rather than recreating the entire DOM tree***. This improves performance and memory usage.

- **Locality principle** means that Ivy only ***compiles the components that are needed for rendering***, rather than compiling all the components in an `NgModule`. This reduces the bundle size and enables faster recompilation.

Ivy also supports ***tree shaking, template type checking, and improved debugging tools***.

- **Tree shaking** means that Ivy removes any unused code or dependencies from the final bundle, reducing its size and improving performance.

- **Template type checking** means that Ivy checks for errors and inconsistencies in the templates at compile time, rather than at runtime.

- **Improved debugging tools** means that Ivy provides new functions such as `ng.probe` and `ng.getComponent`, which allow you to inspect and manipulate the components and their properties in the browser console.


</details>

<details>
<summary><h5>Annotations vs Decorators in Angular</h5></summary>

Annotations and decorators are both used to add metadata to code in Angular. However, there are some key differences between the two.

* **Annotations** are ***static metadata*** that is ***added to code at compile time***. They are simply strings that are attached to a declaration, such as a class, method, or property. Annotations create an `annotations` array on the class using the `Reflect Metadata library`. Annotations ***do not change the behavior of the code***, but they can be used by tools and frameworks to provide information about the code. Annotations (which are commonly used in Angular 1) are still supported in Angular, ***but they are not as commonly used as decorators & you need to hardcorded to use them***.
    ```tsx
    import {
        ComponentAnnotation as Component,
    } from '@angular/core';

    ```

    ```tsx
    export class ComponentAnnotation extends DirectiveMetadata {
        constructor() {
            
        }
    }

    ```
* **Decorators** are ***dynamic metadata*** that is ***added to code at runtime***. They are functions ( using the `Reflect.defineMetadata` method) that are called when the decorated code is executed. Decorators can be used to ***change the behavior of the code***, such as by adding functionality or injecting dependencies. There are different types of decorators:
    - **Class Decorator** : @Component
    - **Method Decorator**: @HostListener
    - **Property Decorator**: @Input/@Output
    - **Parameter Decorator**: @Inject

</details>

<details>
<summary><h5>Pure Pipes vs Impure Pipes in angular</h5></summary>

| Pure Pipes | Impure Pipes |
|------------|--------------|
| Only executed when the value or parameter(s) changes | Executed on every change detection cycle |
| Detect changes to primitive values or object references | Detect changes within objects or external factors |
| Must be pure functions with no side effects | Can have side effects or depend on other values |
| More efficient and performant | More flexible and powerful |
| Default for all pipes | Need to set pure property to false in the pipe decorator |

Here is a code snippet of an impure filter pipe:

```tsx
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // make it impure
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => item.name.indexOf(filter) !== -1);
  }
}

```

The impure pipe will be executed whenever the change detection cycle runs, regardless of whether the `items` or `filter` have changed or not. If you want the pipe to be executed only when the items or filter change, you need to make it pure.

</details>

<details>
<summary><h5>@ViewChild, @ViewChildren</h5></summary>

@ViewChild and @ViewChildren are decorators that allow you to access the child elements or components of a parent component. They are useful when you need to manipulate the DOM elements or communicate with the child components.

The arguments of @ViewChild and @ViewChildren are:

- The first argument is the **selector** of the element or component to query. It can be one of the following types:
  - A **string** that matches the name of a local template variable, a directive type, or a component type.
  - A **function** that returns the directive or component type.
  - A **template reference variable** as an expression, such as `#myVar` or `ref-myVar`.
- The second argument is an **options object** that has the following properties:
  - **read**: This property specifies what token should be read from the queried element or component. For example, you can use `read: ElementRef` to get the `ElementRef` instance of the element, or `read: ViewContainerRef` to get the `ViewContainerRef` instance of the element. If you omit this property, Angular will try to infer the best option based on the selector type.
  - **static**: This property indicates whether the query should be resolved before change detection runs. If set to `true`, the query will be ***resolved once and not updated later***. If set to `false`, the query will be ***resolved after change detection runs, and updated if the query results change***. This property is only available for @ViewChild, not for @ViewChildren.

Here are some examples of how to use @ViewChild and @ViewChildren with different arguments:

- Using @ViewChild with a string selector and no options object:

```ts
import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <app-child></app-child>
  `,
})
export class ParentComponent {
  // Get a reference to the child component by its type
  @ViewChild(ChildComponent) child: ChildComponent;

  ngAfterViewInit() {
    // Access the child component properties or methods
    console.log(this.child.message); // Hello from child
    this.child.greet(); // Greet from child
  }
}
```

- Using @ViewChild with a template reference variable and an options object:

```ts
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <div #myDiv>Some content</div>
  `,
})
export class ParentComponent {
  // Get a reference to the div element by its template reference variable
  // Specify that we want to read its ElementRef instance
  @ViewChild('myDiv', { read: ElementRef }) myDiv: ElementRef;

  ngAfterViewInit() {
    // Access the native element of the div
    console.log(this.myDiv.nativeElement); // <div _ngcontent-c0>Some content</div>
  }
}
```

- Using @ViewChildren with a function selector and no options object:

```ts
import { Component, ViewChildren, QueryList } from '@angular/core';
import { Pane } from './pane.directive';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <div pane id="1">Pane 1</div>
    <div pane id="2">Pane 2</div>
    <div pane id="3">Pane 3</div>
  `,
})
export class ParentComponent {
  // Get a list of references to the elements with the pane directive
  // Use a function that returns the directive type as the selector
  @ViewChildren(Pane) panes: QueryList<Pane>;

  ngAfterViewInit() {
    // Iterate over the elements with the pane directive
    this.panes.forEach((pane) => {
      // Access the pane directive properties or methods
      console.log(pane.id); // 1, then 2, then 3
      pane.doSomething(); // Do something with each pane
    });
  }
}
```

</details>

