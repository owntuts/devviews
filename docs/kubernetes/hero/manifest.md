---
sidebar_position: 1000
sidebar_label: Kubernetes Manifest
title: Kubernetes Manifest
tags:
  - Kubernetes Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Kubernetes Manifest</h5></summary>

A **manifest** in Kubernetes is ***a file that describes the desired state of a Kubernetes resource or a group of resources***. A manifest can be written in YAML or JSON format, and it contains the fields and values that define the configuration and behavior of the resource. A manifest can be applied to the cluster using the `kubectl apply` command, which creates or updates the resource according to the manifest. A manifest can also be used to delete a resource using the `kubectl delete` command.

Examples of deployment manifest resource in Kubernetes:

```yaml {10-19}
apiVersion: apps/v1
kind: Deployment
metadata: # idetity info of Deployment Resource
  name: nginx-deployment
spec: # specification of Deployment
  replicas: 3 # creates three replicas of nginx pods declared below
  selector: # select pods that satify the following rules to apply Deployment
    matchLabels:
      app: nginx # only match pods have label `app: nginx`
  template: # pods declaration: describe the desired state of a pod or a set of pods
    metadata: # idetity info of Pod Resource
      labels:
        app: nginx # The label for the pods
    spec: # specification of Pods
      containers:
      - name: nginx # The name of the container
        image: nginx # The image of the container
        ports:
        - containerPort: 80 # The port that the container exposes
```

</details>
