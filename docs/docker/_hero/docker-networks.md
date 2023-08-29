<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![bridge-networks](/img/interviews/angular/bridge-networks.png) -->

<details open>
<summary><h5>Docker Networks</h5></summary>

Docker networks are a way of ***managing the communication between containers and other networks***. Docker networks allow you to isolate your containers, control the traffic flow, and customize the network settings. You can use different types of network drivers to create and configure your networks, such as ***bridge, overlay, macvlan, host***, and none. Here is a brief summary of each type:

- **Bridge networks**: used ***within a single host***. They create a software-based bridge between your host and the container. Containers connected to the network can ***communicate with each other, but they are isolated from those outside the network***. Each container in the network ***is assigned its own IP address***. Bridge networks are the ***default type*** when you create a network without specifying any driver.

- **Overlay networks**: used for ***multi-host communication***. They are distributed networks that span multiple Docker hosts. The network allows all the containers running on any of the hosts to communicate with each other ***without requiring OS-level routing*** support. Overlay networks are the ***default type for Docker Swarm clusters***, but you can also use them when you are running two separate instances of Docker Engine with containers that must directly contact each other.

- **Macvlan networks**: used to ***connect Docker containers directly to host network interfaces***. They ***allow containers to appear as physical devices on your network***, with their ***own MAC addresses and IP addresses***. Macvlan networks are useful when you want to integrate containerized services with an existing physical network.

- **Host networks**: used to ***share your host's network*** stack without any isolation. Containers that use the host network mode ***do not get their own IP addresses***, and port binds are published directly to your host's network interface. This means a container process that listens on port `80` will bind to `<your_host_ip>:80`. Host networks offer the best performance and the least network overhead, but they also expose your containers to potential security risks.

- **None networks**: used to ***disable networking for a container***. Containers that use the none network mode do not have any access to external networks or other containers. They only have a loopback interface and can only communicate with themselves. None networks are useful when you want to run a container in an isolated environment for testing or debugging purposes.

</details>

<details>
<summary><h5>Usecases of Docker Networks</h5></summary>

- **Bridge networks**: A typical use case for bridge networks is when you want to ***run multiple containers that form a single application***, such as a web server and a database server, and you want them to ***communicate with each other on the same host***.

- **Overlay networks**: A typical use case for overlay networks is when you want to ***scale your application across multiple hosts or regions***, and you need a consistent and secure way of networking your containers.

- **Macvlan networks**: A typical use case for macvlan networks is when you have ***legacy applications that rely on specific IP addresses or MAC addresses***, and you want to migrate them to Docker without changing their configuration.

- **Host networks**: A typical use case for host networks is ***when you want to run a container that needs to listen on a specific port on the host***, such as a web server that needs to listen on port 80.

- **None networks**: None networks are useful when you want to run a container in an isolated environment for testing or debugging purposes.

</details>

<details>
<summary><h5>Bridge networks Architecture</h5></summary>

![bridge-networks](/img/interviews/docker/bridge-networks.png)

There’s two types of networks: private network (docker network), phycical net work (host net work).

To make docker containers can communicate with each other, you need to map private network to host net work. But the Question is "How to mapping them together"? The Answer is: ***Using a bridge driver (software of docker)*** to map a single bridge can be used to connect ***multiple containers to the physical network*** (many - 1).

Example:

```sh
docker network create my-bridge
docker run -it --network my-bridge --name webserver nginx
docker run -it --network my-bridge --name database mysql
```
This will create a bridge network called `my-bridge` and ***connect both the `webserver` and `database` containers to it***. The webserver container will be able to communicate with the database container, and vice versa.
</details>

<details>
<summary><h5>Macvlan networks Architecture</h5></summary>

![Macvlan](/img/interviews/docker/Macvlan.png)

Similar to Bridge networks Architecture but Macvlan ***is mapping directly (1-1) from private network to phycical network***. A container is like real host machine.

Latency in macvlan networks is low since packets are routed directly from Docker host **network interface controller (NIC)** to the containers (they create ***a direct link between the container and the host's NIC***. This means that packets do not have to go through the software bridge, which can add latency).

Macvlan (***routing real eth to virtual eth***) has to be configured per host (This means that you cannot create a macvlan network that spans multiple hosts), and has support for physical NIC, sub-interface. 

```sh
$ docker network create -d macvlan \ 
 --subnet=192.168.40.0/24 \ 
 --gateway=192.168.40.1 \  
-o parent=eth0 my-macvlan-net

```

</details>

<details>
<summary><h5>Overlay networks Architecture</h5></summary>

![Overlay](/img/interviews/docker/Overlay.png)

***Bridge networks and macvlan networks are local networks***, which means that they only work for containers that are running on the same Docker host (within a node). 

***Overlay networks, on the other hand, are cluster networks***, which means that they can be used to connect containers that are running ***on different Docker hosts***.

Overlay is virtual network, it’s mapped to real host network (many – many) by VXLAN tunnel (***a single VXLAN tunnel can be used to connect multiple containers to multiple hosts***). This means that all of the containers that are connected to the tunnel will be able to communicate with each other, regardless of which host they are running on.

- VXLAN tunnels are a type of ***tunneling protocol*** that allows you to ***create a virtual Layer 2 network over a Layer 3 network***. This means that you can ***create a network of containers that appear to be on the same physical network***, even if they are actually running on different hosts.

- VXLAN tunnels are implemented using ***VXLAN Tunnel Endpoints (VTEPs)***. VTEPs are devices that terminate VXLAN tunnels. Each Docker host that participates in an overlay network must have a VTEP.

- VXLAN traffic is regular ***IP/UDP packets***. The VXLAN header is encapsulated in the UDP packet, and the UDP packet is then sent over the underlying IP network. This means that VXLAN traffic can be routed and forwarded by standard IP routers.

When a container sends a packet on an overlay network, the packet is encapsulated in a VXLAN header and sent to the VTEP on the host where the container is running. The VTEP then tunnels the packet to the VTEP on the host where the destination container is running. The VTEP on the destination host then decapsulates the packet and delivers it to the destination container.


```sh
docker network create my-overlay
docker run -it --network my-overlay --name webserver nginx
docker run -it --network my-overlay --name database mysql
```

This will create an overlay network called `my-overlay` and connect both the `webserver` and `database` containers to it. The `webserver` container will be able to communicate with the `database` container, even though they are running on different hosts.

</details>
