---
sidebar_position: 1000
sidebar_label: Bootstrap Component vs Entry Component
title: Difference Between Bootstrap Component and Entry component
tags:
  - Basic Angular Interviews
---

### Bootstrap Component vs Entry Component

:::quest Question:

\***`ಠ_ಠ`**\* : 
Can you tell the difference between **bootstrap component** and **entry component** in Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

  **Entry Component** is components that Angular loads ***imperatively***, (it's not referenced in template) but ***dynamically loaded at runtime*** through a `ComponentFactoryResolver` or via router. Declaring a component in `entryComponents` array will prevent the compiler to treeshake these components out of the module.

  There are 3 main types of entry components:
  - **Bootstrapped component** is an entry component that Angular loads into the DOM during the bootstrap process (rendering the root component inside the DOM at application launch time).
  ```tsx
  @NgModule({
    declarations: [
      RootComponent
    ],
    imports: [],
    providers: [],
    bootstrap: [RootComponent] // bootstrapped entry component
  })
  ```
  - **Routed entry component** A component you specify in a route definition
  ```tsx
    const routes: Routes = [
    {
      path: '',
      component: RoutedComponent
    }
  ];
  ```
  - **Dynamic component** which loaded dynamically (at run time) through a `ComponentFactoryResolver`
  ```tsx {10} title="appModule.tsx"
  @NgModule({
      declarations: [
          AppComponent, DynamicComponent
      ],
      imports: [
          BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent], // Bootstrapped component
      entryComponents: [DynamicComponent] // Declared dynamic entry components
  })
  export class AppModule { }
  ```
  ```tsx {16} title="app.component.tsx"
  import { DynamicComponent } from './dynamic.component';

  @Component({
      // ...
  })
  export class AppComponent {
      title = 'app';
      componentRef: any;

      @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

      constructor(private resolver: ComponentFactoryResolver) { }

      // create component dynamically
      createComponent(someOptions) {
          const factory = this.resolver.resolveComponentFactory(DynamicComponent);
          this.componentRef = this.entry.createComponent(factory);
      }
  }
  ```

:::danger Note

> As of Angular 9 entryComponents is no longer required

:::

</details>

