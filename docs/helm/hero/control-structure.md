---
sidebar_position: 1000
sidebar_label: Control Structure
title: Control Structure
tags:
  - HELM Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Common Control Structure in Helm template expressions</h5></summary>

Some common control structures of template expressions in Helm are:

- `{{ if ... }} {{ end }}`: This structure evaluates a condition and renders the inner template if the condition is true. For example, `{{ if .Values.enabled }} enabled: true {{ end }}` renders `enabled: true` if `.Values.enabled` is true.
- `{{ if ... }} {{ else }} {{ end }}`: This structure evaluates a condition and renders the first inner template if the condition is true, or the second inner template if the condition is false. For example, `{{ if .Values.enabled }} enabled: true {{ else }} enabled: false {{ end }}` renders `enabled: true` or `enabled: false` depending on `.Values.enabled`.
- `{{ range ... }} {{ end }}`: This structure iterates over a list or map and renders the inner template for each element. For example, `{{ range .Values.items }} - {{ . }} {{ end }}` renders a list of items from `.Values.items`.
- `{{ with ... }} {{ end }}`: This structure changes the scope or context for the inner template. It takes an argument and evaluates it. If the argument is not empty, it sets the dot (.) to the value of the argument and executes the inner template. Otherwise, it does nothing. For example, `{{ with .Values.favorite }} color: {{ .color | default "green" }} {{ end }}` renders `color: green` if `.Values.favorite` is not empty and has no color field.
- `{{ define "..." }} {{ end }}`: This structure defines a named template that can be reused later. For example, `{{ define "my-template" }} Hello, {{ .name }}! {{ end }}` defines a template named "my-template" that greets a person by name.
- `{{ template "..." ... }}`: This structure executes a named template with an optional argument. For example, `{{ template "my-template" .Values.person }}` executes the template named "my-template" with `.Values.person` as the argument.

You can learn more about control structures in template expressions in the Helm documentation.

</details>
