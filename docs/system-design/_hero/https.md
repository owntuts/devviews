<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/OSIvsTCP.png) -->

<details>
<summary><h5>How HTTPS Works</h5></summary>

First of all, we need to know these terms:

- **A server** is like a shop that sells products or services to customers over the internet. For example, a website is a service that a server sells to web browsers.
- **A client** is ***like a customer*** who wants to buy the products or services that the server sells. For example, a web browser is a customer who wants to buy a website.
- **A public key** is ***like a lock*** that can lock or unlock a box. A public key can lock a box, but not unlock it.
- **A private key** is ***like a secret key*** that only the owner of the lock knows and keeps safe.
- **A CA** is ***like an agency*** that checks and confirms the identity and ownership of shops. A CA also gives shops certificates that contain their locks and other information. 
- **A certificate** is ***like a license*** that proves who the shop is and what its lock is.

I hope this analogy helps you understand better.

#### How Server Sign Public Key with CA 

![CA](/img/interviews/design-system/CA.png)

1. The server sends its lock & box and some information about itself to the CA. 
2. The CA checks if the server is who it says it is and if it owns the address it uses. 
3. The CA then puts a certificate and other information as well as the CA's signature in the box, lock it & gives to the server.

#### Client-Server Hand Shaking

![https shaking](/img/interviews/design-system/https-shaking.png)

1. When a customer connects to a server
2. The server sends its certificate to the customer. 
3. The customer checks the certificate and verifies that it is valid and issued by a trusted CA. 
    - Client sends server's certificate & info of the current server it's communicating to CA 
    - CA unlocks the certificate using it's secret key & verify that the info of the current server is same as the info in the certificate. So, this's proof of identity, there's no interceptor/hacker/middle man between them. 
4. The customer also gets the server's lock from the certificate. The customer then uses the server's lock to lock some data & share client's secret key and send it back to the server. 
5. The server uses its secret key to unlock the data and send an acknowledgment message to the customer. Now both parties have some data that they can use to lock and unlock more data for this session only. They can communicate securely using client's shared secret key.

</details>


<details>
<summary><h5>HTTPS Implement in Node.js</h5></summary>

HTTPS is the HTTP protocol over TLS/SSL, which provides encryption and authentication for web communication. To implement HTTPS in Node.js, you need to use the built-in https module, which provides both low-level and high-level APIs for creating HTTPS servers and clients. You can also use third-party libraries or frameworks that support HTTPS, such as Express.js, Koa.js, or Fastify.

To create an HTTPS server in Node.js, you need to provide a key and a certificate as options to the https.createServer() method. You can generate a self-signed key and ***certificate for testing purposes using the `openssl` command, or obtain them from a trusted certificate authority***. For example:

```js
// Import the https and fs modules
const https = require("https");
const fs = require("fs");

// Read the key and certificate files
const key = fs.readFileSync("server.key");
const cert = fs.readFileSync("server.cert");

// Create an HTTPS server with the key and certificate
const server = https.createServer({ key, cert });

// Listen for incoming requests
server.on("request", (req, res) => {
  // Write some response headers
  res.writeHead(200, {
    "content-type": "text/html",
  });

  // Write some response body
  res.end("<h1>Hello HTTPS</h1>");
});

// Start listening on port 3000
server.listen(3000);
```

To create an HTTPS client in Node.js, you can use the https.request() or https.get() methods, which are similar to the http.request() and http.get() methods, but use HTTPS by default. For example:

```js
// Import the https module
const https = require("https");

// Create an HTTPS request to example.com
const req = https.request(
  {
    hostname: "example.com",
    path: "/",
    method: "GET",
  },
  (res) => {
    // Handle the response headers
    console.log(res.statusCode);
    console.log(res.headers);

    // Handle the response body
    res.setEncoding("utf8");
    let data = "";
    res.on("data", (chunk) => {
      // Append each chunk to the data string
      data += chunk;
    });
    res.on("end", () => {
      // Log the entire response body
      console.log(data);
    });
  }
);

// Handle any errors in the request
req.on("error", (err) => console.error(err));

// End the request
req.end();
```

</details>
