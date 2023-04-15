---
sidebar_position: 1000
sidebar_label: Common Commands
title: Common Commands
tags:
  - Kubernetes Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Common Commands in Kubernetes</h5></summary>

`kubectl` is a tool that allows you to run commands against Kubernetes clusters. You can use `kubectl` to ***deploy applications, inspect and manage cluster resources, and view logs***.

Some common Kubernetes commands and examples for each are:

- `kubectl apply`: Apply a configuration to a resource by filename or stdin. The resource name must be specified. This command creates the resource if it does not exist yet. To use apply, always create the resource initially with either `kubectl apply` or `kubectl create --save-config`. For example:

```
# Create a pod using the data in pod.yaml
kubectl apply -f ./pod.yaml

# Update a pod using the data in pod.json
kubectl apply -f ./pod.json
```

- `kubectl create`: Create a resource from a file or from stdin. For example:

```
# Create a pod using the data in pod.json
kubectl create -f ./pod.json

# Create a service using the data passed into stdin
cat service.yaml | kubectl create -f -
```

- `kubectl delete`: Delete resources by filenames, stdin, resources and names, or by resources and label selector. For example:

```
# Delete a pod using the type and name specified in pod.yaml
kubectl delete -f ./pod.yaml

# Delete all pods and services with label app=nginx
kubectl delete pods,services -l app=nginx
```

- `kubectl describe`: Show details of a specific resource or group of resources. For example:

```
# Show details of a pod
kubectl describe pods my-pod

# Show details of all nodes
kubectl describe nodes
```

- `kubectl edit`: Edit a resource on the server. For example:

```
# Edit a deployment named nginx-deployment
kubectl edit deployment/nginx-deployment
```

- `kubectl exec`: Execute a command in a container. For example:

```
# Run ls command in a container named my-container in a pod named my-pod
kubectl exec my-pod -c my-container -- ls /

# Get an interactive shell to a container named my-container in a pod named my-pod
kubectl exec -it my-pod -c my-container -- /bin/bash
```

- `kubectl get`: Display one or many resources. For example:

```
# Get details of a pod named my-pod
kubectl get pods my-pod

# Get details of all pods in JSON format
kubectl get pods -o json
```

- `kubectl logs`: Print the logs for a container in a pod. For example:

```
# Print the logs for a container named my-container in a pod named my-pod
kubectl logs my-pod -c my-container

# Print the logs for the previous instance of a container named my-container in a pod named my-pod
kubectl logs my-pod -c my-container --previous
```

- `kubectl patch`: Update field(s) of a resource using strategic merge patch, a JSON merge patch, or a JSON patch. For example:

```
# Partially update a node using strategic merge patch
kubectl patch node k8s-node-1 -p '{"spec":{"unschedulable":true}}'

# Partially update an array element of a deployment using JSON merge patch
kubectl patch deployment valid-deployment  --type json   -p='[{"op": "replace", "path": "/spec/template/spec/containers/0/image", "value":"new image"}]'
```

- `kubectl port-forward`: Forward one or more local ports to a pod. For example:

```
# Listen on port 8888 locally and forward to port 5000 in the pod named my-pod
kubectl port-forward my-pod 8888:5000

# Listen on port 8888 on all addresses locally and forward to port 5000 in the pod named my-pod
kubectl port-forward --address 0.0.0.0 my-pod 8888:5000
```

- `kubectl scale`: Set a new size for a Deployment, ReplicaSet, Replication Controller, or StatefulSet. For example:

```
# Scale up/down a deployment named nginx-deployment to 3 replicas
kubectl scale deployment/nginx-deployment --replicas=3

# Scale up/down all deployments matching app=nginx label selector to 4 replicas
kubectl scale deployments -l app=nginx --replicas=4

```

- `kubectl rollout`: Manage the rollout of a resource. For example:

```
# View the rollout history of a deployment named nginx-deployment
kubectl rollout history deployment/nginx-deployment

# Rollback to the previous revision of a deployment named nginx-deployment
kubectl rollout undo deployment/nginx-deployment

# Pause the rollout of a deployment named nginx-deployment
kubectl rollout pause deployment/nginx-deployment

# Resume the rollout of a deployment named nginx-deployment
kubectl rollout resume deployment/nginx-deployment
```

- `kubectl run`: Run a particular image on the cluster. For example:

```
# Start a single instance of nginx pod
kubectl run nginx --image=nginx

# Start a pod of busybox and keep it in the foreground, don't restart it if it exits
kubectl run -i -t busybox --image=busybox --restart=Never

# Start the nginx container using a specified port and env variable
kubectl run nginx --image=nginx --port=80 --env="DOMAIN=cluster"
```

- `kubectl set`: Set specific features on objects. For example:

```
# Set a new image for all containers in the pods of a deployment named nginx-deployment
kubectl set image deployment/nginx-deployment nginx=nginx:1.9.1

# Update the image and resources request and limit for all containers in the pods of a deployment named nginx-deployment
kubectl set resources deployment nginx-deployment -c=nginx --limits=cpu=200m,memory=512Mi --requests=cpu=100m,memory=256Mi

# Update the label of pod foo with the value bar
kubectl label pods foo bar=value
```

- `kubectl taint`: Update the taints on one or more nodes. For example:

```
# Add a taint that no pod can tolerate to node node1
kubectl taint nodes node1 key=value:NoSchedule

# Remove from node node1 the taint with key key and effect NoSchedule if one exists
kubectl taint nodes node1 key:NoSchedule-
```

- `kubectl top`: Display Resource (CPU/Memory/Storage) usage. For example:

```
# Show metrics for all nodes
kubectl top node

# Show metrics for a given pod and its containers
kubectl top pod pod_name --containers
```

</details>
