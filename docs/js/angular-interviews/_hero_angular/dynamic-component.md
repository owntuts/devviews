<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Angular Dynamic Component</h5></summary>

Angular Dynamic Component is a feature that allows you to ***load components dynamically at runtime***. It can be useful for creating complex and conditional views, or for loading components from external sources.

```tsx
import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      {{ name }}
      <ng-container #ref></ng-container>
    </div>
  `
})
export class AppComponent {
  name = 'Angular';

  @ViewChild('ref', { read: ViewContainerRef, static: true }) ref: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    import('./created/created.component').then((mod) => {
      const component = mod.CreatedComponent;
      const cmpFactory = this.resolver.resolveComponentFactory(component);
      this.ref.clear();
      this.ref.createComponent(cmpFactory);
    });
  }
}

```
</details>

