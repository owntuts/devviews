---
sidebar_position: 1000
sidebar_label: Springboot Architecture
title: Springboot Architecture
tags:
  - Springboot Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Springboot Architecture</h5></summary>

![Springboot Architecture](/img/interviews/java/Spring-Boot-Architecture.png)

Spring Boot architecture is a way of designing and organizing a Spring Boot application into different layers that communicate with each other. The main layers are:

- **Presentation layer**: This layer handles the user interface and the ***HTTP requests and responses***. It can use ***controllers, views, filters, interceptors*** and other components to perform ***authentication, validation, JSON conversion*** and other tasks. It can also use ***Spring MVC or Spring WebFlux*** frameworks to simplify the web development.
- **Business layer**: This layer contains the ***business logic*** and the rules of the application. It can use ***services, components, aspects*** and other beans to perform operations, calculations, transactions and other tasks. It can also use ***Spring AOP or Spring Security*** frameworks to add cross-cutting concerns such as ***logging, caching, security*** and others.
- **Persistence layer**: This layer handles the ***data access and storage logic***. It can use ***repositories, entities, DAOs*** and other components to interact with databases, files or other sources of data. It can also use Spring Data or Spring Batch frameworks to simplify the data access and processing.
- **Database layer**: This layer contains the ***actual databases or data sources*** that store the data of the application. It can use relational databases such as ***MySQL or PostgreSQL***, or non-relational databases such as ***MongoDB or Redis***.

Spring Boot architecture follows the dependency rule, which means that ***each layer depends only on the layers below it, not above it***. This way, the layers are loosely coupled and easy to test and maintain. Spring Boot also provides auto-configuration and starter dependencies to reduce the boilerplate code and configuration needed for each layer.

</details>
