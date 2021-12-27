---
sidebar_position: 1000
sidebar_label: Angular Pipe
title: What is Pipe In Angular & Example?
slug: /pipe-angular-example
tags:
  - Middle Angular Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What is **Pipe** In Angular? Can you give me an example?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

  **pipe** is used to transform this data to other data before render.

  ### Example

  ```ts {4,5} title="my-pipe.pipe.ts"
  @Component({
    template: `
      <div>
        <div> {{ myData | myPipe:firstArg:secondArg }} </div>
        <div [innerHTML]="myData | myPipe:firstArg:secondArg"></div>
      </div>
    `
  })
  export class MyComponent {
    myData: any = "some data";
  }
  ```

  ```ts {5} title="my-pipe.pipe.ts"
  @Pipe({
    name: 'myPipe'
  })
  export class MyPipe implements PipeTransform {
    transform(data: any, firstArg: string, secondArg: string) {
      if(firstArg && secondArg) {
        // transform data to something
      }
    }

  }
  ```

</details>