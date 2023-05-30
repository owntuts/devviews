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


<details>
<summary><h5>Effect</h5></summary>
**Example of an effect:**

```tsx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Effects } from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class MyEffect {

  constructor(private http: HttpClient, private effects: Effects) {}

  @Effect({
    dispatch: ['fetchData']
  })
  fetchData() {
    this.effects.run(() => {
      this.http.get('https://example.com').subscribe((data) => {
        console.log(data);
      });
    });
  }

}
```

In this example, we create an effect called `MyEffect` that uses the `HttpClient` service to make an HTTP request to `https://example.com`. The `fetchData()` method of `MyEffect` is called when the effect is dispatched.

**Example of using an effect in a component:**

```tsx
import { Component } from '@angular/core';
import { MyEffect } from './my-effect';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myEffect: MyEffect) {}

  ngOnInit() {
    this.myEffect.fetchData();
  }

}
```

In this example, we create a component called `AppComponent` that uses the `MyEffect` effect to make an HTTP request to `https://example.com`. The `ngOnInit()` method of `AppComponent` will call the `fetchData()` method of `MyEffect` when the component is initialized.

</details>
