<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Architecture</h5></summary>

![spring cloud](/img/interviews/java/spring-cloud-architecture.png)

#### Clients Services Communication

You can use Eureka as a service registry and specify the service name in the URI of the route. Spring Cloud Gateway will use Ribbon to resolve the physical address of the service and choose one of the available instances to forward the request

1. **API gateway**: **`Spring Cloud Gateway`** provides an API gateway that ***acts as a reverse proxy for all incoming requests***. It handles routing requests to the appropriate microservices and provides additional functionalities like ***rate-limiting, security, and monitoring***.

2. **Service registry and discovery**: Spring Cloud provides a service registry and discovery mechanism using the **`Netflix Eureka`** or **`Consul`** service registry. ***It enables services to register themselves and discover other services*** through a common service registry.

3. **Load balancing**: Spring Cloud integrates with **`Netflix Ribbon`** to provide client-side load balancing. It ***allows multiple instances of a service to be registered in the service registry***, and Ribbon will automatically ***handle load balancing*** between these instances.

4. **Config server**: can ***store and serve configuration properties from various sources***, such as git repositories, file systems, databases, or vaults. It exposes an HTTP API that allows clients to retrieve the properties for their application and environment

#### Services Communication

5. **Spring Feign Client**: is to ***enable service discovery and load balancing for the web service calls***. Spring Feign Client will use Eureka to resolve the physical address of the inventory-service and choose one of the available instances to make the request. This provides benefits such as ***fault tolerance, scalability, and dynamic configuration***.

6. **RestTemplate**: is a synchronous REST client that ***performs HTTP requests*** using a simple template-style API. It privides an alternative way for communication between two services.

#### Monitoring & Handle Failures

7. **Circuit breaker**: Spring Cloud integrates with **`Netflix Hystrix`** to provide a circuit breaker pattern. It ***allows services to handle failures gracefully*** by isolating the failing services and ***providing fallback mechanisms*** to avoid potential cascading failures.

8. **Distributed tracing and monitoring**: Spring Cloud integrates with **`Zipkin`** and **`Sleuth`** to ***provide distributed tracing and monitoring*** capabilities. It allows monitoring of requests as they propagate through different microservices.

Overall, Spring Cloud provides a set of building blocks that help developers to build and manage distributed systems and microservices-based architectures more easily.

</details>
