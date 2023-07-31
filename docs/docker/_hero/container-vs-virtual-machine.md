---
sidebar_position: 1000
sidebar_label: container vs virtual machine
title: container vs virtual machine
tags:
  - Docker Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Container vs Virtual Machine</h5></summary>

![container vs virtialmachine](/img/interviews/docker/containervsvirtialmachine.png)

**Containers** provide a lighter weight, faster way to run applications as they share the host kernel, whereas virtual machines have their own kernel and hardware resources. Containers have lower overhead and are easier to deploy compared to virtual machines, but they also have lower security due to shared resources. Containers are limited in terms of application compatibility whereas virtual machines can run any operating system.

|  | Container | Virtual Machine |
| --- | --- | --- |
| Scope | OS-level | Hardware |
| Isolation | Process | Full |
| Size | Smaller | Larger |
| Speed | Faster | Slower |
| Overhead | Lower | High |
| Deploy | Easier | Harder |
| Security | Lower | Higher |
| Compatibility | Limited | High |

Containers are isolated environments that contain everything needed to run an application, such as code, libraries, dependencies, and configuration files. Containers are lightweight and portable, which makes them ideal for deploying applications across different environments.

</details>
