<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/custom-element.png) -->

<details open>
<summary><h5>Angular Custom Element</h5></summary>

Custom Element Transform an Angular component into a web component => It allows you to use Angular component as a nomal DOM.

![custom element](/img/interviews/angular/custom-element.png)

```tsx
// Import the necessary modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// Define the component to be packaged as a custom element
@Component({
  selector: 'hello-world',
  template: `<h1>Hello {{name}}!</h1>`
})
export class HelloWorldComponent {
  @Input() name: string;
}

// Declare the module that contains the component
@NgModule({
  declarations: [HelloWorldComponent],
  imports: [BrowserModule],
  entryComponents: [HelloWorldComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  // Register the custom element with the browser
  ngDoBootstrap() {
    const el = createCustomElement(HelloWorldComponent, {injector: this.injector});
    customElements.define('hello-world', el); // `customElements.define` is a built-in function
  }
}

```

Now, you can use the component in HTML as if it's a HTML element

```html
<html>
<head>
  <title>Using Angular Custom Element</title>
</head>
<body>
  <h1>Using Angular Custom Element</h1>
  <hello-world name="Angular"></hello-world>
  <script>
    const hW = document.querySelector('hello-world');
    hW.addEventListener('action', function() {
      // ...
    })
  </script>
</body>
</html>
```

</details>

