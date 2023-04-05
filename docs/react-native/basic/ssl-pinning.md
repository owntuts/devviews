---
sidebar_position: 1000
sidebar_label: SSL Pinning
title: SSL Pinning
slug: /ssl-pinning
tags:
  - Basic React Native Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Explain about SSL Pinning?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
SSL pinning is a security mechanism that helps prevent man-in-the-middle (MITM) attacks by ensuring that the client only communicates with the server it trusts. It works by associating a specific SSL/TLS certificate with a specific hostname or public key. When the client connects to the server, it checks the certificate against the pinned certificate(s) to ensure that it is communicating with the correct server.
### Here is how it work

[Server] ---certificate---> [Client]

Server sends many root CAs to client, but which is trusted?


1. Client obtain the SSL/TLS certificate from the server
2. Extract the public key from the certificate
3. Client generate it's private/public key & associate public key with trusted CAs only.
4. Each time server send CAs, it compares the SSL/TLS certificate's hash with the expected hash that is stored in the application code to verify the certificate's authenticity.


</details>