---
sidebar_position: 1000
sidebar_label: store state files remotely
title: Store state files remotely
slug: /remotely-statefile
tags:
  - Basic Terraform Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
How to store state files remotely in Terraform?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
Here's a way to store state files remotely on GCS (Google Cloud Storage (GCS) bucket).

```tf title="backend.tf"
terraform {
  backend "gcs" {
    bucket = "<PROJECT_ID>-tf-state"
    prefix = "chap02/for-each"
  }
}
```

When you run `terraform apply` or any other Terraform command that modifies the state. This way, you don't have to worry about losing or syncing your local state files with other users or machines. You can also benefit from the features of GCS, such as versioning, encryption, and access control.

</details>