<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![Schema-websockets](/img/interviews/system-design/Schema-websockets-1.jpg) -->

<details>
<summary><h5>How Websocket Works</h5></summary>

#### Step1: WebSocket handshake

![websockets](/img/interviews/design-system/websockets.jpg)

A **WebSocket handshake** is a process of establishing a connection between a client and a server using the WebSocket protocol. It involves the following steps:

- The client sends an HTTP request to the server with some special headers, such as `Upgrade: websocket`, `Connection: Upgrade`, and `Sec-WebSocket-Key`.
- The server checks if the request is valid and compatible with the WebSocket protocol. If so, it computes a response key by concatenating the client's key with a special GUID, taking the SHA-1 hash of it, and encoding it in base64.
- The server sends an HTTP response to the client with the status code `101 Switching Protocols` and some special headers, such as `Upgrade: websocket`, `Connection: Upgrade`, and `Sec-WebSocket-Accept` with the computed response key.
- The client verifies that the response key matches its expected value (The keys is also to prevent a caching proxy from re-sending a previous WebSocket conversation later). If so, it understands that the communication protocol has been upgraded to WebSocket, and the handshake is completed.
Here is an example of a client handshake request:
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Origin: http://example.com
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```
And here is an example of a server handshake response:
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: chat
```

#### Step2: Communication

The WebSocket client and server can transmit data to each other in real-time, using the WebSocket Protocol (pub/sub via TCP (not HTTP)).

</details>
