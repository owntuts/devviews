<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/TCPvsUDP.png) -->

<details>
<summary><h5>TCP vs UDP</h5></summary>

![TCP vs UDP](/img/interviews/design-system/TCPvsUDP.jfif)

In general, UDP is faster than TCP, but TCP is more reliable than UDP.

| TCP | UDP |
| --- | --- |
| Connection-oriented (establishes a connection between two devices before sending data ) | Connectionless (not require a connection before sending data) |
| Reliable and ordered delivery | Unreliable and unordered delivery |
| Error-checking and congestion control | No error-checking or congestion control |
| Slower and more bandwidth-consuming | Faster and more efficient |
| Used for web browsing, email, file transfer, etc. | Used for real-time streaming, gaming, voice over IP, etc. |

- **TCP** is like sending a letter by registered mail. You have to fill out a form, pay a fee, and wait for the recipient to sign for the letter. You can be ***sure that the letter will arrive in the same order and condition*** as you sent it, and you will get a confirmation that it was delivered.

- **UDP** is like sending a postcard by regular mail. You just write your message, put a stamp on it, and drop it in the mailbox. You ***don't know if the postcard will arrive at all***, or if it will arrive in the same order and condition as you sent it. You also don't get any confirmation that it was delivered.

</details>
