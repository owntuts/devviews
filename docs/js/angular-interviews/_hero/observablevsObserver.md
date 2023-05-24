<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Observer, Observable, subject, Subscriber</h5></summary>

Imagine you are a **Subscriber** to a newspaper. The newspaper is an **Observable**, which produces news articles every day. You are also an **Observer**, which means you can read the articles and react to them. You can also unsubscribe from the newspaper if you don't want to receive it anymore.

Now imagine there is a **Subject** that acts like a news aggregator. It can subscribe to multiple newspapers (Observables) and collect their articles. It can also publish its own articles based on the aggregated news. You can subscribe to the Subject and receive all the articles from the newspapers and the Subject itself. You are still an Observer, but now you have more sources of information. The Subject is also an Observer, because it can react to the articles from the newspapers. The Subject is also an Observable, because it can produce its own articles.

#### To summarize:

- An **Observable** is like a newspaper that produces values over time.
- An **Observer** is like a reader that consumes values and reacts to them.
- A **Subject** is like a news aggregator that can consume values from multiple Observables and produce its own values.
- A **Subscriber** is like a subscription that connects an Observer to an Observable.

#### Example

```js
// Import RxJS library
const Rx = require('rxjs');

// Create two Observables that produce news articles
const newspaper1 = Rx.Observable.of('Article 1 from newspaper 1', 'Article 2 from newspaper 1', 'Article 3 from newspaper 1');
const newspaper2 = Rx.Observable.of('Article 1 from newspaper 2', 'Article 2 from newspaper 2', 'Article 3 from newspaper 2');

// Create a Subject that acts as a news aggregator
const subject = new Rx.Subject();

// Subscribe the Subject to the two Observables
newspaper1.subscribe(subject);
newspaper2.subscribe(subject);

// Publish an article from the Subject itself
subject.next('Article from subject');

// Create an Observer that acts as a reader
const reader = {
  next: article => console.log('Reader received: ' + article),
  error: err => console.error('Reader got an error: ' + err),
  complete: () => console.log('Reader got a complete notification')
};

// Create a Subscriber that connects the Observer to the Subject
const subscriber = subject.subscribe(reader);

// Output:
// Reader received: Article 1 from newspaper 1
// Reader received: Article 1 from newspaper 2
// Reader received: Article 2 from newspaper 1
// Reader received: Article 2 from newspaper 2
// Reader received: Article 3 from newspaper 1
// Reader received: Article 3 from newspaper 2
// Reader received: Article from subject

```

</details>

<details>
<summary><h5>RxJS Observables vs Promises</h5></summary>

- **Promises are like a delivery truck**. You order something online, and the delivery truck shows up at your door with your order. The delivery truck only comes once, and it only delivers one thing.
- **Observables are like a stream of water**. You turn on the faucet, and water starts flowing out. The water keeps flowing until you turn off the faucet. You can collect the water in a bucket, or you can use it to water your plants.

| Observables | Promises |
| ----------- | -------- |
| A stream of events that can be processed with operators | A single event that happens when an async operation completes or fails |
| Can be either synchronous or asynchronous | Always asynchronous |
| Can provide zero or more values | Can provide a single value |
| Only start when subscribed to | Start immediately when created |
| Can be cancelled by unsubscribing | Cannot be cancelled |

</details>

<details>
<summary><h5>Subject vs BehaviorSubject</h5></summary>

An event ***stream of birthdays*** is a `Subject`, because it does not have an initial value and does not emit anything until a birthday occurs. 

The ***stream of a person's age (current value)*** would be a `BehaviorSubject`, because it always has an initial value (the person's age) and emits the current value to new subscribers.

```javascript
// Create a Subject that represents an event stream of birthdays
birthday$ = new Subject<Date>();

// Subscribe to the birthday stream and log the dates
birthday$.subscribe(date => console.log(date));

// Output: nothing

// A birthday occurs
birthday$.next(new Date(2023, 5, 8));

// Output: 2023-06-08

// Another birthday occurs
birthday$.next(new Date(2024, 5, 8));

// Output: 2024-06-08

// Create a BehaviorSubject that represents the stream of a person's age
age$ = new BehaviorSubject<number>(25);

// Subscribe to the age stream and log the numbers
age$.subscribe(age => console.log(age));

// Output: 25

// The person's age changes
age$.next(26);

// Output: 26

// The person's age changes again
age$.next(27);

// Output: 27
```

You can see that the Subject does not emit anything until `next()` is called, and then emits the value to the subscriber. The BehaviorSubject emits the initial value to the subscriber, and then emits the updated value when `next()` is called.

</details>

<details>
<summary><h5>ReplaySubject</h5></summary>

A **ReplaySubject** is a type of **Subject** that ***replays old values to new subscribers when they first subscribe***. The `ReplaySubject` will store every value it emits in a buffer and emit them to the new subscribers in the order it received them. You can configure the buffer using the arguments `bufferSize` and `windowTime`.

For example, let's say you have a service that keeps track of the user's actions. You can use a ReplaySubject to store the last 5 actions and emit them to any component that subscribes to it. You can also update the actions by calling `next()` on the ReplaySubject.

Here is some pseudocode to illustrate this:

```javascript
// Create a ReplaySubject with a buffer size of 5
actions$ = new ReplaySubject<string>(5);

// Emit some actions
actions$.next("click");
actions$.next("scroll");
actions$.next("hover");
actions$.next("drag");
actions$.next("drop");

// Subscribe to the actions and log them
actions$.subscribe(action => console.log(action));

// Output: click, scroll, hover, drag, drop

// Emit another action
actions$.next("zoom");

// Subscribe to the actions and log them
actions$.subscribe(action => console.log(action));

// Output: scroll, hover, drag, drop, zoom
```

You can see that the ReplaySubject emits all the values in the buffer to the first subscriber, and then emits only the last 5 values to the second subscriber.

</details>

<details>
<summary><h5>AsyncSubject</h5></summary>

An **AsyncSubject** is a type of **Subject** that only emits the last value of the observable execution and only when the execution completes. It is ***useful when you only want the final result*** of an asynchronous operation.

For example, let's say you have a service that performs a calculation. You can use an AsyncSubject to store the result of the calculation and emit it to any component that subscribes to it when the calculation is done. You can also update the result by calling `next()` on the AsyncSubject.

Here is some pseudocode to illustrate this:

```javascript
// Create an AsyncSubject
result$ = new AsyncSubject<number>();

// Subscribe to the result and log it
result$.subscribe(result => console.log(result));

// Output: nothing

// Update the result
result$.next(10);

// Output: nothing

// Update the result again
result$.next(20);

// Output: nothing

// Complete the calculation
result$.complete();

// Output: 20
```

You can see that the AsyncSubject does not emit anything until `complete()` is called, and then emits only the last value to the subscriber.

</details>

<details>
<summary><h5>Cold vs Hot Observables in RxJS</h5></summary>

| Cold observables | Hot observables |
| ---------------- | --------------- |
| Create a new data producer for each subscriber | Share the same data producer among multiple subscribers |
| Data producer is created inside the observable | Data producer is created outside the observable |
| Start to emit values only when someone subscribes | Emit values regardless of subscriptions |
| Unicast: each subscriber gets its own stream of data | Multicast: each subscriber gets the same stream of data |
| Examples: HTTP requests, timers | Examples: mouse clicks, keyboard events |

To illustrate the difference, imagine a ***cold observable as a YouTube video*** and a ***hot observable as a live stream***. When you watch a YouTube video, you can start, pause, rewind or fast-forward it at your own pace. You have your own copy of the video. When you watch a live stream, you can only see what is happening at the moment. You share the same stream with other viewers.

There are operators in RxJS that can convert cold observables into hot observables, such as `publish()`, `share()`, `shareReplay()` and others. These operators use **subjects** under the hood, which are special types of observables that can act as both observers and observables. Subjects can multicast values to multiple subscribers by relaying them from a source observable.

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

