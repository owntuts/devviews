<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/OSIvsTCP.png) -->

<details>
<summary><h5>How Webrtc Works</h5></summary>

![webrtc-aechitecture](/img/interviews/design-system/webrtc-aechitecture.png)

WebRTC is a technology that enables web browsers and mobile applications to communicate directly with each other in real-time, without any plugins or servers. WebRTC can be used for voice chat, video call, or data share applications. Here are the basic steps of how WebRTC works:

- webRTC purpose is to establish a peer to peer connection (channel) directly between 2 browsers.

- But it can't because `NAT` device maps private IPs to dynamic public IPs so two peers can't know private IP addresses of each other.

- So before establishing a peer-peer channel, each peer need to ask `STUN` server for it's public IPs.
And then peers exchange the info (`ICE` candidates(IPs, port,...) - all posible communication options  that the other peer can connect to) using `SDP protocol` via `Signaling Server`.

- In reality, if network fails, NAT can't transfer data peer-peer, data will be delivered via `TURN` server (relay server) (communication may be relayed and more expensive). So, `ICE` candidates may contain private IP address, public IP address or Relay server IP address.

#### Terms

- **NAT (Network Address Translation)** is a method of ***mapping an IP address*** space into another, it allows multiple devices in a private network to use one public IP address to communicate with the Internet or other public networks. `NAT` is usually integrated in router devices but it can also be implemented on other devices, such as firewalls, proxies, or load balancers.

- **STUN (Session Traversal Utilities for NAT)** is a protocol to ***discover your public address*** and determine any restrictions in your router that would prevent a direct connection with a peer. STUN works by sending a request from a client to a STUN server on the Internet. The STUN server replies with the client’s public IP address and port, as well as the type of NAT device that is in between.

- **TURN (Traversal Using Relays around NAT)** is a protocol that ***assists in traversal*** of network address translators (NAT) or firewalls for multimedia applications, such as STUN or direct connectivity, ***fail to establish a peer-to-peer connection***. Then, the connection will come through TURN server and relaying all information through that server & the info of that connection will diliver to the other peer after all.

- An **ICE candidate** contains information such as the ***IP address, port, protocol, and type of the candidate***. 
    - There are different types of candidates, such as ***host, server reflexive, relayed, or end-of-candidates***. 
        - A **host candidate** is the actual IP address and port of the peer. 
        - A **server reflexive candidate** is the public IP address and port of the peer as seen by a `STUN` (Session Traversal Utilities for `NAT`) server. 
        - A **relayed candidate** is the IP address and port allocated by a `TURN` (Traversal Using Relays around `NAT`) server. An end-of-candidates indicator signals that all candidates have been sent.

- A **signaling server** (usualy using Webscoket Server) is a server that ***helps peers to find and communicate with each other***. A signaling server does not deal with the media traffic itself, but rather with the ***exchange of information that is needed to set up the connection***. It's like you & your friend need to ***exchange personal info*** via a third-party service, such as a social media app before meeting and talking directly.

</details>
