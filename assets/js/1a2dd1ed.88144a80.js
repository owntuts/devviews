"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5338],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),k=o,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},34932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={sidebar_position:1e3,sidebar_label:"Socket.IO How It Works",title:"Socket.IO How It Works",tags:["Socket.IO Knowledge"]},i=void 0,s={unversionedId:"socketio/hero/howitworks",id:"socketio/hero/howitworks",title:"Socket.IO How It Works",description:"Socket.IO How It Works",source:"@site/docs/socketio/hero/howitworks.md",sourceDirName:"socketio/hero",slug:"/socketio/hero/howitworks",permalink:"/devviews/interviews/socketio/hero/howitworks",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/socketio/hero/howitworks.md",tags:[{label:"Socket.IO Knowledge",permalink:"/devviews/interviews/tags/socket-io-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Socket.IO How It Works",title:"Socket.IO How It Works",tags:["Socket.IO Knowledge"]},sidebar:"socketioInterviewSidebar",next:{title:"Namespace and Rooms",permalink:"/devviews/interviews/socketio/hero/namespaces-rooms"}},c={},l=[{value:"Examples",id:"examples",level:4}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Socket.IO How It Works")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Socket.IO How It Works",src:n(23126).Z,width:"688",height:"331"})),(0,o.kt)("p",null,"Socket.io is a library that enables real-time, bidirectional and event-based communication between the client (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"socket")),") and the server (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"io")),"). It works by establishing a WebSocket connection whenever possible, and using HTTP long-polling as a fallback. Socket.io attaches to an instance of http.Server and adds handlers to it. It does not listen to a network port on its own; it simply adds socket.io-specific handlers to an existing HTTP server. Socket.io also provides additional features over a plain WebSocket object, such as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"namespaces")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"rooms")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"acknowledgements"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"broadcasting")),"."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"var app = require('http').createServer(handler);\nvar io = require('socket.io')(app);\n\napp.listen(3000);\n\nio.on('connection', function(socket) {\n  console.log('a user connected');\n  socket.on('chat message', function(message) {\n    console.log('message: ' + message);\n    io.emit('chat message', message);\n  });\n});\n\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<script>\n  var socket = io('http://localhost:3000');\n  var input = document.getElementById('input');\n  var button = document.getElementById('button');\n\n  button.addEventListener('click', function() {\n    var message = input.value;\n    socket.emit('chat message', message);\n    input.value = '';\n  });\n<\/script>\n\n"))))}m.isMDXComponent=!0},23126:function(e,t,n){t.Z=n.p+"assets/images/howitworks-f6c5bed4af42026ff12f6a16574a300b.png"}}]);