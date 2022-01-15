---
sidebar_position: 1000
sidebar_label: Apply CSS
title: Difference Ways To Apply CSS To A Page
slug: /difference-ways-apply-css-page
tags:
  - CSS Interviews
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->

:::quest Question:

\***`ಠ_ಠ`**\* : 
How many ways to **apply CSS styles** to a web page without using Javascript?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 
  There's 3 ways: 
  1. **Inline CSS**: declare CSS in ***`style` property*** of a HTML tag
  ```HTML
  <p style="font-weight:bold;">Bold Font</p>
  ```
  2. **Internal CSS**: Declare CSS in `style` tag inside `HEAD` tag
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <style>
          div {
              color: red;
          }
      </style>
    <head>
  ```
3. **External CSS**: Include CSS file via link tag inside `HEAD` tag
```html
<!DOCTYPE html>
<html>
<head>
    <title>External CSS Example</title>
    <link rel="stylesheet" type="text/css" href="./my-style.css">
<head>
```
</details>