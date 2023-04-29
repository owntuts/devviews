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
