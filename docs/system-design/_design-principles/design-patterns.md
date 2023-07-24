<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![MVC](/img/interviews/design-system/MVC.webp) -->

<details open>
  <summary><h5>Software Architecture Design Patterns</h5></summary>

Software architecture design patterns are reusable solutions to common problems that arise when designing software systems. They help developers and architects to create applications that are scalable, reliable, maintainable, and testable.

There are many different types of software architecture design patterns, each with its own advantages and disadvantages. Some of the most popular and widely used design patterns are:

- **Layered pattern**: This pattern divides the application into layers of functionality, such as presentation, business logic, and data access. Each layer can only communicate with the layer below it, creating a clear separation of concerns. This pattern is suitable for most business applications, but it can also introduce performance and complexity issues.
- **Client-server pattern**: This pattern consists of two parties: a client that requests a service or resource, and a server that provides the service or resource. The client and the server can be on different machines or processes, allowing for distributed and scalable systems. This pattern is commonly used for web applications, but it can also create network and security challenges.
- **Master-slave pattern**: This pattern involves a master component that controls one or more slave components that perform the same or similar tasks. The master can delegate work to the slaves, synchronize their results, or provide fault tolerance. This pattern is useful for parallel processing, load balancing, and replication, but it can also introduce communication and coordination overhead.
- **Pipe-filter pattern**: This pattern organizes the application into a series of processing steps (filters) that are connected by data streams (pipes). Each filter performs a specific transformation on the data and passes it to the next filter. This pattern is suitable for data processing applications, but it can also cause performance and scalability issues.
- **Broker pattern**: This pattern involves a broker component that mediates the communication between clients and servers. The broker can locate the servers, route the requests, translate the messages, or provide security. This pattern is useful for distributed and heterogeneous systems, but it can also introduce a single point of failure and performance bottlenecks.
- **Peer-to-peer pattern**: This pattern involves a network of nodes that can act as both clients and servers. Each node can request or provide services or resources to other nodes, without relying on a central authority. This pattern is suitable for decentralized and collaborative applications, but it can also create security and reliability challenges.
- **Event-bus pattern**: This pattern involves an event-bus component that facilitates the communication between publishers and subscribers. Publishers are components that generate events (messages) and send them to the event-bus. Subscribers are components that register their interest in certain events and receive them from the event-bus. This pattern is suitable for asynchronous and event-driven applications, but it can also create complexity and consistency issues.

(more: https://www.simform.com/blog/software-architecture-patterns/)

</details>

<details>
  <summary><h5>MVC, MVP, MVI, MVVM, and VIPER</h5></summary>

MVC, MVP, MVI, MVVM, and VIPER are all **layered patterns**.

* **Model-View-Controller (MVC)**

  Imagine you are a chef & a waiter also, you suposed to serve multiple customers (1-many relationship). The customers (view) tells you what they want to order (user input). You (controler) go to the kitchen (model) and get the food, cook the food (control). You (controler) bring the food to the customer (view).

  ![MVC](/img/interviews/design-system/MVC.webp)

  - Model: “The backend that contains all the data logic”
  - View: “The frontend or graphical user interface (GUI)”
  - Controller: “The brains of the application that controls how data is displayed”

* **Model-View-Presenter (MVP)** 

  Imagine you are a waiter suposed to serve a customer (only that customer, 1-1 relationship). The customer (view) tells you what they want to order (user input). You (presenter) go to the kitchen (model) and get the food. You (presenter) bring the food to the customer (view).

  ![MVP](/img/interviews/design-system/MVP.webp)

  - Model is same as in MVC Model
  - View meets the inputs from the user
  - View knows Presenter, Presenter knows View through an interface, there is an abstraction between them.
  - Unlike MVC, there is a 1–1 relationship between View and Presenter.

* **Model-View-Intent (MVI)** 

  The customer interacts with the the waiter (the View) to place an order (the intent). The manager (business logic) then receives the order, verify, update & keep track in a book (the model).

  ![MVI](/img/interviews/design-system/MVI.webp)
  
  - “MVI was designed with reactive programming in mind.”
  - The Model represents a situation (state). Models in MVI must be immutable to allow a one-way flow of data.

* **Model-View-ViewModel (MVVM)** 

  Angular also implements some of the concepts of MVVM

  ```tsx
  // Model 
  class User { 
    name: string; email: string;
    constructor(name: string, email: string) { this.name = name; this.email = email; } 
  }

  // View 
  <template> <div> <h1>{{user.name}}</h1> <p>{{user.email}}</p> </div> </template>

  // View Model 
  @Component({ selector: ‘app-user’, templateUrl: ‘./user.component.html’, styleUrls: [‘./user.component.css’] }) 
  export class UserComponent { 
    @Input() user: User; 
    // bind data from parent component 
    @Output() selected = new EventEmitter<User>(); // emit event to parent component
    constructor() {}
    selectUser() { this.selected.emit(this.user)}; // trigger event when user is selected 
  }
  ```

  ![MVVM](/img/interviews/design-system/MVVM.webp)

  - ViewModel is data Model of View.
  - Model is model of database. View  model will change data from Model to a form that view that can easily to read.
  - View is View controler, get data from ViewModel and redering the view.
  - The biggest benefit of MVVM to software developers is Separation of Concerns such as visual interface and business structures in the background, data access structures.

* **View-Intent-Presenter-Entity-Router (VIPER)**

  The customer interacts with the waiter (the presenter) to place an order. The waiter then interacts with the manager (the router) to keep track of the order and point out which chef to interact with. The chef (the interactor) then gets the groceries/ingredients (the entity) to cook. When done, the chef notifies the waiter. The waiter then contacts the manager, and the manager tells the waiter where to take the customer's order.

  ![VIPER](/img/interviews/design-system/VIPER.png)

</details>
