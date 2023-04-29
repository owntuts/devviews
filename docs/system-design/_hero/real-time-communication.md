<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/design-system/long-polling.png) -->

<details open>
<summary><h5>Real Time Communication</h5></summary>

- **Regular polling**: The client repeatedly requests data from the server at fixed intervals, regardless of whether the server has new data or not. This is simple but inefficient and wasteful of resources.
- **Long polling**: 
    1. A request is sent to the server.
    2. The server doesn’t close the connection until it has a message to send.
    3. When a message appears – the server responds to the request with it.
    4. The browser makes a new request immediately.
Long polling reduces the number of requests and improves the responsiveness of the communication.
![long polling](/img/interviews/design-system/long-polling.png)

- **WebSockets**: WebSockets is a protocol that provides full-duplex communication channels over a single TCP connection. WebSockets enables bidirectional and real-time data transfer between clients and servers without the need for polling. WebSockets also supports subprotocols and extensions for further functionality.
- **Server-sent events**: 
    1. A client requests a webpage from a server using regular HTTP (see HTTP above).
    2. The client receives the requested webpage and executes the JavaScript on the page which opens a connection to the server.
    3. The server sends an event to the client when there's new information available.
Server-sent events also supports event types, retry logic, and message IDs.
![Server-sent events](/img/interviews/design-system/ssev.png)

- **Push notifications**: Push notifications are a technique that involves sending messages from a server to a client over a dedicated connection.
Server doesn't push notification to client directly but using a Push service to have more benefits for push notifications, such as cross platform, security, reliability, and analytics. A push service may use some of techniques such as WebSockets, Long polling,... to deliver push notifications to the clients.
![push-notification](/img/interviews/design-system/push-notification.jfif)

- **Streaming**: The client requests data from the server and keeps the connection open for a long time. The server sends data to the client whenever it is available, without waiting for a new request. This is more efficient than polling, but it still uses HTTP and may face some limitations or challenges.
- **WebRTC**: Web Real-Time Communication is a set of APIs that enable peer-to-peer audio, video, and data communication between browsers or devices without any plugins or intermediaries. This is a modern and powerful technique that supports high-quality and low-latency communication, but it may not be compatible with all browsers or networks.

</details>
