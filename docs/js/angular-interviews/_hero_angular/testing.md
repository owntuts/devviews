<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/custom-element.png) -->

<details>
<summary><h5>Testing Component with Async Service</h5></summary>

<details>
<summary>Component with Async Service</summary>

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    // This is an asynchronous call
    this.http.get('https://api.chucknorris.io/jokes/random')
      .subscribe(
        (data: any) => {
          this.quote = data.value;
        },
        (error: any) => {
          this.errorMessage = error;
        }
      );
  }

  quote: string;
  errorMessage: string;
}
```
</details>

The test for this component would look something like this:

```typescript
import { async, flush } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  }));

  it('should show the quote after the async call', async(() => {
    // Wait for the async call to complete
    await fixture.whenStable();

    expect(component.quote).toBeDefined();
  }));
});
```

This test uses the `async` and `whenStable` functions to wait for the async call to complete before asserting that the `quote` property is defined.

Here is a breakdown of what the test is doing:

* The `beforeEach` function configures the testing module and compiles the components.
* The `it` function defines the test.
* The `async` function tells Angular to treat the test as an asynchronous function.
* The `fixture.whenStable()` function waits for all asynchronous tasks to complete.
* The `expect(component.quote).toBeDefined()` assertion checks that the `quote` property is defined.

</details>

<details>
<summary><h5>Testing with Spy</h5></summary>

<details>
<summary>Component with Async Service</summary>

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    // This is an asynchronous call
    this.http.get('https://api.chucknorris.io/jokes/random')
      .subscribe(
        (data: any) => {
          this.quote = data.value;
        },
        (error: any) => {
          this.errorMessage = error;
        }
      );
  }

  quote: string;
  errorMessage: string;
}
```
</details>

The test for this component would look something like this:

```typescript
import { async, flush, spyOn } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;

    spy = spyOn(component.http, 'get');
  }));

  it('should call the getQuote() method', async(() => {
    // The spy will be called when the getQuote() method is called
    expect(spy).toHaveBeenCalled();
  }));

  it('should return a quote from the API', async(() => {
    // The spy will return a mocked quote
    spy.and.returnValue({
      value: 'This is a Chuck Norris quote'
    });

    await fixture.whenStable();

    expect(component.quote).toEqual('This is a Chuck Norris quote');
  }));
});
```

This test uses a spy to check that the `getQuote()` method is called and that it returns a quote from the API.

Here is a breakdown of what the test is doing:

* The `beforeEach` function configures the testing module and compiles the components.
* The `it` function defines the test.
* The `spyOn` function creates a spy on the `get` method of the `http` service.
* The `and.returnValue` function tells the spy to return a mocked quote.
* The `await fixture.whenStable()` function waits for all asynchronous tasks to complete.
* The `expect(component.quote).toEqual('This is a Chuck Norris quote')` assertion checks that the `quote` property is equal to the mocked quote.

</details>


<details>
<summary>Async test with fakeAsync()</summary>

```tsx
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { fakeAsync, tick } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MyComponent]
    });
    fixture = await TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should load data asynchronously', fakeAsync(() => {
    // Simulate loading data asynchronously.
    setTimeout(() => {
      component.dataLoaded = true;
    }, 1000);

    // Wait for the data to load.
    tick(1000);

    // Assert that the data is loaded.
    expect(component.dataLoaded).toBeTruthy();
  }));
});
```

This test uses the `fakeAsync()` function to wrap the test body in a special zone that allows us to control the execution of asynchronous code. The `tick()` function is used to advance the virtual clock by a set amount of time. In this case, we are using `tick()` to wait for the data to load before asserting that it is loaded.

</details>

<details>
<summary>Async test with fakeAsync()</summary>

```tsx
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { fakeAsync, tick } from '@angular/core/testing';
import { jasmine } from '@jasmine/core';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MyComponent]
    });
    fixture = await TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should load data asynchronously', fakeAsync(() => {
    // Simulate loading data asynchronously.
    const clock = jasmine.clock();
    clock.tick(1000);
    component.dataLoaded = true;

    // Assert that the data is loaded.
    expect(component.dataLoaded).toBeTruthy();
  }));
});
```

This test uses the `jasmine.clock()` function to create a virtual clock that can be used to control the execution of asynchronous code. The `tick()` function is used to advance the virtual clock by a set amount of time. In this case, we are using `tick()` to simulate the passage of 1000 milliseconds before asserting that the data is loaded.

The `fakeAsync()` function is used to wrap the test body in a special zone that allows us to control the execution of asynchronous code. This is necessary because `jasmine.clock()` only works in a zone that allows for asynchronous control flow.

</details>

<details>
<summary>Testing with mock</summary>

* **Mocking a service:** You can mock a service by using the `MockProvider` function. This function creates a mock object that implements the interface of the real service. You can then use the mock object to control the behavior of the service in your tests.

```tsx
import { MockProvider } from '@angular/core/testing';
import { MyService } from './my.service';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MyComponent]
    });
    const mockService = MockProvider(MyService);
    fixture = await TestBed.createComponent(MyComponent, {
      providers: [mockService]
    });
    component = fixture.componentInstance;
  });

  it('should call the service', () => {
    // Expect the service to be called.
    spyOn(mockService).getSomething();

    // Trigger the service call.
    component.something();

    // Assert that the service was called.
    expect(mockService.getSomething).toHaveBeenCalled();
  });
});
```

* **Mocking a component:** You can mock a component by using the `MockComponent` function. This function creates a mock object that implements the interface of the real component. You can then use the mock object to control the behavior of the component in your tests.

```tsx
import { MockComponent } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MyComponent]
    });
    const mockComponent = MockComponent(MyComponent);
    fixture = await TestBed.createComponent(mockComponent);
    component = fixture.componentInstance;
  });

  it('should call the component', () => {
    // Expect the component to be called.
    spyOn(mockComponent).doSomething();

    // Trigger the component call.
    component.doSomething();

    // Assert that the component was called.
    expect(mockComponent.doSomething).toHaveBeenCalled();
  });
});
```

</details>

<details>
<summary>Testing with Stub</summary>

Let's say you have a component that depends on a service that makes an HTTP request to get some data from an API. You want to test the component's logic without actually making the HTTP request, so you use a stub to mock the service and return some fake data. Here is how you can do it:

- First, you need to import the necessary modules and classes for your test. You also need to create a stub object that implements the same interface as your service, and define the methods and properties that you want to mock. For example:

```typescript
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MyComponent } from './my-component.component';
import { MyService } from './my-service.service';

// Create a stub object that implements MyService interface
const myServiceStub = {
  getData: jasmine.createSpy('getData').and.returnValue({ name: 'John', age: 25 }),
  // Add any other methods or properties that you want to mock
};
```

- Next, you need to configure the testing module and provide the stub object as a replacement for the real service. You also need to create a component instance and a fixture for your test. For example:

```typescript
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MyComponent],
      providers: [
        // Use the stub object instead of the real service
        { provide: MyService, useValue: myServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Add your test cases here
});
```

- Finally, you can write your test cases and use the stub object to verify the component's behavior. For example, you can check if the component calls the service's getData method, or if it displays the data correctly in the template. For example:

```typescript
it('should call getData method of MyService', () => {
  // Call the component's method that depends on the service
  component.fetchData();
  // Check if the service's getData method was called
  expect(myServiceStub.getData).toHaveBeenCalled();
});

it('should display data in the template', () => {
  // Call the component's method that depends on the service
  component.fetchData();
  // Trigger a change detection cycle
  fixture.detectChanges();
  // Get the element that displays the data
  const dataElement = fixture.nativeElement.querySelector('.data');
  // Check if the element contains the expected data
  expect(dataElement.textContent).toContain('John');
  expect(dataElement.textContent).toContain('25');
});
```

</details>
