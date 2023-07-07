<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Angular Signals</h5></summary>

Angular Signals are a new feature in Angular 16 that provides ***a way to notify interested consumers when a value changes***. Signals can be used to improve the performance of Angular applications by ***reducing the number of change detection runs***.

```tsx
import { Component, OnInit } from '@angular/core';
import { Signal } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private signal: Signal<string>) {}

  ngOnInit() {
    this.signal.subscribe((value) => {
      console.log(value);
    });

    this.signal.value = 'Hello, world!';
  }

}

```
</details>

<details>
<summary><h5>Types of of signals</h5></summary>

**Writable signal:**

Writable signals are ***signals that can be changed*** by consumers. When a writable signal is changed, all of its consumers will be notified of the change.

```tsx
import { Signal } from '@angular/common';

const mySignal = new Signal<string>();

mySignal.value = 'Hello, world!';

mySignal.subscribe((value) => {
  console.log(value);
});
```

In this example, we create a writable signal called `mySignal` and set its initial value to `'Hello, world!'`. We then subscribe to the signal and print the value of the signal to the console when it changes.

**Computed signal:**

Computed signals are signals that ***are derived from other signals***. When one of the signals that a computed signal is derived from changes, the computed signal will be automatically updated.

```tsx
import { Signal } from '@angular/common';

const mySignal1 = new Signal<string>();
const mySignal2 = new Signal<string>();

const myComputedSignal = computed(() => {
  return mySignal1.value + mySignal2.value;
});

mySignal1.value = 'Hello';
mySignal2.value = 'World!';

console.log(myComputedSignal.value); // HelloWorld!
```

In this example, we create two writable signals called `mySignal1` and `mySignal2`. We then create a computed signal called `myComputedSignal` that is derived from the values of `mySignal1` and `mySignal2`. When the values of `mySignal1` and `mySignal2` change, the value of `myComputedSignal` will be automatically updated.

</details>
