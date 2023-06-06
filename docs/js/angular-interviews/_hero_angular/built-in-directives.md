<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/custom-element.png) -->

<details open>
<summary><h5>Angular Built-In Directives</h5></summary>

Angular has a number of built-in directives that can be used to change the appearance and behavior of HTML elements. These directives are divided into two categories: attribute directives and structural directives.

**Attribute directives**

* `ngClass`
* `ngStyle`
* `ngModel`
* `ngForm`
* `ngControl`
* `ngDisabled`
* `ngReadonly`
* `ngChange`
* `ngSubmit`
* `ngInit`
* `ngDoCheck`
* `ngAfterViewInit`
* `ngAfterContentInit`
* `ngAfterContentChecked`
* `ngAfterViewChecked`

**Structural directives**

* `ngIf`
* `ngFor`
* `ngSwitch`
* `ngSwitchCase`
* `ngSwitchDefault`
* `ngTemplateOutlet`
* `ngTemplateRef`
* `ngContent`
* `ngOutletContext`
* `ngOutletHost`

</details>

<details>
<summary><h5>Angular Built-In Attribute Directives</h5></summary>

**Directive** | **Description** | **Example**
---|---|---|
**ngClass** | Adds and removes CSS classes from an element. | `<div [ngClass]="{'active': isActive}"></div>`
**ngStyle** | Sets inline styles on an element. | `<div [ngStyle]="{'color': color}"></div>`
**ngModel** | Adds two-way data binding to an HTML form element. | `<input type="text" [(ngModel)]="name"></input>`
**ngForm** | Creates a form object that can be used to validate and submit form data. | `<form [ngForm]="form"></form>`
**ngControl** | Creates a control object that can be used to validate and submit form data. | `<input type="text" [ngControl]="name"></input>`
**ngDisabled** | Disables an element. | `<button [ngDisabled]="isDisabled">Click me</button>`
**ngReadonly** | Makes an element read-only. | `<input type="text" [ngReadonly]="isReadonly"></input>`
**ngChange** | Called when the value of an input element changes. | `<input type="text" [(ngModel)]="name" (ngChange)="onNameChange($event)"></input>`
**ngSubmit** | Called when the user submits a form. | `<form [ngForm]="form" (ngSubmit)="onSubmit($event)"></form>`
</details>

<details>
<summary><h5>Angular Built-In Structural Directives</h5></summary>

- **ngIf**: Conditionally renders an element. 
  
  Example: ```<div *ngIf="isVisible">This element will be rendered if isVisible is true</div>```
- **ngFor**: Repeats an element for each item in an array. Example: 
  `<div *ngFor="let item of items">This element will be repeated for each item in the items array</div>`
- **ngSwitch**: Switches between different views based on a value. Example: 

  ```html
  <div [ngSwitch]="value">
    <br>
    <div *ngSwitchCase="'1'">This view will be rendered if value is 1</div>
    <div *ngSwitchCase="'2'">This view will be rendered if value is 2</div>
    <div *ngSwitchDefault>This view will be rendered if value is anything else</div>
  </div>
  ```
- **ngSwitchCase**: Specifies a view to be rendered by the ngSwitch directive. Example: `<div *ngSwitchCase="'1'">This view will be rendered if value is 1</div>`
- **ngSwitchDefault**: Specifies a view to be rendered by the ngSwitch directive if no other cases match. Example: `<div *ngSwitchDefault>This view will be rendered if value is anything else</div>`
- **ngTemplateOutlet**: Inserts the content of a template into the current view. Example:

  ```tsx
  @Component({
    selector: 'my-app',
    template: `      
  <ng-template #estimateTemplate let-lessonsCounter="estimate">
      <div> Approximately {{lessonsCounter}} lessons ...</div>
  </ng-template>
  <ng-container 
    *ngTemplateOutlet="estimateTemplate;context:ctx">
  </ng-container>
  `})
  export class AppComponent {

      totalEstimate = 10;
      ctx = {estimate: this.totalEstimate};
    
  }
  ```
  or
  ```tsx
<div *ngTemplateOutlet="template; context: { item: item }; host: { 'id': 'my-id', 'style': 'color: red' }"></div>
  ```
  This will create a div with the id my-id and the style color: red as the host element.
- **ngContent**: Inserts the content of a child element into the current view. Example: `<div *ngFor="let item of items"> <div [ngContent]="item"></div> </div>`

</details>


<details>
<summary><h5>Standalone Directives (Directive Composition)</h5></summary>

Standalone directives are directives that ***do not need to be declared in an NgModule*** and do not depend on any intermediate context of an NgModule. You can use `hostDirectives` to ***compose multiple behaviors on a host element*** without duplicating them in the template.

```tsx
@Component({
  selector: 'admin-menu',
  template: `
    <admin-menu id="top-menu" (closed)="logMenuClosed()">
  `,
  hostDirectives: [{
    directive: MenuBehavior,
    inputs: ['menuId: id'],
    outputs: ['menuClosed: closed'],
  }],
})
export class AdminMenu { }
```

Here's the directive

```tsx
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[menuBehavior]',
  standalone: true // this is required for hostDirectives
})
export class MenuBehavior {
  @Input() menuId: string; // this will be aliased as id on the host element
  @Output() menuClosed = new EventEmitter<void>(); // this will be aliased as closed on the host element

  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  onClick() {
    // toggle the menu visibility
    this.elementRef.nativeElement.classList.toggle('open');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // close the menu if clicked outside
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.elementRef.nativeElement.classList.remove('open');
      this.menuClosed.emit(); // emit the menuClosed event
    }
  }
}

```
</details>
