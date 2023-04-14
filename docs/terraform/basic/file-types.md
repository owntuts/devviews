---
sidebar_position: 1000
sidebar_label: Terrform File Types
title: Terrform File Types
slug: /terraforn-file-types
tags:
  - Basic Terraform Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
List of all file types in a terraform project and expalain them? Is there an entrypoint file in Terraform?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

- **.tf files**: These are the main files that contain Terraform configuration code written in HCL (HashiCorp Configuration Language). You can use these files to define providers, resources, variables, outputs, modules, etc. ***You can have multiple .tf files in a project, and Terraform will load all of them as a single configuration***. You can also use different file names to organize your code, such as main.tf, variables.tf, output.tf, etc. These are conventions, not requirements¹.
- **.tf.json files**: These are alternative files that contain Terraform configuration code written in JSON format. You ***can use these files instead of .tf files*** if you prefer JSON syntax or if you want to generate configuration dynamically using other tools. You can mix .tf and .tf.json files in the same project, but you cannot have both formats for the same logical configuration file (for example, main.tf and main.tf.json) ¹.
- **.tfvars files**: These are optional files that ***contain variable values*** for your Terraform configuration. You can use these files to assign values to input variables that are declared in your .tf or .tf.json files. ***You can have multiple .tfvars files in a project***, and you can ***specify which ones to use with the `-var-file` flag*** when running Terraform commands (example, `terraform plan -var-file=”prod.tfvars”`). Terraform will automatically load any file named terraform.tfvars or any file with the .auto.tfvars extension.
- **.terraform directory**: This is a hidden directory that is created when you run `terraform init` in your project. This directory ***contains the downloaded plugins*** for your providers and modules, as well as the local state file (if you are not using a remote backend). You should not modify or delete this directory manually, as it may cause errors or inconsistencies with your configuration ³.
- **terraform.tfstate file**: This is a file that contains the current state of your infrastructure managed by Terraform. This file records the IDs and attributes of the resources that Terraform has created, updated, or deleted. Terraform ***uses this file to compare the desired state (from your configuration files) with the actual state (from the APIs)*** and determine what changes need to be made. By default, this file is stored locally in the .terraform directory, but you can also use a remote backend to store it in a shared location.

### Is there an entrypoint file in Terraform?

No, Terraform doesn't have entry point file. 
The command `terraform apply` can be apply to a file or a directory. Thus, put all your file in a directory and apply them.


</details>