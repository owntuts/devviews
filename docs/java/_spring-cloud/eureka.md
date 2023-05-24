<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>How Eureka Works</h5></summary>

![eureka works](/img/interviews/java/eureka-works.png)

1. **Spring Cloud Eureka Server is started**: In the first step, the Eureka server is started, and it starts registering with itself. At this point, the server is up and running and ready to accept registrations from Eureka clients.

2. **Eureka Clients registration**: The Eureka clients are configured with the Eureka server URL in their application properties/yaml files. When they start up, they attempt to register with the Eureka server - sending their service instance metadata for registration.

3. **Eureka Server Registers Clients**: When a Eureka client application attempts to register with the Eureka server, the server stores the client instance metadata in its registry. This registry contains a collection of service instance metadata registered with the Eureka server.

4. **Eureka Server Heartbeats**: After registering with the Eureka server, Eureka clients send periodic heartbeats to the server to let it know that they are still alive. If the Eureka server doesn't receive a heartbeat after a configurable period, it marks the client instance as "DOWN" and will not route traffic to that instance until it is marked UP again.

5. **Eureka Server Monitoring**: Eureka server monitors the registry for changes, and when an instance is marked as DOWN, it can remove it from its registry automatically.

6. **Eureka Server Discovery**: When a client wants to call a service registered with the Eureka server, it requests the registry from the Eureka server. The Eureka server returns a list of currently registered service instances.

7. **Eureka Client Service Call**: Once a client has a list of service instances, it can make a service call using the load balancing or routing algorithm of its choice. If an instance is not available, clients can attempt to fallback or retry using another instance in the list.

8. **Eureka Server Replication (optional)**: In a multiple data center or availability zone setup, Eureka servers can replicate their registries to ensure that instances registered in one data center are available for service calls in another.

</details>
