<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Typed Forms</h5></summary>

Typed Forms are a new feature in Angular 14 that *** provide type safety to your Angular forms***. This can help you avoid errors and make your code easier to read and maintain.

```ts
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface FormModel {
  title: FormControl<string | null>;
  name: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
  }>;
  interest: FormArray<FormControl<string | null>>;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = this.fb.group<FormModel>({
    title: this.fb.control('This is title'),
    name: this.fb.group({
      firstName: this.fb.control('Will'),
      lastName: this.fb.control('Huang'),
    }),
    interest: this.fb.array([
      this.fb.control('HTML'),
      this.fb.control('Angular'),
    ]),
  });

  constructor(private fb: FormBuilder) {}
}

```

</details>

<details>
<summary><h5>FormRecord - Dynamic Form</h5></summary>

Some FormGroup usages do not fit the above pattern (`FormModel`) because ***the keys are not known ahead of time***. The `FormRecord` class is designed for that case. `FormRecord` is a class from the `@angular/forms` module that ***extends the `FormGroup`*** class and allows you to create a form group with dynamic keys and type-safe controls.

```tsx
export class AppComponent implements OnInit {

  public myForm: FormRecord;
  public formKeys = ['Andrew', 'Barry']

  ngOnInit(): void {
    this.myForm = new FormRecord<FormControl<string|null>>({});
    this.formKeys.forEach((key, i) => 
      this.myForm.addControl(key, new FormControl(`${(i + 1) * 100} Default-Value St.`))
    );

  }
```

```ts
<div>
  <form [formGroup]="myForm">
    <div *ngFor="let key of formKeys">
      <b>{{key}}: </b><input  [formControlName]="key"><br/>
    </div>
  </form>
</div>
<div>
<br/>
<div *ngFor="let key of formKeys">
  <div>{{key}}: {{myForm.get(key).value}}</div>
</div>
</div>
```

</details>
