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

