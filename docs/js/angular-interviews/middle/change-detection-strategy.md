---
sidebar_position: 1000
sidebar_label: Change Detection Strategy
title: Change Detection Strategy in Angular
slug: /change-detection-strategy
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is **Change Detection Strategy** in Angular? `ChangeDetectionStrategy.Default` vs `ChangeDetectionStrategy.OnPush`?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Change detection** means updating the DOM whenever there's something cause data changed in Angular. Such as: ***DOM events (click, hover,...)***, ***AJAX requests***, ***Timers (setTimers, setInterval)***,...
  Angular runs the change detection by starting from the top and continuing until it reaches the bottom.

  ![Angular change detection](/img/interviews/angular/change-detection.png)

  There's two types of **change detection**:

### 1. `ChangeDetectionStrategy.Default` (dirty checking): 
  Angular has to be conservative and will checks every time something may have changed:

  - **Triggers (What will trigger the change detection in Default Strategy)**: Angular will perform checks for each **browser events**, **timers**, **XHRs** and **promises** and **the triggers of OnPush** (see below).
  - **Update Decision**: Default strategy will updates the DOM based on value changes.


  ### Example

  ```ts {3} title="fullname.component.ts"
  @Component({
    selector: 'fullname',
    changeDetection: ChangeDetectionStrategy.Default, // by default no need to add this line
    template: `
      <p>Hello {{person.firstName}} {{person.lastName}}</p>
    `
  })
  export class FullName {
    @Input() person;
  }
  ```

  ```ts {17,19} title="app.component.ts"
  @Component({
    selector: 'app',
    template: `
      <button (click)='onChange("Loe")'>Change Name<button>
      <fullname [person]='p' />
    `
  })
  export class AppComponent implememnts OnInit {
    p: any;
    ngOnInit() {
      this.p = {
        firstName: 'John',
        lastname: 'Doe'
      }
    }

    // `onClick` will trigger the change detection.
    onChange(newName: string) {
      // changing value of object will update the view
      this.p.lastname = newName;
    }
  }
  ```

### `ChangeDetectionStrategy.OnPush`: 

  - **Triggers (What will trigger the change detection in OnPush Strategy)**: only depend on the ***component’s inputs***, ***events***, ***markForCheck method***, or the use of the ***async pipe*** in the template, to perform a change detection mechanism and update the view.
  - **Update Decision**: `OnPush` strategy will updates the view based on reference not value: 

  ### Example
  As the example above

  - `onClick` will trigger the change detection.
  - Changing value of object (`this.p.lastname = newName`) will not update the view.
  - But change the object reference: `this.p = {/*another object*/}` -> run change detection & update the view.

</details>