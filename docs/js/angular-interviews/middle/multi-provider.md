---
sidebar_position: 1000
sidebar_label: Multi Provider
title: What Is Multi Provider In Angular?
slug: /multi-provider-angular
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Could you please explain what Is **Multi Provider** In Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  **Multiple Provider** is Angular provider that allows you to provide ***multiple values*** for a ***single token*** in DI. And Angular will call each of them (in the sequence they were provided) and waits for the returned Promise.

### Let's Look At This Example for More Details

In the example below, app module provide with multiple values `new FirstThing()` and `new SecondThing()` in a single token `THING`.

```ts {5,10} title="app.module.ts"
@NgModule({
  declarations: [AppComponent],
  providers: [{
      provide: THING,
      useValue: new FirstThing(),
      multi: true,
    },
    {
      provide: THING,
      useValue: new SecondThing(),
      multi: true,
    }]
})

```

Then, we can inject the provider `THING` in component and Angular will resolve it as an array.

```ts {3} title="app.component.ts"
export class AppComponent {
  constructor(
    @Inject(THING) things: Array<Thing>
  ) {
    console.log(things.map(t => t.someValue));
  }
}
```

</details>