---
sidebar_position: 1000
sidebar_label: Helm Architecture
title: Helm Architecture
tags:
  - HELM Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Architecture</h5></summary>

![Helm Architecture](/img/interviews/helm/architecture.png)

Here's a step-by-step breakdown of the process:


1. A user creates source files (Templates, Values, Hooks) in YAML to define the Kubernetes resources they want to deploy.
2. Helm takes these source files and uses them to create a Chart Package.
3. The Chart Package is then pushed to a Helm Repository, and a Chart Index file is generated to provide an index of all available charts in the repository.
4. The Tiller Server interacts with the Kubernetes API to install, upgrade, or uninstall a chart from a Kubernetes cluster.
5. When the Tiller Server receives instructions to install a chart, it retrieves the Chart Package from the Helm Repository and unpacks it.
6. The Tiller Server then renders the templates in the Chart Package using the specified Values to generate the Kubernetes resources.

Finally, the Tiller Server sends the Kubernetes resources to the Kubernetes API, which creates the specified resources in the Kubernetes cluster.

Overall, the process allows for repeatable, automated and managed deployment of Kubernetes resources using Helm architecture.

</details>
