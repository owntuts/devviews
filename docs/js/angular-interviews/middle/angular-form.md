---
sidebar_position: 1000
sidebar_label: Angular Form
title: Template-driven Form vs Reactive Forms In Angular?
slug: /template-driven-vs-reactive-forms-angular
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Could you please tell the difference between **Template-driven** vs **Reactive Forms** In Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

  | Template-driven Form	                          | Reactive Form                       |
  |-------------------------------------------------|-------------------------------------|
  | Handle form in template first                 	| Handle form in typescript first     |
  | contact with JS via ref	                        | contact with JS via Input           |
  | make use of the "FormsModule"	                  | based on "ReactiveFormsModule"      |
  | asynchronous in nature	                        | mostly synchronous                  |
  | `ng generate component template-forms`          | `ng generate component reactive-forms`|

### Example of Template-driven Form
**Template-driven** means focusing on ***template first***. Denote the form as `#f`, denote input as `id="courseName"` & `[ngModel]` and let Javascript reference to interact with them later.

```ts {3,4}
@Component({
  template: `
  <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <input type="text" id="courseName" name="courseName" [ngModel]="'default course name'">
      <p *ngIf="courseName.errors.required">
          Course Name is required
      </p>
  </form>
  `
})
export class TemplateFormComponent {
    // reference to the form #f in template
    @ViewChild('f') courseForm: NgForm;
    onSubmit(form: NgForm) {
        console.log("Course Name is : " + form.value.courseName); 
    }
    onClear() {
        // interact with the referenced form
        this.courseForm.reset();
    }
}
```

### Example of Reactive Form
**Reactive** means focusing on Javascript first. Denote form as a variable `this.courseForm` and then, let form reference to it by using input`[formGroup]="courseForm"`.

```ts {13}
@Component({
  template: `
    <form [formGroup]="courseForm" (ngSubmit)="onSubmit()">
        <input type="text" id="courseName" class="form-control" formControlName="courseName">
        <div *ngIf="courseForm.get('courseName').valid && courseForm.get('courseName').touched">
            Please enter valid course name !
        </div>
    </form>
  `
})
export class ReactiveFormComponent {
  ngOnInit() {
    this.courseForm = new FormGroup({
      'courseName': new FormControl(null, Validators.required),
    });
  }
}
```
</details>