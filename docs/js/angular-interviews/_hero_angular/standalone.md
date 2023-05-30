<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Standalone Component</h5></summary>

A standalone component in Angular is a component that is not part of any Angular module. This means that it can be used without being imported into a module. Standalone components are useful for creating reusable components that can be used in multiple applications.

#### Steps to create app with Standalone components

#### 1. Bootstrapping an application using a standalone component

```jsx
import {LibraryModule} from 'ngmodule-based-library';

bootstrapApplication(PhotoAppComponent, {
  providers: [
    {provide: BACKEND_URL, useValue: 'https://photoapp.looknongmodules.com/api'},
    importProvidersFrom(
      LibraryModule.forRoot()
    ),
    provideRouter([/* app routes */]),
    // ...
  ]
  ]
});
```

#### 2. Routing & Lazy loading many routes

```jsx
// Main application:
export const ROUTES: Route[] = {
  // Lazy-load the admin routes.
  {path: 'admin', loadChildren: () => import('./admin/routes').then(mod => mod.ADMIN_ROUTES)},
  // ... rest of the routes
}

// In admin/routes.ts:
export const ADMIN_ROUTES: Route[] = [{
  path: '',
  pathMatch: 'prefix',
  providers: [
    AdminService,
    {provide: ADMIN_API_KEY, useValue: 12345},
  ],
  children: [
    {path: 'users', component: AdminUsersCmp},
    {path: 'teams', component: AdminTeamsCmp},
  ],
}];
```

</details>

<details>
<summary><h5>Types of providers</h5></summary>

- `@NgModule.providers` (in applications bootstrapping through an NgModule);
- `@Injectable({provideIn: "..."})`(in both the NgModule-based and the “standalone” applications);
- providers option in the bootstrapApplication call (in fully “standalone” applications);
```jsx
bootstrapApplication(PhotoAppComponent, {
  providers: [
    {provide: BACKEND_URL, useValue: 'https://photoapp.looknongmodules.com/api'},
    {provide: PhotosService, useClass: PhotosService},
    // ...
  ]
});
```
- providers field in a Route configuration like above.

- **Environment injectors** are used to provide services to components and directives outside of the component tree. This can be useful for providing services to services, directives, and components that are not defined in an Angular module.

```jsx
import { createEnvironmentInjector, ENVIRONMENT_INITIALIZER } from '@angular/core';

const environmentInjector = createEnvironmentInjector([
  { provide: 'MyService', useClass: MyService },
  { provide: ENVIRONMENT_INITIALIZER, useValue: () => {
    console.log('This function runs when this EnvironmentInjector gets created');
  }}
]);
```

```jsx
import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  constructor(private injector: Injector) {}

  ngOnInit() {
    const myService = this.injector.get(MyService);
  }

}
```
- **Standalone injectors**

```jsx
@Component({
        selector: 'date-modal',
        template: '<datepicker></datepicker>',
        standalone: true,
        imports: [DatePickerModule]
})
class DateModalComponent {
}
```

</details>

<details>
<summary><h5>Resolve circular dependencies</h5></summary>

Circular problem happens when class 'A' refers to class 'B' and 'B' refers to 'A'. One of them has to be defined first. To solve this problem, we use `forwardRef`.

```jsx
@Component({
  standalone: true, 
  imports: [ChildComponent],
  selector: 'app-parent',
  template: `<app-child [hideParent]="hideParent"></app-child>`,
})
export class ParentComponent {
  @Input() hideParent: boolean;
}


@Component({
  standalone: true,
  imports: [CommonModule, forwardRef(() => ParentComponent)],
  selector: 'app-child',
  template: `<app-parent *ngIf="!hideParent"></app-parent>`,
})
export class ChildComponent {
  @Input() hideParent: boolean;
}
```
</details>

