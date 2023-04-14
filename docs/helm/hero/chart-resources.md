---
sidebar_position: 1000
sidebar_label: Chart Resources
title: Chart Resources
tags:
  - HELM Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Directory Structure</h5></summary>

A Helm chart is a collection of files that describe a related set of Kubernetes resources. A Helm chart may have the following files:

- Chart.yaml: A YAML file containing information about the chart, such as name, version, description, etc. (required)
- values.yaml: The default configuration values for the chart (required)
- values.schema.json: A JSON schema for imposing a structure on the values.yaml file (optional)
- charts/: A directory containing any charts upon which this chart depends (optional)
- crds/: A directory containing custom resource definitions (CRDs) that are installed by the chart (optional)
- templates/: A directory of templates that, when combined with values, will generate valid Kubernetes manifest files (***required & important***)
- templates/NOTES.txt: A plain text file containing short usage notes for the chart (optional)
- templates/hooks.yaml: Hooks are optional scripts allow you to perform additional tasks before or after chart installation, upgrade, or deletion. You can use them to set up databases, configure load balancers, or perform other tasks related to the chart installation. Here's an example of a pre-install hook in a chart (hooks.yaml) that logs a message before installing the chart:
```yaml title="templates/hooks.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: "{{ .Release.Name }}-pre-install"
  labels:
    heritage: "{{ .Release.Service }}"
    release: "{{ .Release.Name }}"
    chart: "{{ .Chart.Name }}-{{ .Chart.Version }}"
    app: "{{ .Chart.Name }}"
spec:
  containers:
    - name: pre-install-logging
      image: busybox
      command: ['sh', '-c', 'echo "Installing {{ .Release.Name }}"']
      restartPolicy: Never

```


</details>
