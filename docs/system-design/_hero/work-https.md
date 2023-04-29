<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details>
<summary><h5>How Does HTTP/2 & HTTP/3 Work With HTTPS</h5></summary>

HTTP/2 and HTTP/3 work with **HTTPS**, which is a secure version of HTTP that ***uses TLS (Transport Layer Security) or SSL (Secure Sockets Layer)*** to encrypt the data and prevent eavesdropping or tampering. HTTPS is indicated by the "https://" prefix in the URL and a padlock icon in the browser.

**HTTP/2** and HTTP/3 use different mechanisms to negotiate HTTPS with the server. ***HTTP/2 uses a protocol extension called ALPN (Application-Layer Protocol Negotiation)*** to indicate that it supports HTTP/2 over TLS. ALPN is a TLS extension that allows the client and the server to agree on the application protocol to use over the encrypted connection. ALPN is supported by most modern browsers and servers.

**HTTP/3** uses a new transport protocol called ***QUIC (Quick UDP Internet Connections) to provide HTTPS over UDP (User Datagram Protocol)***. QUIC is a protocol developed by Google that combines the features of TCP, UDP, and TLS. ***QUIC uses UDP as the underlying transport layer***, but provides reliability, security, and multiplexing features for HTTP/3. QUIC also uses TLS 1.3, which is the latest version of TLS that offers improved performance and security. QUIC is still an experimental protocol and not widely supported by browsers and servers yet.

</details>
