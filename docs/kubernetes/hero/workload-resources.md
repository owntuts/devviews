---
sidebar_position: 1000
sidebar_label: Kubernetes Workload Resources
title: Kubernetes Workload Resources
tags:
  - Kubernetes Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Kubernetes Workload Resources</h5></summary>

Here is a brief explanation of each resource type you asked for, along with some examples:

- **Pods**: Pods are the smallest and simplest unit of computing in Kubernetes. A pod ***consists of one or more containers that share the same storage and network resources***, and a specification for how to run the containers. A pod is usually created and managed by a higher-level resource, such as a deployment or a stateful set. An example of a pod configuration file is:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: nginx
    image: nginx
    ports:
    - containerPort: 80
```

- **Replica sets**: A replica set ensures that a ***specified number of pod replicas are running at any given time***. However, a deployment is a higher-level concept that manages replica sets and provides declarative updates to pods along with a lot of other useful features. Therefore, we recommend using deployments instead of directly using replica sets, unless you require custom update orchestration or don't require updates at all. An example of a replica set configuration file is:

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: my-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
```

- **Deployments**: Deployments are the recommended way to ***manage the creation and scaling of pods***. A deployment provides declarative updates for pods and replica sets. You describe the desired state of your pods in a deployment, and the deployment controller changes the actual state to match the desired state at a controlled rate. An example of a deployment configuration file is:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
```

- **Stateful sets**: Stateful sets are the workload API object used to ***manage stateful applications***. Similar but unlike a deployment, a stateful set maintains a sticky identity for each of their pods. Each pod has a persistent identifier that it maintains across any rescheduling. ***A stateful set also provides a stable network identity and persistent storage for each pod***. An example of a stateful set configuration file is:

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: my-statefulset
spec:
  serviceName: "nginx"
  replicas: 3
  selector:
    matchLabels:
      app: nginx 
  template:
    metadata:
      labels:
        app: nginx 
    spec:
      terminationGracePeriodSeconds: 10
      containers:
      - name: nginx
        image: registry.k8s.io/nginx-slim:0.8 
        ports:
        - containerPort: 80 
          name: web 
        volumeMounts:
        - name: www 
          mountPath: /usr/share/nginx/html 
  volumeClaimTemplates:
  - metadata:
      name: www 
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "my-storage-class"
      resources:
        requests:
          storage: 1Gi 
```

- **DaemonSet**: is a Kubernetes resource that ***ensures that a copy of a pod runs on all or some nodes in the cluster***. A DaemonSet is useful for*** running system daemons or agents that provide services or monitoring for the nodes***, such as log collectors, network plugins, storage drivers, etc. A DaemonSet controller ensures that as nodes are added or removed from the cluster, the pods are created or deleted accordingly.

An example of a DaemonSet that runs the fluentd-elasticsearch logging agent on every node is:

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd-elasticsearch
  namespace: kube-system
  labels:
    k8s-app: fluentd-logging
spec:
  selector:
    matchLabels:
      name: fluentd-elasticsearch
  template:
    metadata:
      labels:
        name: fluentd-elasticsearch
    spec:
      tolerations:
      # these tolerations are to have the daemonset runnable on control plane nodes
      # remove them if your control plane nodes should not run pods
      - key: node-role.kubernetes.io/control-plane
        operator: Exists
        effect: NoSchedule
      - key: node-role.kubernetes.io/master
        operator: Exists
        effect: NoSchedule
      containers:
      - name: fluentd-elasticsearch
        image: quay.io/fluentd_elasticsearch/fluentd:v2.5.2
        resources:
          limits:
            memory: 200Mi
          requests:
            cpu: 100m
            memory: 200Mi
        volumeMounts:
        - name: varlog
          mountPath: /var/log
      terminationGracePeriodSeconds: 30
      volumes:
      - name: varlog
        hostPath:
          path: /var/log
```

You can create a DaemonSet using the kubectl apply command with the YAML file:

```
kubectl apply -f https://k8s.io/examples/controllers/daemonset.yaml
```

</details>
