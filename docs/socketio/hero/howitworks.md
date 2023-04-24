---
sidebar_position: 1000
sidebar_label: Socket.IO How It Works
title: Socket.IO How It Works
tags:
  - Socket.IO Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Socket.IO How It Works</h5></summary>

![Socket.IO How It Works](/img/interviews/socket.io/howitworks.png)

Socket.io is a library that enables real-time, bidirectional and event-based communication between the client (***socket***) and the server (***io***). It works by establishing a WebSocket connection whenever possible, and using HTTP long-polling as a fallback. Socket.io attaches to an instance of http.Server and adds handlers to it. It does not listen to a network port on its own; it simply adds socket.io-specific handlers to an existing HTTP server. Socket.io also provides additional features over a plain WebSocket object, such as ***namespaces***, ***rooms***, ***acknowledgements*** and ***broadcasting***.

#### Examples
```js title="server.js"
var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(3000);

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('chat message', function(message) {
    console.log('message: ' + message);
    io.emit('chat message', message);
  });
});


```

```html title="index.html"
<script>
  var socket = io('http://localhost:3000');
  var input = document.getElementById('input');
  var button = document.getElementById('button');

  button.addEventListener('click', function() {
    var message = input.value;
    socket.emit('chat message', message);
    input.value = '';
  });
</script>

```

</details>
