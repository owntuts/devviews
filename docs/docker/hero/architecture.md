---
sidebar_position: 1000
sidebar_label: Docker Architecture
title: Docker Architecture
tags:
  - Docker Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>RUN vs CMD vs ENTRYPOINT</h5></summary>

![Docker Architecture](/img/interviews/docker/architecture.png)

Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API¹.

The Docker daemon manages the following components:

- **Images**: Images are ***read-only templates*** that define how to create a container. You can create your own images or use images from public or private repositories. Images are composed of layers that can be shared and reused by other images.
- **Containers**: Containers ***are instances of images*** that run in isolation on the host machine. You can start, stop, move, or delete containers using the Docker client or API. Containers can be connected to each other and to external networks using networks and volumes.
- **Networks**: Networks allow containers to communicate with each other and with other hosts. Docker provides different network drivers to support different use cases, such as bridge, host, overlay, macvlan, etc. You can also create your own custom network plugins using the Docker plugin API.
- **Volumes**: Volumes are persistent data storage units that can be attached to one or more containers. Volumes allow you to persist data across container restarts and share data between containers. Docker provides different volume drivers to support different storage backends, such as local, NFS, cloudstor, etc. You can also create your own custom volume plugins using the Docker plugin API.
- **The Docker registry or hub** is a service that ***stores and distributes Docker images***. You can use the public Docker Hub to access official images from Docker and other community images. You can also use private registries to store and manage your own images.

</details>
