<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/http-handshake.png) -->

<details>
<summary><h5>HTTP 3-Way Handshake Process</h5></summary>

![http handshake](/img/interviews/design-system/http-handshake.png)

The 3-Way Handshake Process is like making a phone call. The client is the caller and the server is the receiver.

- **SYN**: The client dials the server's number and waits for a ringtone. This is like sending a SYN packet to request a connection.

- **SYN-ACK**: The server hears the ringtone and picks up the phone. It says "Hello" and waits for a response. This is like sending a SYN-ACK packet to acknowledge the connection request and send its own sequence number.

- **ACK**: The client hears the server's "Hello" and replies with "Hi, this is X". This is like sending an ACK packet to acknowledge the server's sequence number and establish the connection.

After these three steps, the phone call is connected and the conversation can begin. The 3-Way Handshake Process ensures that both devices are ready to talk and have agreed on the order of the messages .

</details>
