---
sidebar_position: 1000
sidebar_label: How Terraform Work
title: How Terraform Work
slug: /how-terraforn-work
tags:
  - Basic Terraform Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
Please explain How Terraform works?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
![How it works](/img/interviews/terraform/how-it-work.png)

- **Step 1**: Terraform takes two types of input resources:
  - ***Your configuration files (your desired state)***: `.tf` files in your project.
  - ***current state (which is managed by Terraform)***: Terraform also keeps track of your infrastructure state in a file called `terraform.tfstate` on the way.
- **Step 2**: With these info the Terraform then ***creates a plan*** of what resources needs to be created/changed/removed.
- **Step 3**: Terraform Contacts to providers (IaaS (like AWS, GCP, Azure), PaaS (like Heroku, Kubernetes) or SaaS services (like Cloudflare)). Providers expose resources, which makes it possible to create infrastructure across all this platforms.

---

### Here's steps to use Terraform

1. You write configuration files using HCL (HashiCorp Configuration Language) syntax in a folder. These files should ***specify the provider, resources, variables, outputs, etc***. that you want to use.
2. You initialize your working directory by running `terraform init`. This command will ***download the required plugins*** for your provider and prepare your folder for other commands.
3. You ***validate*** your configuration files by running `terraform validate`. This command will check for any syntax errors or configuration issues.
4. You ***plan your changes*** by running `terraform plan`. This command will show you what actions Terraform will take to create or update your infrastructure based on your configuration files. You can also save the plan output to a file for later use.
5. You apply your changes by running `terraform apply`. This command will ***execute the actions*** shown in the plan and create or update your infrastructure. You can also use a saved plan file as an argument for this command. You will be prompted to confirm the changes before applying them.
6. You ***destroy your infrastructure*** by running `terraform destroy`. This command will delete all the resources that were created by Terraform. You will be prompted to confirm the destruction before proceeding.

### What is plugin
Terraform uses providers (plugins) to communicate with the APIs of the platforms and services that you want to manage. There are thousands of providers available for Terraform, covering many types of resources and services. You can find all publicly available providers on the Terraform Registry¹.

### What is state
Terraform also keeps track of your infrastructure state in a file called terraform.tfstate. This file records the current state of your resources and their attributes. Terraform uses this file to compare the desired state (from your configuration files) with the actual state (from the APIs) and determine what changes need to be made. You can store this file locally or remotely using a backend.

</details>