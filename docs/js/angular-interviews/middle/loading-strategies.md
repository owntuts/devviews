---
sidebar_position: 1000
sidebar_label: Multi Provider
title: Eager Loading vs Lazy Loading vs Pre-Loading Angular?
slug: /eager-loading-vs-lazy-loading-vs-pre-loading-angular
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What Is **Eager Loading**, **Lazy Loading**, and **Pre-Loading** in Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Eager Loading**, **Lazy Loading**, and **Pre-Loading** are loading strategies in Angular.
  
  - **Eager Loading**: A feature module will be imported & loaded before the application starts -> So, We should ***use **Eager Loading** to load core modules*** -> and usually ***come with `forRoot` pattern***.
  - **Lazy Loading**: A feature module will be loaded on demand after the application starts -> and usually ***come with `forChild` pattern***.
  - **Pre-Loading**: A feature module will be loaded automatically after the application starts: like lazy loading except `applyPreload` option.

  ### Look At Example Below For More Details

  ```ts
  const routes: Routes = [
    { path: '', redirectTo: 'eager-loading', pathMatch: 'full' }, 
    { 
      path: 'eager-loading', 
      component: EagerHomeComponent, 
      children: [
        { path: '', redirectTo: 'childl', pathMatch: 'full' }, 
        { path: 'childl', component: EagerChildComponent }, 
        { path: 'child2', component: EagerChild2Component },
        { path: '**', redirectTo: 'childl' } 
      ]
    }, 
    { 
      path: 'lazy-loading', 
      loadChildren:'./features/lazy-loading-module/lazy-loading.module#LazyLoadingModule' 
    }, 
    { 
      path: 'pre-loading', 
      loadChildren: './features/pre-loading-module/pre-loading.module#PreLoadingModule', 
      data: { applyPreload: true } 
    }, 
    { path: '**', redirectTo: reager-loading' } 
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy:  CustomPreloadingStrategy}) 
    ],
      exports: [RouterModule] 
  }) export class
  AppRoutingModule { }
  ```

</details>