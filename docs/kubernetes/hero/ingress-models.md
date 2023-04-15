---
sidebar_position: 1000
sidebar_label: Kubernetes Ingress Models
title: Kubernetes Ingress Models
tags:
  - Kubernetes Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Kubernetes Ingress Models</h5></summary>

**Kubernetes ingress models** are the ways to ***expose HTTP and HTTPS routes*** from outside the cluster to services within the cluster. Ingress models depend on the ingress controller that implements the ingress resource.

**An ingress controller** is a software component that runs in the cluster and ***configures an external load balancer or a reverse proxy according to the ingress rules***. There are many ingress controllers available for Kubernetes, such as nginx, traefik, kong, contour, istio, etc. Each ingress controller may have different features and configuration options.

Some of the common ingress models are:

- **Single service ingress**: This model ***exposes a single service*** to the outside world using an ingress resource. The ingress resource specifies a host name and a path that map to the service. For example:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: single-service-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-service
            port:
              number: 80
```

- **Simple fanout**: This model exposes multiple services under the same host name using different paths. The ingress resource specifies ***a host name and multiple paths that map to different services***. 

![Simple fanout](/img/interviews/kubernetes/simple-fanout.png)

For example:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: simple-fanout-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /foo
        pathType: Prefix
        backend:
          service:
            name: foo-service
            port:
              number: 80
      - path: /bar
        pathType: Prefix
        backend:
          service:
            name: bar-service
            port:
              number: 80
```

- **Name-based virtual hosting**: This model exposes ***multiple services under different host names using the same IP address***. The ingress resource specifies multiple host names and paths that map to different services. For example:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: name-based-virtual-hosting-ingress
spec:
  rules:
  - host: foo.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: foo-service
            port:
              number: 80
  - host: bar.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: bar-service
            port:
              number: 80
```

- **TLS/SSL termination**: This model enables secure communication between clients and services ***using TLS/SSL certificates***. The ingress resource specifies a host name, a path, and a secret that contains the TLS/SSL certificate and key. The ingress controller terminates the TLS/SSL connection and forwards the plain HTTP request to the service. For example:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tls-termination-ingress
spec:
  tls:
  - hosts:
    - example.com
    secretName: tls-secret # contains tls.crt and tls.key for example.com domain 
  rules:
  - host: example.com 
    http:
      paths:
      - path: /
        pathType: Prefix 
        backend:
          service:
            name: my-service 
            port:
              number: 80 
```

</details>
