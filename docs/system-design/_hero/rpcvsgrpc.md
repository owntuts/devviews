<!-- https://brandfolder.com/workbench/extract-text-from-image -->

<details>
<summary><h5>RPC vs gRPC</h5></summary>

Here is a table that compares RPC and gRPC based on some criteria:

| Criteria | RPC | gRPC |
| --- | --- | --- |
| Definition | A general concept for implementing remote procedure call APIs | A specific framework for implementing RPC APIs using protocol buffers and HTTP/2 |
| Communication language | JSON, XML, or other text-based formats | Protocol buffers, a binary serialization format |
| Transport protocol | Various protocols depending on the implementation | HTTP/2, a binary framing protocol with multiplexing and streaming support |
| Programming languages and platforms | Various languages and platforms depending on the implementation | Multiple languages and platforms, such as Java, C#, Go, Python, Node.js, Swift, etc. |
| Features and tools | Various features and tools depending on the implementation | Built-in features and tools for authentication, load balancing, tracing, health checking, service discovery, code generation, etc. |
| Performance and efficiency | Varies depending on the implementation, but generally slower and less efficient than gRPC due to text-based formats and HTTP 1.1 limitations | Higher performance and efficiency than RPC due to binary formats and HTTP/2 advantages |
| Compatibility and interoperability | Varies depending on the implementation, but generally more compatible and interoperable with existing HTTP-based clients and servers | May not be compatible or interoperable with some HTTP-based clients or servers that do not support HTTP/2 or binary data |
| Use cases and suitability | Suitable for some use cases that require human-readable or flexible data formats | Suitable for some use cases that require high performance, low latency, or streaming APIs |

</details>
