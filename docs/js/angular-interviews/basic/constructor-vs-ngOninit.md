---
sidebar_position: 1000
sidebar_label: JIT vs AOT
title: Difference between Constructor and ngOnInit in Angular
slug: /difference-constructor-ngoninit-angular
tags:
  - Basic Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What are differences between **Constructor** and **ngOnInit** in Angular?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  - **constructor** is ***part of ES6 JavaScript*** class which is executed when the class is instantiated: `new MyClass(something)`. It can be used to ***inject dependencies*** (such as services) to be used later
  - **ngOnInit** is ***part of Angular lifecycle*** which called by Angular to indicate that Angular is done creating the component. It can be used to do something once after component ready.

```ts
class ExampleComponent implement OnInit{
  constructor(private _dataService: DataService) {
    // Called first time before the ngOnInit()
  }
  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges()
    this.dataService.getSomeData().suscribe(data => ...);
  }
}
```

</details>