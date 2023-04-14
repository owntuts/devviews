---
sidebar_position: 1000
sidebar_label: Variable.tf vs tfvar file
title: Variable.tf vs tfvar file
slug: /variable.tf-vs-tfvar-file
tags:
  - Basic Terraform Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
variables.tf file (contains `variable` declaration) vs .tfvars file? Which is Variable Loading Precedence?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
A variables.tf file is a Terraform configuration file that contains one or more variable blocks.
- A `variable` block is for ***declaring a variable and optionally assigning a default value***. Then, you can use these variables in other .tf files.

```tf title= "variables.tf"
variable "region" {
  type        = string
  description = "Default Region"
  default     = "us-central1"
}
```

- A **.tfvars file** is for ***assigning a real value*** to a variable that can be used in the configuration.

```tf title="terraform.tfvars"
region = "us-east1"
```
Apply .tfvars file when running

```sh
terraform plan -var-file=”prod.tfvars”
```

- You can also use other methods to assign values to variables, such as environment variables or command-line flags. For example, you can use the `-var` flag to assign a value to a variable when running `terraform apply`:

```sh
terraform apply -var="region=us-west1"
```
---

### Variable Loading Precedence
![Variable Loading Precedence](/img/interviews/terraform/loading-vars.png)


</details>