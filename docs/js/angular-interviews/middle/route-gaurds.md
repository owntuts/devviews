---
sidebar_position: 1000
sidebar_label: Route Guards
title: How Many Types of Route Guards In Angular?
slug: /many-types-route-guards-angular
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is **Route Guard** in Angular? How Many Types of Route Guards In Angular? Please Explain about them?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Route guards** are interfaces provided by Angular allows us to control the accessibility of a route based on condition. We usually use Route guard for authentication, limit user access to certain routes.

  There are 5 types of route guards:

  - **canActivate**: Allows to control if a ***route can be activated (accessed)***.
  ```ts {5} title="router.route.ts"
  const routes: Routes = [
    {
      path: 'private-route',
      component: PrivateComponent,
      canActivate: [CanActivateRouteGaurd]
    }
  ]
  ```
  ```ts {4} title="can-activate-route-gaurd.service.ts"
  @Injectable()
  export class CanActivateRouteGaurd implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // return boolean -> `false` means not allows users to access
    }
  }
  ```
  - **canActivateChild**: Allows to control if ***children of a route can be activated (accessed)***.
  ```ts {5} title="router.route.ts"
  const routes: Routes = [
    {
      path: 'private-route',
      component: PrivateComponent,
      canActivateChild: [CanActivateChildRouteGaurd],
      children: [
          { path: 'child-route', component: ChildComponent},
        ]
    }
  ]
  ```
  ```ts {4} title="can-activate-child-route-gaurd.service.ts"
  @Injectable()
  export class CanActivateChildRouteGaurd implements CanActivateChild {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // return boolean -> `false` means not allows users to access
    }
  }
  ```
  - **canLoad**: Allows to control if a ***route can be accessed*** and ***feature module be loaded*** (In the case of lazy loading, CanLoad can control feature module loading).
  ```ts {5} title="router.route.ts"
  const routes: Routes = [
    {
      path: 'private-route',
      loadChildren: () => import('./private-route').then(m => m.PrivateModule),
      canLoad: [CanLoadGaurd]
    }
  ]
  ```
  ```ts {4} title="can-load-route-gaurd.service.ts"
  @Injectable()
  export class CanLoadGaurd implements CanLoad {
    canLoad(route:Route,segments:UrlSegment[]): boolean {
      // return true or false depending on whether you want to load PrivateModule or not
    }
  }
  ```
  - **canDeactivate**: Allows to control if the ***user can leave a route***. Note that this guard doesn’t prevent the user from closing the browser tab or navigating to a different address.
  ```ts {5} title="router.route.ts"
  const routes: Routes = [
    {
      path: 'private-route',
      component: CertainComponent,
      canDeactivate: CanDeactivateRouteGaurd
    }
  ]
  ```
  ```ts {5} title="can-deactivate-route-gaurd.service.ts"
  @Injectable()
  export class CanDeactivateRouteGaurd implements CanDeactivate<CertainComponent> {
    canActivate(compoent: CertainComponent): boolean {
      if(component.unsaved()) {
        return confirm('Are you sure you want to quit?')
      }
      return true;
    }
  }
  ```
  - **resolve**: In a route, heavy data is not possible to pass through query params. Resolve Guard allows to ***resolve data and pass to the component***.
  ```ts {5} title="router.route.ts"
  const routes: Routes = [
    {
      path: 'heavy-data-route',
      component: DataComponent,
      resolve: { data: ResolveGuard }
    }
  ]
  ```
  ```ts {4} title="resolve-route-gaurd.service.ts"
  @Injectable()
  export class ResolveGuard implements Resolve<SomeDataType> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SomeDataType {
      // Fetch and return data here
    }
  }
  ```
  ```ts {7} title="data-component.component.ts"
  @Component()
  export class DataComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
      this.route.data.subscribe(data: Data => /* Return data needed*/)
    }
  }
  ```

</details>