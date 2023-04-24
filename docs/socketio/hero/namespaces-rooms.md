---
sidebar_position: 1000
sidebar_label: Namespace and Rooms
title: Namespace and Rooms
tags:
  - Socket.IO Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Namespace and Rooms</h5></summary>

![Namespace and Rooms](/img/interviews/socket.io/namespace-rooms.png)

**Namespaces** are a way to split the logic of your application over a single shared connection. ***Each namespace has its own event handlers, rooms and middlewares***. 

**Rooms** are subdivisions of namespaces that can be created by the server. This allows you to broadcast data to a subset of related sockets.

For example, let's say you have a chat application with different topics. You can create one namespace per topic, and then create rooms within each namespace for different subtopics or groups. Here is a possible code snippet:

```javascript
//server.js
var io = require('socket.io')(3000);

// create a namespace for sports
var sports = io.of('/sports');

// handle connection events for sports namespace
sports.on('connection', function(socket) {
  console.log('a user connected to sports');
  // join a room for soccer fans
  socket.join('soccer');
  // send a message to the soccer room
  sports.to('soccer').emit('message', 'Hello soccer fans!');
  // handle chat messages from clients
  socket.on('chat', function(data) {
    // broadcast the message to the same room
    sports.to(data.room).emit('message', data.message);
  });
});

// create a namespace for movies
var movies = io.of('/movies');

// handle connection events for movies namespace
movies.on('connection', function(socket) {
  console.log('a user connected to movies');
  // join a room for comedy fans
  socket.join('comedy');
  // send a message to the comedy room
  movies.to('comedy').emit('message', 'Hello comedy fans!');
  // handle chat messages from clients
  socket.on('chat', function(data) {
    // broadcast the message to the same room
    movies.to(data.room).emit('message', data.message);
  });
});
```

On the client side, you need to connect to the specific namespace and room you want to join. For example:

```javascript
//client.js
// connect to the sports namespace
var sports = io('/sports');

// listen for messages from the server
sports.on('message', function(data) {
  console.log(data);
});
// send a chat message to the soccer room
sports.emit('chat', {room: 'soccer', message: 'I love soccer!'});

// connect to the movies namespace
var movies = io('/movies');
// listen for messages from the server
movies.on('message', function(data) {
  console.log(data);
});
// send a chat message to the comedy room
movies.emit('chat', {room: 'comedy', message: 'I love comedy!'});
```
</details>
