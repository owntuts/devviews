<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![Swarm_ArchitectureDiagram](/img/interviews/angular/Swarm_ArchitectureDiagram.png) -->

<details open>
<summary><h5>How Docker Swarm Works</h5></summary>

Docker Swarm is a tool that allows you to create and manage a cluster of Docker nodes, also known as a swarm. A swarm consists of one or more manager nodes, which are responsible for orchestrating the deployment and operation of services across the cluster, and zero or more worker nodes, which are the machines that run the containers.

![Swarm_ArchitectureDiagram](/img/interviews/docker/Swarm_ArchitectureDiagram.png)
![Docker-EngineClient](/img/interviews/docker/Docker-EngineClient-2048x1403.png)

#### How Docker Swarm works in three machines:

1. **Initialize a swarm on the first machine.**

```
docker swarm init
```

This will initialize a swarm and elect a leader. The leader is the node that will be responsible for managing the swarm.

2. **Join the swarm on the second machine.**

```
# The token is generated when the swarm is initialized at step 1
docker swarm join --token SWMTKN-1-233xxxxxxx-456789012345
```

This will join the second machine to the swarm. The second machine will be assigned a role of worker. Workers are responsible for running containers.

3. **Join the swarm on the third machine.**

You can run the command below in any of the three machines

```
docker swarm join --token SWMTKN-1-233xxxxxxx-456789012345
```

This will join the third machine to the swarm. The third machine will also be assigned a role of worker.

4. **Deploy a service.**

```
docker service create --name my-service nginx
```

This will deploy a service called `my-service`. The `my-service` service will run a single nginx container on each of the three machines.

If you already have a service called my-service defined, then you can run the `docker service scale` command below.

5. **Scale the service.**

```
docker service scale my-service=3
```

This will scale the `my-service` service to 3 replicas. This means that there will be 3 nginx containers running on the three machines.

6. **Verify that the service is running.**

You can verify that the service is running by running the `docker service ps my-service` command. This will show you the status of the containers that are running for the `my-service` service.

Here is an example of the output of the `docker service ps my-service` command:

```
NAME           REPLICAS   IMAGE                                    PORTS
my-service      3/3        nginx:latest                              *:80->80/tcp
```

This output shows that there are 3 replicas of the `my-service` service running. Each replica is running a nginx container. The nginx containers are listening on port 80.

Docker Swarm is a powerful tool that can be used to manage Docker containers on multiple hosts. It is a good choice for applications that need to be highly available or that need to be scaled.

</details>

<details>
<summary><h5>Docker Swarm vs Kubernetes</h5></summary>

Here is a table that summarizes some of the main differences between the two tools for container orchestration:

| Feature | Docker Swarm | Kubernetes |
| --- | --- | --- |
| Ease of use | Simple and easy to use, native integration with Docker, same CLI as Docker | Complex and difficult to use, requires more configuration and setup, has its own CLI and API |
| Scalability | Less scalable and resilient, can handle smaller and simpler workloads, only supports horizontal scaling | More scalable and resilient, can handle larger and more complex workloads, supports both horizontal and vertical scaling |
| Features | Fewer features and functionalities, supports basic use cases and scenarios, smaller and less active community | More features and functionalities, supports a wider range of use cases and scenarios, larger and more active community |
| Compatibility | More compatible with Docker, works seamlessly with other Docker tools and services, less compatible with other platforms or vendors | Less compatible with Docker, may require additional tools or plugins to integrate with Docker or other platforms, more compatible with other platforms or vendors |

</details>
