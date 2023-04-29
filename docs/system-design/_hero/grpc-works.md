<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![grpc-architecture](/img/interviews/design-system/grpc-architecture.png) -->

<details>
<summary><h5>How gRPC Works</h5></summary>

![grpc-architecture](/img/interviews/design-system/grpc-architecture.png)

1. **Service definition**: The first step in using gRPC is ***defining an interface in a `.proto` file*** (using `ProtoBuf` - protocol buffer language) that describes the methods that a client can call and the messages that are passed between client and server. Protocol buffers are used as the default interface definition language (IDL) and are used to describe both the data format and the service interface.

2. **Code generation**: Once the `.proto` file has been defined, gRPC uses a protocol buffer compiler (`protoc`)  to ***generate client and server code*** in the programming language of your choice (e.g. Java, Python, Ruby, C#, etc.). This generated code provides TypeScript or JavaScript classes to easily conduct client-server communication.

3. **Server implementation**: gRPC server ***implements the service interface*** (based on the code generated in Step #2) and runs a gRPC server to handle client requests.

4. **Client implementation**: A gRPC client that ***creates a stub*** (a local object that implements the service interface generated in Step 2) and uses it to call methods on the server. When making a call to the server, the client sends an instance of the appropriate request message and receives a response message back from the server.

5. **Data transmission**: gRPC uses HTTP/2 as the transport protocol for communication between the client and the server. This provides key features such as flow control, multiplexing, and header compression, resulting in faster and more efficient communication.

6. **Server-side logic**: The server receives the client request and handles it according to the logic defined in the corresponding method implementation. Once the server has processed the request, it creates a response protobuf message and sends it back to the client.

7. **End of communication**: Once the client has received the server response, the connection is closed and the call is complete.

Overall, gRPC simplifies the process of building efficient and scalable client-server communication by using a protocol buffers-based interface definition language, code generation, and an efficient HTTP/2-based transport layer.


</details>
