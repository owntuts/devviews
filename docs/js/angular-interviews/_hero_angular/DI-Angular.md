<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/custom-element.png) -->

<details open>
<summary><h5>Angular Dependency Injection</h5></summary>

Angular uses dependency injection (DI) to provide components and services with their required dependencies. Dependencies are passed as parameters to the class (component, sevice) constructor. The DI framework ***looks for a provider of the dependency in the injector hierarchy***, starting from the component’s own injector and going up to the root injector if needed. The DI framework creates and injects the dependencies based on the Inversion of Control (IoC) principle, which separates the consumers and providers of dependencies for better testing and maintenance.

![Angular Dependency Injection](/img/interviews/angular/DI-Angular.png)

</details>

<details>
<summary><h5>@Self() vs @Optional() vs @SkipSelf() vs @Host()</h5></summary>

These are Angular decorators that modify how the dependency injection framework resolves dependencies. Here is a brief explanation and example for each:

- `@Self()` tells Angular to ***look for the dependency only in the local injector of the current component*** or directive. For example:

```typescript
@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo }}
    </div>
  `,
  providers: [RandomService]
})
export class GrandChildComponent {
  randomNo: number;
  constructor(@Self() private randomService: RandomService) {
    this.randomNo = this.randomService.getRandom();
  }
}
```

- `@Optional()` tells Angular to assign null to the dependency if it is not found. For example:

```typescript
@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo }}
    </div>
  `
})
export class GrandChildComponent {
  randomNo: number;
  constructor(@Optional() private randomService: RandomService) {
    this.randomNo = this.randomService ? this.randomService.getRandom() : null;
  }
}
```
In this example, if `RandomService` is not provided by any injector, Angular will not throw an error but assign `null` to `randomService`

- `@SkipSelf()` tells Angular to ***skip the local injector of the current component*** or directive and look for the dependency in its parent injectors. For example:

```typescript
@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo }}
    </div>
  `
})
export class GrandChildComponent {
  randomNo: number;
  constructor(@SkipSelf() private randomService: RandomService) {
    this.randomNo = this.randomService.getRandom();
  }
}
```

- `@Host()` tells Angular to ***look for the dependency in the local injector of the current component or directive and its host component***. For example:

```typescript
@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo }}
    </div>
    <testDirective></testDirective>
  `,
  providers: [RandomService]
})
export class GrandChildComponent {
  randomNo: number;
  constructor(private randomService: RandomService) {
    this.randomNo = this.randomService.getRandom();
  }
}

@Directive({
  selector: 'testDirective'
})
export class TestDirective {
  randomNo: number;
  constructor(@Host() private randomService: RandomService) {
    this.randomNo = this.randomService.getRandom();
  }
}
```

</details>

<details>
<summary><h5>providers vs. viewProviders</h5></summary>

providers and viewProviders are properties of the `@Component` decorator that specify where Angular can find the providers of the dependencies for the component. The difference is that ***providers are available to both view children and content children of the component***, while ***viewProviders are only available to view children***. View children are the elements that are defined in the component's template, while content children are the elements that are projected into the component using `<ng-content>`. For example:

```typescript
@Component({
  selector: 'my-parent',
  template: `
    <div class="box">
      ParentComponent => {{ randomNo }}
    </div>
    <my-child></my-child>
    <ng-content></ng-content>
  `,
  providers: [RandomService]
})
export class ParentComponent {
  randomNo: number;
  constructor(private randomService: RandomService) {
    this.randomNo = this.randomService.getRandom();
  }
}

@Component({
  selector: 'my-child',
  template: `
    <div class="box">
      ChildComponent => {{ randomNo }}
    </div>
  `
})
export class ChildComponent {
  randomNo: number;
  constructor(private randomService: RandomService) {
    this.randomNo = this.randomService.getRandom();
  }
}

@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo }}
    </div>
  `
})
export class GrandChildComponent {
  randomNo: number;
  constructor(private randomService: RandomService) {
    this.randomNo = this.randomService.getRandom();
  }
}
```

In this example, RandomService is provided by ParentComponent using providers. This means that both ChildComponent and GrandChildComponent can inject RandomService as their dependencies. ChildComponent is a view child of ParentComponent, while GrandChildComponent is a content child of ParentComponent (projected using `<ng-content>`).

If we change providers to viewProviders in ParentComponent, then only ChildComponent can inject RandomService, but not GrandChildComponent. This is because viewProviders limits the provider to view children only. This can be useful to prevent projected content from interfering with your services.

</details>

<details>
<summary><h5>@SkipSelf() and @Host() in viewProviders</h5></summary>

- **@SkipSelf() and viewProviders**

```tsx
@Component({
  selector: 'app-child',
  viewProviders:
  [{ provide: AnimalService, useValue: { emoji: '🐶' } }]
})
export class ChildComponent {

  // add @SkipSelf()
  constructor(@SkipSelf() public animal : AnimalService) { }

}
```
The logical tree looks like this with @SkipSelf() in `<app-child>`:

```html
<app-root @NgModule(AppModule)
          @Inject(AnimalService=>"🐳")>
  <#VIEW><!-- search begins here and up -->
    <app-child>
      <#VIEW @Provide(AnimalService="🐶")
             @Inject(AnimalService, SkipSelf=>"🐳")>
        <!--Add @SkipSelf -->
      </#VIEW>
    </app-child>
  </#VIEW>
</app-root>
```

- **@Host() and viewProviders**

```tsx
@Component({
  selector: 'app-child',
  …
  viewProviders:
  [{ provide: AnimalService, useValue: { emoji: '🐶' } }]

})
export class ChildComponent {
  constructor(@Host() public animal : AnimalService) { }
}
```
```html
<app-root @NgModule(AppModule)
          @Inject(AnimalService=>"🐳")>
  <#VIEW>
    <app-child>
      <#VIEW @Provide(AnimalService="🐶")
             @Inject(AnimalService, @Host=>"🐶")> <!-- @Host stops search here: because AnimalService is provided here so Angular does not look further up the injector hierarchy -->
      </#VIEW>
    </app-child>
  </#VIEW>
</app-root>
```
</details>
