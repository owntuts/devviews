---
sidebar_position: 1000
sidebar_label: Helm Expression
title: Helm Expression
tags:
  - HELM Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Common Functions in Helm template expressions</h5></summary>

There are many useful commands and functions that you can use in template expressions in Helm. Here are some examples:

- `{{ .Values }}`: This command accesses the values passed into the chart. For example, `{{ .Values.image.tag }}` refers to the value of `image.tag` in the `values.yaml` file.
- `{{ .Release }}`: This command provides information about the release. For example, `{{ .Release.Name }}` refers to the name of the release, and `{{ .Release.Namespace }}` refers to the namespace of the release.
- `{{ .Chart }}`: This command provides information about the chart. For example, `{{ .Chart.Name }}` refers to the name of the chart, and `{{ .Chart.Version }}` refers to the version of the chart.
- `{{ .Files }}`: This command provides access to files in the chart. For example, `{{ .Files.Get "config.toml" }}` reads the file `config.toml` in the chart and returns its contents as a string.
- `{{ .Capabilities }}`: This command provides information about the capabilities of Kubernetes cluster. For example, `{{ .Capabilities.APIVersions.Has "apps/v1" }}` returns true if the cluster supports the API version `apps/v1`.
- `{{ .Template }}`: This command provides information about the current template. For example, `{{ .Template.Name }}` refers to the name of the template file, and `{{ .Template.BasePath }}` refers to the base path of the template file.
- `{{ include "subchart1.labels" . }}`: This function includes another template file and passes it a context. For example, this function includes the template defined in file `templates/_helpers.tpl` from the subchart named `subchart1` and passes it the current context (`.`, which is a dot).
- `{{ toYaml .Values | indent 2 }}`: This function converts a value to YAML format and indents it by 2 spaces. For example, this function converts the values in `.Values` to YAML and indents them by 2 spaces.
- `{{ default "foo" .Values.bar }}`: This function returns a default value if a value is empty. For example, this function returns `"foo"` if `.Values.bar` is empty or undefined.
- `{{ quote .Values.name }}`: This function wraps a value in double quotes. For example, this function returns `"Alice"` if `.Values.name` is `Alice`.

You can learn more about commands and functions in template expressions in the Helm documentation.

</details>
