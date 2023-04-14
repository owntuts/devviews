---
sidebar_position: 1000
sidebar_label: Helm some commands.md
title: Helm some commands.md
tags:
  - HELM Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details>
<summary><h5>Some Commands</h5></summary>

- `helm install [NAME] [CHART] [flags]`: This command installs a chart archive.
- `helm upgrade [RELEASE] [CHART] [flags]`: This command upgrades a release to a new version of a chart.
- `helm list [flags]`: This command lists all releases.
- `helm rollback [RELEASE] [REVISION] [flags]`: This command rolls back a release to a previous revision.
- `helm uninstall [RELEASE] [flags]`: This command uninstalls a release.
- `helm repo add [NAME] [URL] [flags]`: This command adds a chart repository.
- `helm repo update`: This command updates information of available charts locally from chart repositories.
- `helm search repo [KEYWORD] [flags]`: This command searches for charts in the repositories from the repositories file.

:::note

- A **chart** is a package of pre-configured Kubernetes resources. It ***contains all of the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster***. Charts are created as files laid out in a particular directory tree and can ***be packaged into versioned archives*** to be deployed.

- A **release** is ***an instance of a chart*** running in a Kubernetes cluster. One chart can often be installed many times into the same cluster. And each time it is installed, a new release is created.

- A **repository** (or **repo**) is the place where charts can be collected and shared. It's like a package manager for Helm charts. Repositories can be public or private and can be added to Helm to make the charts they contain available for installation.

:::
</details>
