---
sidebar_position: 1000
sidebar_label: JIT vs AOT
title: Differences Between ngOnChanges and ngDoCheck in Angular
slug: /differences-onchanges-docheck-angular
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What are Differences Between **ngOnChanges** and **ngDoCheck** in Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **ngOnChanges**: This will only get called if there has been ***a reference change*** in any of the ***@Inputs bindings***, regardless of the `ChangeDetectionStrategy` of the component.
  - **ngDoCheck**: This method will get called every single time ***change detection runs*** (such as, an event has fired in the app that may cause a change, but not necessarily is considered a change).

```ts
@Component({
  selector: 'a-comp'
  template: `<h2>The name is: {{person.name} }</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent {
  @Input() person;
  id;

  constructor (private cd: ChangeDetectorRef) { }

  // only get called when reference of the input `person` (which is an object) change.
  // If value of a property in object `person` change => ngOnChanges not get called
  ngOnChanges() {
    this.id = this.person.id;
  }
  // get called every time change detection runs (there's something that may cause a change)
  ngDoCheck() {
    if (this.id !== this.person.id) {
      this.cd.markForCheck();
    }
    
  }
```

</details>