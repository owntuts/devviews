<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/custom-element.png) -->

<details open>
<summary><h5>Angular Animation</h5></summary>

Animation is `transition` from a `state` to another `state`.

#### Example 1
```tsx
@Component({
  template: `<div [@openClose]="isOpen ? true : false" class="open-close-container"></div>`
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(500))
    ])
  ]
})
```
#### Example 2

```tsx
@Component({
  template: `<my-element [@filterAnimation]="heroesTotal"></my-element>`,
  animations: [
    trigger('filterAnimation', [
      // [] means no animation will happen when the element enters the DOM, or when the expression bound to the trigger changes from any value to 0 or -1
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: 0 }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: 0 })),
          ]),
        ])
      ]),
    ]),
  ]
})
export class HeroListPageComponent implements OnInit {
  heroesTotal = 1; // or -1
}
```

* **trigger():** This function ***creates an animation trigger***. An animation trigger is a name that can be used to refer to a set of animation steps.
* **transition():** defines ***how an element moves from one state to another***. There are three transitions:
  - `:enter:` This transition is used to animate the element when it ***is created***.
  - `:increment:` This transition is used to animate the element ***when its width is increased***.
  - `:decrement:` This transition is used to animate the element ***when its width is decreased***.
  - `:leave`: is to specify that the animation should be triggered when the element leaves the document flow.
* **animate():** This function ***defines an animation step***. An animation step defines the initial and final styles of an element and the duration and easing curve of the animation.
  ```tsx
    transition('* => *', [
      animate('1s', keyframes ( [
        style({ opacity: 0.1, offset: 0.1 }), // the opacity of the element will be 0.1 when 10% of the animation time has elapsed
        style({ opacity: 0.6, offset: 0.2 }),
        style({ opacity: 1,   offset: 0.5 }),
        style({ opacity: 0.2, offset: 0.7 })
      ]))
    ])
  ```
* **query():** This function ***queries all elements that match a certain criteria***. The `query()` function in Angular animation takes the following parameters:
  * **element:** The element to query, or a set of elements that contain Angular-specific characteristics, specified with one or more of the following tokens:
      * `:enter`: Query an element enters the viewport.
      * `:leave`: Query an element leaves the viewport. Example, `query(':enter, :leave', [...])` when an element enters or leaves the viewport
      * `:animating` : Query all currently animating elements.
      * `@triggerName` : Query elements that contain an animation trigger.
      * `@*`: Query all elements that contain animation triggers. If you use it on template like this `<div [@.disabled]="true">`, it means disable all children's animations.
      * `:self`: Include the current element into the animation sequence.
  * **options:** An object that can be used to control the behavior of the query. The following options are supported:
      * **deep:** If true, the query will recurse into child elements.
      * **children:** If true, the query will only return child elements.
      * **exclude:** An array of element names that should be excluded from the query.
  ```tsx
  const childElementsWithoutFoo = query(":self", { deep: true, exclude: ["foo"] });
  ```
* **stagger():** This function allows you to ***define a timing gap between each animated element***. In the above code, the stagger() function is used to add a 50 millisecond delay between each animation.
* **group():** Runs multiple animation steps ***in parallel***.
  ```tsx
  group([
    animate("1s", style({ background: "black" })),
    animate("2s", style({ color: "white" }))
  ])
  ```
* **sequence():** This function allows you to ***play multiple animation steps in sequence***.
  ```tsx
  sequence([
    style({ opacity: 0 }),
    animate("1s", style({ opacity: 1 }))
  ])
  ```

</details>

<details>
<summary><h5>Route transition animations</h5></summary>


```tsx
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'HomePage' }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { animation: 'AboutPage' }
      },
    ])
  ],
```

```tsx
const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
    ])
  ]);

@Component({
  template: `
    <div [@routeAnimations]="getRouteAnimationData()">
      <router-outlet></router-outlet>
    </div>
  `,
  animations: [
    slideInAnimation
  ]
})
class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
```

</details>
