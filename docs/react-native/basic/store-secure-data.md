---
sidebar_position: 1000
sidebar_label: Store Secure Data
title: Store Secure Data
slug: /store-secure-data
tags:
  - Basic React Native Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What you should you to store sensitive data like Token storage, Secrets in React Native?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
When it comes to storing sensitive data like tokens, passwords or secrets in a React Native app, it is important to prioritize security and choose a secure storage solution. Here are some options:

**Keychain API**: The Keychain API is a secure password management system provided by Apple for iOS devices. It allows you to securely store and retrieve sensitive information, such as passwords, access tokens, and encryption keys.

**Secure Store**: Secure Store is a built-in module in Expo that provides a simple interface to encrypt and securely store sensitive data in key-value pairs on the device.

**Realm Database**: Realm Database is a mobile database solution that provides built-in encryption and data-at-rest protection. It allows for secure storage of sensitive data with fine-grained access control and data isolation.

**SQLite Database**: SQLite is another database solution that is commonly used for storing data in local storage. It includes built-in encryption and allows for secure storage of sensitive data.

**Encryption Libraries**: There are various encryption libraries available for React Native, such as crypto-js and react-native-crypto. These libraries can be used to encrypt and decrypt sensitive data before storing it in local storage.

It is important to choose a storage solution that meets your specific security needs and the requirements of your app. You should also implement additional security measures such as using secure communication protocols (HTTPS), hashing and salting passwords, and limiting access to sensitive data to authorized users.

</details>