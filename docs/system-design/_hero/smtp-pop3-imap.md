<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![smtp_imap_pop3](/img/interviews/design-system/smtp_imap_pop3.png) -->

<details>
<summary><h5>POP3 vs IMAP vs SMTP</h5></summary>

POP3, SMTP and IMAP are three different protocols that deal with emails. POP3 and IMAP are used to read emails from a remote server, while SMTP is used to send emails.

![pop3imap](/img/interviews/design-system/pop3imap.png)

**POP3** stands for Post Office Protocol version 3. It is a simple protocol that downloads emails from the server and stores them locally on the client device. Once the emails are downloaded, they are deleted from the server, unless the user chooses to keep a copy¹². POP3 is suitable for users who only access their emails from one device and want to save their server space. However, POP3 does not sync the emails across multiple devices and does not allow users to manage their folders on the server.

**IMAP** stands for Internet Message Access Protocol. It is a more advanced protocol that syncs emails across multiple devices and keeps them stored on the server. IMAP only downloads the email headers and fetches the full content when the user opens an email. IMAP is suitable for users who want to access their emails from different devices and want to keep their emails up-to-date. IMAP also allows users to manage their folders and labels on the server.

![smtp_imap_pop3](/img/interviews/design-system/smtp_imap_pop3.png)

**SMTP** stands for Simple Mail Transfer Protocol. It is a protocol that transfers emails from one server to another. SMTP is used by both POP3 and IMAP clients to send outgoing emails¹². SMTP is responsible for routing and delivering emails to their destinations. SMTP also performs error-checking and authentication functions.

</details>
