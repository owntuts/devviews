---
sidebar_position: 1000
sidebar_label: Helm Example
title: Helm Example
tags:
  - HELM Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details>
<summary><h5>Example</h5></summary>

**1. Create Helm project**
```sh
helm create my-app
```
**2. Add variables in `values.yaml` file**

```yaml title="my-app\values.yaml"
image:
  repository: nginx
  tag: stable
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80
```
3. **Create & add deployment clarification in `my-app.yaml`**

```sh
touch my-app.yaml
```

```yaml title="my-app\my-app.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app
          image: {{ .Values.image.repository }}:{{ .Values.image.tag }}
          ports:
            - containerPort: {{ .Values.service.port }}
---
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort: {{ .Values.service.port }}
  selector:
    app: my-app

```

This YAML definition creates a Kubernetes Deployment and Service that will run your application. The `{{ .Values }}` syntax refers to the values you defined in the `values.yaml` file.

**4. Test your chart by running:**

```sh
helm install my-app ./my-app

```

Check the status of the deployment and service using `kubectl`.

```sh
kubectl get deployments
kubectl get services

```
You should see your application running and be able to access it at the service URL.

</details>
