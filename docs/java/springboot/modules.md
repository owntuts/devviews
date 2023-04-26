---
sidebar_position: 1000
sidebar_label: Springboot Modules
title: Springboot Modules
tags:
  - Springboot Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Spring Boot modules</h5></summary>

![Spring Boot modules](/img/interviews/java/springboot-modules.png)

Spring Boot Core Container is a term that refers to the core module of the Spring Framework, which provides the basic functionality for creating and managing beans. The core container consists of four components:

- **Core**: Provides the fundamental parts of the framework, such as IoC and dependency injection features.
- **Beans**: Provides a factory pattern for creating and configuring beans, as well as a registry for storing and retrieving them.
- **Context**: Provides a way to access beans in a consistent manner, as well as advanced features such as events, resources, and internationalization.
- **Expression Language**: Provides a powerful expression language for querying and manipulating objects at runtime.

The core container is the basis of the whole Spring ecosystem and comprehends many other modules that build on top of it, such as web, data, security, cloud, etc.

</details>

<details>
<summary><h5>Spring Boot workflow</h5></summary>

![Springboot workflow](/img/interviews/java/springboot-architecture.png)

- The client makes an HTTP ***request*** (GET, POST, PUT, DELETE, etc.) to the server.
- The request is forwarded to the `DispatcherServlet` (in Web Module), which is the front controller of Spring MVC.
- The `DispatcherServlet` maps the request to the appropriate ***controller*** based on the `@RequestMapping` annotations.
- The controller handles the request and calls the ***service*** layer if needed.
- The service layer performs the business logic and uses the persistence layer to access the data.
- The persistence layer uses ***JPA*** to interact with the database layer and performs CRUD (create, read, update, delete) operations.
- The controller returns a ***response*** to the client, which can be a view (such as JSP) or a JSON object.

</details>
