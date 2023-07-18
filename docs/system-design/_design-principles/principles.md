<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
  <summary><h5>Principles vs Rules vs Patterns vs Building Blocks</h5></summary>

- **Design Principles**: are the fundamental & general design **ideas** can be applied to different situations and contexts (**trade-off** to avoid common pitfalls)
- **Design Rules**: Best practices, **guidelines** (specific rules of what to do and what not to do)
- **Design Patterns**: are general reusable solutions **to specific problems**
- **Design Anti Patterns**:  **common but** ineffective solutions
- **Building blocks**: are commonly used infrastructure software, tools, frameworks, and services

</details>

<details>
  <summary><h5>Principles vs Non-functional Features</h5></summary>

- **Non-functional features** are the ***quality attributes of the software*** that affect the user experience and the stakeholder satisfaction. Example: Performance, Reliability, Maintainability, Usability, Security, Scalability, Availability, Portability,...

- **Software design principles** are fundamental & general rules/ideas or guidelines that help you create a software architecture that ***satisfies non-functional features*** by following ***best practices and avoiding common pitfalls*** in software development.

For example, one non-functional feature is scalability, which means how well the software can handle increasing or decreasing workloads or demands. One software design principle that helps achieve scalability is modularity, which means dividing the software into smaller and independent components that can be added, removed, or changed without affecting the whole system. By applying modularity, you can make your software more scalable by allowing it to adapt to different scenarios and requirements.

```
Customer --------------------------------> Application -----------------> Developer
            [non-functional features]                     [principles]
```

  
</details>

<details>
  <summary><h5>Principles vs Design rules</h5></summary>

Yes, that is a good way to put it. ***Design rules are solutions that satisfy design principles in specific contexts of software***. Design rules are more concrete and precise than design principles, which are more abstract and general.

| Design principles | Design rules |
| ----------------- | ------------ |
| General guidelines or recommendations that help designers create effective and attractive compositions | Specific and mandatory requirements that designers must follow to meet certain standards or specifications |
| Derived from the accumulated knowledge and experience of professionals from various disciplines | Defined by the context and purpose of the design |
| Applied with discretion and flexibility, depending on the situation and the desired outcome | Followed strictly and consistently, otherwise the design might fail to function properly or meet the expectations |
| Examples: Emphasis, Balance, Alignment, Repetition, Proportion, Movement, White space | Examples: Grid system, Color palette, Typography system, Icons, Images |

Example is to use ***modularity*** to divide the software into smaller and independent units that can be developed, tested, and maintained separately. One design rule that satisfies this principle is to use ***microservices*** to create a distributed architecture that consists of loosely coupled and highly cohesive services that communicate through well-defined protocols.

</details>

<details>
  <summary><h5>Common Software development principles</h5></summary>

Software development principles are general guidelines or best practices that help developers create high-quality software that meets the customer's needs and expectations. There are many software development principles, but some of the most common ones are:

- **Agile principles**: These are based on the Agile Manifesto, which is a statement of values and principles for software development that emphasizes customer satisfaction, collaboration, flexibility, and working software. Some of the agile principles are¹:
    * Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
    * Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage.
    * Business people and developers must work together daily throughout the project.
    * Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
    * The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
    * Working software is the primary measure of progress.
    * Continuous attention to technical excellence and good design enhances agility.
    * Simplicity–the art of maximizing the amount of work not done–is essential.
    * The best architectures, requirements, and designs emerge from self-organizing teams.
    * At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

- **SOLID principles**: These are a set of design principles for object-oriented programming that help developers create maintainable, extensible, and testable code. SOLID stands for²:
    * Single responsibility principle: A class should have one and only one reason to change, meaning that a class should have only one job.
    * Open-closed principle: Objects or entities should be open for extension but closed for modification. This means that a class should be easily extendable without modifying the class itself.
    * Liskov substitution principle: Every subclass or derived class should be substitutable for their base or parent class. This means that a subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.
    * Interface segregation principle: A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.
    * Dependency inversion principle: Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

- **DRY principle**: This stands for Don't Repeat Yourself, which means that every piece of knowledge or logic should have a single, unambiguous representation within a system. This helps developers avoid duplication and redundancy in code, which can lead to bugs, inconsistencies, and difficulties in maintenance³.

- **KISS principle**: This stands for Keep It Simple, Stupid, which means that developers should aim for simplicity and clarity in their code and design. This helps developers avoid unnecessary complexity and over-engineering, which can make code harder to understand, test, debug, and modify.

- **YAGNI principle**: This stands for You Aren't Gonna Need It, which means that developers should only implement things when they actually need them, not when they foresee or speculate that they might need them in the future. This helps developers avoid wasting time and effort on features or functionalities that may never be used or may change significantly later.

- **Separation of concerns**: This means that a system should be divided into distinct and independent modules or components that each have a clear and well-defined responsibility. This helps developers achieve high cohesion and low coupling, which improve modularity, readability, reusability, and testability of code.

- **Single Responsibility (SoC)**: responsibility -> behavior. Ex: Invoice class does not have a responsibility to print itself.

- **Avoid Premature Optimization**: profile your code to identify true bottlenecks to fix them rather than guess sth slow and speed it up.

- **Clean Code > Clever Code**: forget about writing clever code. example of clever code is packing as much logic into one line as possible or write dynamic code.

</details>

<details>
  <summary><h5>Principles for Scalable Apps</h5></summary>

- **Simplicity**: simplifies scalability, development, deployment, maintenance and support. (big system => hard to mange => need to keep it simple)
- **Decomposition**: big system => split into scalable subsystems (plug n play) => should be able to independently run in a separate process or threads and enabled to scale.
- **Decentralization/Distribution**: a collection of subsystems running on independent servers => high ***availability, realiable***.
- **Asynchronous**: process execution ***without blocking on resources***
- **Loose Coupling High Cohesion**: cohesion - a stone is a stone, a diamond is a diamon (each atom in them related to each other) but stone and diamon be loose sticky together (loose Coupling) via gravity. Weak cohesion among subsystems tends to result in more round trips because the classes or components are not logically grouped and may reside in different tiers.
- **Concurrency and Parallelization**: Concurrency is multiple tasks -> shared resources (multi tasks run on one CPU). Parallelization is single task divided into multiple tasks (one task run on multi CPUs).
- **Parsimony**: complex system => spend system resources => need parsimony. Resources might be cached or pooled and multiplexed

</details>

<details>
  <summary><h5>12-Factor App</h5></summary>

  The 12-Factor App is a set of best practices for building software-as-a-service (SaaS) applications that can run reliably and efficiently on the web. The 12 factors are:

- **Codebase**: One codebase tracked in revision control, many deploys
- **Dependencies**: Explicitly declare and isolate dependencies
- **Config**: Store config in the environment
- **Backing services**: Treat backing services as attached resources
- **Build, release, run**: Strictly separate build and run stages
- **Processes**: Execute the app as one or more stateless processes
- **Port binding**: Export services via port binding
- **Concurrency**: Scale out via the process model
- **Disposability**: Maximize robustness with fast startup and graceful shutdown
- **Dev/prod parity**: Keep development, staging, and production as similar as possible
- **Logs**: Treat logs as event streams
- **Admin processes**: Run admin/management tasks as one-off processes

The 12-Factor App methodology aims to make SaaS applications more portable, scalable, agile, and consistent. It is based on the experience and observations of hundreds of SaaS apps developed and deployed on the Heroku platform.

: https://12factor.net/

</details>