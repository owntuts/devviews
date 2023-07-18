<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![soavsmicroservices](/img/interviews/angular/soavsmicroservices.png) -->

<details open>
  <summary><h5>Scalable architectures</h5></summary>

Scalable architectures are software architectures that can ***handle a growing amount of work by adding resources to the system***, without requiring any fundamental changes to it. Scalable architectures are important for applications that need to ***support high traffic, performance, and availability***. Some of the common scalable architectures in development are:

- **CLEAN architecture** is a software design pattern that follows the concepts of clean code and implements SOLID principles. It ***separates the system into four layers: entities, use cases, interface adapters, and frameworks and drivers***. Each layer has a specific responsibility and function, and depends only on the inner layers. The innermost layer contains the enterprise-wide business rules and data structures, while the outermost layer contains the external dependencies and frameworks.

- **SOA, or service-oriented architecture**, is a method of software development that uses software components called services to create business applications. Each service provides a business capability, and services can also communicate with each other across platforms and languages. SOA aims to make software components reusable and interoperable via service interfaces that use a common communication language over a network

- **Microservices architecture**: This architecture decomposes the application into small, independent, and loosely coupled services, each with a single responsibility and function. The services communicate with each other through well-defined interfaces or protocols, such as RESTful APIs or message queues. This architecture allows for high scalability, resilience, and agility, but also introduces complexity and overhead in coordination, testing, and deployment.
- **Event-driven architecture**: This architecture is based on the production and consumption of events, which are messages that trigger actions or reactions in the system. The events are processed by event handlers, which can be synchronous or asynchronous, and can communicate with other handlers or services. This architecture allows for high scalability, flexibility, and decoupling of components, but also introduces complexity and latency issues.
- **Space-based architecture**: This architecture distributes the system's data and processing across multiple nodes or servers, using a virtualized space as a middleware to coordinate them. The space acts as a shared memory that stores data objects and enables communication between nodes. The nodes can perform operations on the data in parallel, without locking or blocking. This architecture allows for high performance, scalability, and fault tolerance, but also requires sophisticated synchronization and replication mechanisms.
- **Serverless architecture**: This architecture leverages cloud services that provide on-demand computing resources and capabilities, such as functions, databases, storage, etc. The application logic is executed by stateless functions that are triggered by events or requests. The cloud provider manages the scaling, provisioning, and maintenance of the underlying infrastructure. This architecture allows for high scalability, cost-efficiency, and simplicity, but also introduces limitations in functionality, performance, and control.
- **Reactive architecture**: This architecture follows the principles of responsiveness, resilience, elasticity, and message-driven communication. The application is composed of reactive components that react to changes in their environment or state. The components communicate with each other through asynchronous message streams that support backpressure and error handling. This architecture allows for high scalability, responsiveness, and fault tolerance, but also requires a different mindset and skillset from traditional development.

</details>

<details>
  <summary><h5>CLEAN Architectures</h5></summary>

![clean](/img/interviews/design-system/clean.png)

- Clean architecture is a software design pattern that follows ***clean code*** and ***SOLID principles***.
- It helps to keep business logic together and minimize dependencies within the system.
- It has four layers: Entities, Use Cases, Interface Adapters, and Frameworks and Drivers. 
    - The innermost layer is the Entities layer, which contains the enterprise-wide ***business rules and data structures***. 
    - The next layer is the Use Cases layer, which contains the ***application-specific business rules and logic***. 
    - The third layer is the Interface Adapters layer, which contains the ***adapters and presenters that convert data and request***s between the inner and outer layers. 
    - The outermost layer is the Frameworks and Drivers layer, which contains the ***external dependencies and frameworks, such as UI, databases, web services***, etc.
- The ***dependencies point inward***, meaning that the inner layers are independent of the outer layers.
- The ***inner layers define interfaces or boundarie***s that the outer layers must implement or conform to.

</details>

<details>
  <summary><h5>SOA vs Microservices</h5></summary>

SOA and microservices are both software development approaches that ***break down large, complex applications into smaller, more flexible components or services***. However, they have some key differences in terms of scope, architecture, governance, and communication.

![soavsmicroservices](/img/interviews/design-system/soavsmicroservices.png)

- **Scope**: SOA has an enterprise scope, meaning that the services are shared and reused across different applications or business processes. Microservices has an application scope, meaning that the services are specific and independent for each application or domain.
- **Architecture**: SOA follows a layered architecture, where the services are organized into functional, enterprise, application, and infrastructure layers. Microservices follows a domain-driven architecture, where the services are aligned with the business domains or subdomains.
- **Governance**: SOA relies on a centralized governance model, where the services are managed and controlled by an enterprise service bus (ESB) that handles communication, integration, and orchestration. Microservices relies on a decentralized governance model, where the services are autonomous and self-contained, and communicate through lightweight protocols or APIs.
- **Communication**: SOA uses a system of contracts and interfaces to define the communication between services. The contracts specify the inputs, outputs, and behaviors of the service. The interfaces use standard network protocols, such as SOAP or REST. Microservices uses a system of messages and events to enable the communication between services. The messages are simple and data-driven, without any business logic. The events are asynchronous and reactive, triggering actions or reactions in the system.

| Aspect | SOA | Microservices |
| --- | --- | --- |
| Scope | Enterprise-wide | Application-specific |
| Architecture | Layered | Domain-driven |
| Governance | Centralized (ESB) | Decentralized (APIs) |
| Communication | Contracts and interfaces (SOAP or REST) | Messages and events (simple and reactive) |

Some of the benefits of SOA are:

- **Reusability**: Services can be reused in different applications or business processes, reducing development time and cost.
- **Interoperability**: Services can interact with each other regardless of their implementation details or platforms, enabling integration and collaboration across systems.
- **Agility**: Services can be easily changed or replaced to meet changing business needs or requirements, without affecting the rest of the system.
- **Testability**: Services can be tested individually or in isolation, improving the quality and reliability of the system.

Some of the benefits of microservices are:

- **Scalability**: Services can be scaled independently and dynamically, according to the demand or load of each service.
- **Resilience**: Services can tolerate failures or errors in other services, without compromising the availability or performance of the system.
- **Innovation**: Services can be developed and deployed independently and rapidly, allowing for experimentation and feedback.
- **Diversity**: Services can use different technologies or frameworks that suit their specific needs or preferences.

</details>

<details>
  <summary><h5>Multi-tenancy Architecture</h5></summary>

Multi-tenancy architecture is a software architecture where ***multiple customers*** of a software vendor ***share the same computing resources, such as servers, databases, or applications***. Each customer, or tenant, has their own isolated and secure environment within the shared resources, and is not aware of or affected by other tenants.

Multi-tenancy architecture is commonly used in cloud computing and software-as-a-service (SaaS) models, where the software vendor provides a single software instance and a single database to serve multiple tenants. This way, the vendor can reduce the cost and complexity of maintaining and updating multiple instances and databases for each tenant.

Multi-tenancy architecture has several benefits, such as:

- **Cost efficiency**: The software vendor can save on infrastructure, maintenance, and operational costs by sharing resources among tenants. The tenants can also benefit from lower subscription fees and pay-per-use models.
- **Scalability**: The software vendor can easily scale up or down the resources according to the demand or load of each tenant. The tenants can also enjoy high performance and availability without worrying about capacity planning or provisioning.
- **Agility**: The software vendor can quickly deploy new features or updates to all tenants at once, without requiring downtime or migration. The tenants can also access the latest version of the software without any hassle or delay.
- **Customization**: The software vendor can provide different levels of customization and configuration options to each tenant, according to their needs and preferences. The tenants can also personalize their user interface and functionality without affecting other tenants.

Multi-tenancy architecture also has some challenges, such as:

- **Security risks**: The software vendor must ensure that the data and operations of each tenant are isolated and protected from unauthorized access or leakage. The tenants must also trust the vendor to comply with the security standards and regulations of their industry or region.
- **Compliance issues**: The software vendor must adhere to the legal and ethical requirements of each tenant's jurisdiction or domain. The tenants must also verify that the vendor meets their compliance obligations and expectations.
- **Performance trade-offs**: The software vendor must balance the performance and resource allocation of each tenant, without compromising the quality of service or user experience. The tenants must also accept the possibility of performance degradation or contention due to other tenants' activities.

There are different types of multi-tenancy architecture, depending on how the resources are shared among tenants. Some common types are:

The use cases for different types of multi-tenancy architectures depend on the requirements and preferences of the software vendor and the tenants. Some possible use cases are¹:

- **Shared everything**: This type of multi-tenancy architecture is suitable for software vendors who want to minimize the infrastructure, maintenance, and operational costs by sharing a single software instance and a single database among all tenants. It is also suitable for tenants who have similar or simple needs and do not require high levels of isolation or customization. An example of this type is Salesforce, a SaaS platform that provides CRM and other business applications to multiple tenants using a shared everything architecture.
- **Shared nothing**: This type of multi-tenancy architecture is suitable for software vendors who want to maximize the isolation and customization of each tenant by providing a separate software instance and a separate database for each tenant. It is also suitable for tenants who have different or complex needs and require high levels of security or compliance. An example of this type is Microsoft Dynamics 365, a SaaS platform that provides ERP and CRM applications to multiple tenants using a shared nothing architecture.
- **Shared hardware**: This type of multi-tenancy architecture is suitable for software vendors who want to balance the resource utilization and isolation of each tenant by providing a single software instance but multiple databases for each tenant. It is also suitable for tenants who have moderate or varying needs and require some level of performance or availability. An example of this type is Shopify, a SaaS platform that provides e-commerce solutions to multiple tenants using a shared hardware architecture.

- **Shared schema**: This type of multi-tenancy architecture is suitable for software vendors who want to balance the resource utilization and customization of each tenant by providing a single software instance and a single database for each tenant. It is also suitable for tenants who have similar or flexible needs and do not require high levels of isolation or security. An example of this type is WordPress, a SaaS platform that provides blogging and website creation solutions to multiple tenants using a shared schema architecture.

</details>
