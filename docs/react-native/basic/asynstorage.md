---
sidebar_position: 1000
sidebar_label: AsyncStorage
title: AsyncStorage
slug: /asynstorage
tags:
  - Basic React Native Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Async Storage in React Native? dos and donts?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
Async Storage is a local storage solution that is available in React Native. It allows you to save key-value pairs in local storage on the user's device, persisting even if the app is closed or the device is restarted. Here are some dos and don'ts when using Async Storage in React Native:

**Dos**:

Use it for small, simple data: Async Storage is optimized for small amounts of simple data, such as user preferences or authorization tokens.

Use it to cache data that is expensive to retrieve: If you have data that is expensive to retrieve from a server or database, you can store it in Async Storage to avoid unnecessary requests and improve app performance.

Use it in combination with other storage solutions: Async Storage is just one option for local storage in React Native. You can also use other storage solutions, such as SQLite or Realm, depending on your data needs.

**Don'ts**:

Don't use it for large or complex data: Async Storage is not optimized for large or complex data, such as images or videos. Consider storing these types of data in a cloud storage service or on the device's file system.

Don't store sensitive data: Async Storage is not secure and should not be used to store sensitive data, such as passwords or credit card information. Use other security measures, such as the Keychain API or encryption, to secure sensitive information.

Don't use it as the sole storage solution: Async Storage should only be used for local storage on the user's device. It should not be used as the sole storage solution for your app, as the data can be cleared by the user or when the device runs out of storage space.
</details>