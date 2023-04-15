---
sidebar_position: 1000
sidebar_label: Kubernetes Architecture
title: Kubernetes Architecture
tags:
  - Kubernetes Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Architecture</h5></summary>

![Kubernetes Architecture](/img/interviews/kubernetes/Kubernetes-Architecture.png)

A **Kubernetes cluster** consists of two parts: the control plane and the nodes. **The control plane (Master Node)** is responsible for managing the cluster state and configuration, while the **nodes (Worker Nodes)** are the compute machines that run the containers. 

The main components of the control plane are:

- **kube-apiserver**: The front end of the Kubernetes API, which handles requests from internal and external clients.
- **kube-scheduler**: The component that assigns pods to nodes based on resource requirements and cluster health.
- **kube-controller-manager**: The component that runs various controllers that ensure the desired state of the cluster is maintained.
- **etcd**: The distributed key-value store that stores the cluster data.

The main components of a node are:

- **kubelet**: The agent that runs on each node and communicates with the control plane. It manages the pods and containers on the node.
- **kube-proxy**: The network proxy that maintains network rules and enables communication between pods across nodes.
- **container runtime**: The software that runs and manages the containers, such as Docker or containerd.

:::Note

For fault tolerance purposes, there can be more than one master node in the cluster. If we have more than one master node, they would be in a HA (High Availability) mode, and only one of them will be the leader, performing all the operations

:::
</details>
