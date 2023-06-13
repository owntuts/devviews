<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Cold vs Hot Observables in RxJS</h5></summary>

| Cold observables | Hot observables |
| ---------------- | --------------- |
| Create a new data producer for each subscriber | Share the same data producer among multiple subscribers |
| Data producer is created inside the observable | Data producer is created outside the observable |
| Start to emit values only when someone subscribes | Emit values regardless of subscriptions |
| Unicast: each subscriber gets its own stream of data | Multicast: each subscriber gets the same stream of data |
| Examples: HTTP requests, timers | Examples: mouse clicks, keyboard events |

To illustrate the difference, imagine a ***cold observable as a YouTube video*** and a ***hot observable as a live stream***. When you watch a YouTube video, you can start, pause, rewind or fast-forward it at your own pace. You have your own copy of the video. When you watch a live stream, you can only see what is happening at the moment. You share the same stream with other viewers.

There are operators in RxJS that can ***convert cold observables into hot observables***, such as `publish()`, `share()`, `shareReplay()` and others. These operators use **subjects** under the hood, which are special types of observables that can act as both observers and observables. Subjects can multicast values to multiple subscribers by relaying them from a source observable.

#### Here is an example of a cold observable in RxJS:

```javascript
// A cold observable that emits a random number when subscribed
const cold$ = new rxjs.Observable(subscriber => {
  subscriber.next(Math.random());
  subscriber.complete();
});

// Two subscribers will get different values
cold$.subscribe(value => console.log('Subscriber A:', value));
cold$.subscribe(value => console.log('Subscriber B:', value));
```

Output:

```
Subscriber A: 0.123456789
Subscriber B: 0.987654321
```

#### Here is an example of a hot observable in RxJS:

```javascript
// A hot observable that emits mouse clicks
const hot$ = rxjs.fromEvent(document, 'click');

// Two subscribers will get the same values
hot$.subscribe(event => console.log('Subscriber A:', event.clientX, event.clientY));
hot$.subscribe(event => console.log('Subscriber B:', event.clientX, event.clientY));
```

Output (after clicking on the document):

```
Subscriber A: 100 200
Subscriber B: 100 200
```
</details>

<details>
<summary><h5>Multicasting in RxJS</h5></summary>

An observable is ***unicast*** by default, which means each observer has its own instance of the data producer and receives a unique set of values. 

**Multicasting** in RxJS is the ***process of sharing a single subscription to an Observable with multiple subscribers***. This can be useful for scenarios where you want to ensure that all subscribers receive the same data, such as when you are ***broadcasting a live event or streaming data from a server***.

There are two main ways to multicast in RxJS:

* **Using a Subject:** A Subject is an Observable that can emit values and also subscribe to other Observables. This makes it a natural choice for multicasting, as it can act as a central hub for data distribution.
    ```js
    const subject = new Subject(); // create a subject

    // subscribe two observers to the subject
    subject.subscribe(val => console.log(`Observer 1: ${val}`));
    subject.subscribe(val => console.log(`Observer 2: ${val}`));

    // emit values to the observers using next
    subject.next('Hello');
    subject.next('World');

    ```
* **Using ConnectableObservable:** 
    - A **ConnectableObservable** is a type of **hot observable** so that it can have multiple subscribers sharing the same subscription
    - It ***can be connected and disconnected*** from its source by calling the **connect** and **disconnect** methods. 
    - A **ConnectableObservable** ***does not start emitting values until it is connected***. 

    ```js
    // import { interval, Subject } from 'rxjs';
    // import { multicast } from 'rxjs/operators';

    const source = interval(1000); // a cold observable that emits a value every second
    const subject = new Subject(); // a subject that will multicast the values to the observers
    const multicasted = source.pipe(multicast(subject)); // a connectable observable that uses the subject to share the subscription

    // subscribe to the connectable observable with two observers
    const subscription1 = multicasted.subscribe(val => console.log(`Observer 1: ${val}`));
    const subscription2 = multicasted.subscribe(val => console.log(`Observer 2: ${val}`));

    // connect the connectable observable to the source observable
    const connection = multicasted.connect();

    // after 5 seconds, unsubscribe both observers and disconnect the connection
    setTimeout(() => {
        subscription1.unsubscribe();
        subscription2.unsubscribe();
        connection.unsubscribe();
    }, 5000);

    ```
* **Using ConnectableObservable with refCount():** is to simplify the process of managing the subscription to a **ConnectableObservable**.
- The **refCount** operator ***tracks the number of subscribers*** to a **ConnectableObservable** 
- Automatically ***connects it when the first subscriber subscribes and disconnects it when the last subscriber unsubscribes***.

    ```js
    // import { interval, Subject } from 'rxjs';
    // import { multicast, refCount } from 'rxjs/operators';

    const source = interval(1000); // a cold observable that emits a value every second
    const multicasted = source.pipe(share()); // a hot observable that shares the subscription to the source
    // * Equivalent to share() operator
    // const subject = new Subject();
    // const multicasted = source.pipe(multicast(subject), refCount());

    // subscribe to the multicasted observable with two observers
    const subscription1 = multicasted.subscribe(val => console.log(`Observer 1: ${val}`));
    const subscription2 = multicasted.subscribe(val => console.log(`Observer 2: ${val}`));

    // after 5 seconds, unsubscribe both observers
    setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    }, 5000);
    ```

</details>

<details>
<summary><h5>connectable vs multicast operator</h5></summary>

The difference between the **connectable** function and the **multicast** operator is that the **connectable** function returns a **ConnectableObservable** directly, whereas the **multicast** operator returns an operator function that can be used with the `pipe` method to create a **ConnectableObservable**. For example:

```javascript
// import { interval } from 'rxjs';
// import { connectable, multicast } from 'rxjs';

const source = interval(1000); // a cold observable that emits a value every second

// using connectable function
const multicasted1 = connectable(source, () => new Subject()); // a connectable observable that uses a Subject internally to share the subscription
const subscription1 = multicasted1.subscribe(val => console.log(`Observer 1: ${val}`));

// using multicast operator
const multicasted2 = source.pipe(multicast(() => new Subject())); // another connectable observable that does the same thing

// using pipe method on multicasted2 observable
const transformed = multicasted2.pipe(
  map(val => val * 2), // double the values
  filter(val => val % 4 === 0) // keep only the values divisible by 4
);
const subscription2 = transformed.subscribe(val => console.log(`Observer 2: ${val}`));
const subscription3 = multicasted2.subscribe(val => console.log(`Observer 3: ${val}`));

const connection1 = multicasted1.connect();
const connection2 = multicasted2.connect();

```
</details>


<details>
<summary><h5>Alternative for publish operator</h5></summary>

- The **`publish` operator** is deprecated in RxJS 7 and will be removed in RxJS 8. The publish operator ***converts a cold observable into a `ConnectableObservable`***. To replace the `publish` operator, you can use the `connectable` function or the `share` operator instead.

    ```js
    // use connectable
    const multicasted = connectable(source, () => new Subject());
    // or share operator which is a shortcut for using the publish and refCount operators together
    const multicasted = source.pipe(share());
    ```

-  **The `publishLast` operator** converts a cold observable into a `ConnectableObservable` that emits only the last value emitted by the source observable when it completes.

    Example of replacing `publishLast`

    ```js
    // a connectable observable that uses an AsyncSubject internally to emit only the last value
    const multicasted = connectable(source, () => new AsyncSubject());
    ```

- **The `publishReplay` operator** converts a cold observable into a ConnectableObservable that emits the values emitted by the source observable within a specified window or buffer size when it is connected.

    Example of replacing `publishReplay`

    ```js
    // a connectable observable that uses a ReplaySubject internally to emit the last two values
    const multicasted = connectable(source, () => new ReplaySubject(2)); 

    // or a hot observable that shares the subscription to the source and emits the last two values
    const multicasted = source.pipe(share({ connector: () => new ReplaySubject(2), resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false }));
    ```

- **The `publishBehavior` operator** converts a cold observable into a ConnectableObservable that ***emits the initial value*** specified by the operator and then the values emitted by the source observable when it is connected.

    Example of replacing `publishBehavior`

    ```js
    // A connectable observable that uses a BehaviorSubject internally to emit 0 and then the values from the source
    const multicasted = connectable(source, () => new BehaviorSubject(0)); 
    
    // Or a hot observable that shares the subscription to the source and emits 0 and then the values from the source
    const multicasted = source.pipe(share({ connector: () => new BehaviorSubject(0), resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false })); 
    ```

</details>
