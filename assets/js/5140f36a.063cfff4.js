"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[5898],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_position:1e3,sidebar_label:"Nodejs Stream",title:"Nodejs Stream",tags:["Nodejs Knowledge"]},s=void 0,i={unversionedId:"nodejs/nodejs/stream",id:"nodejs/nodejs/stream",title:"Nodejs Stream",description:"Strean in Nodejs",source:"@site/docs/nodejs/nodejs/stream.md",sourceDirName:"nodejs/nodejs",slug:"/nodejs/nodejs/stream",permalink:"/devviews/interviews/nodejs/nodejs/stream",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/nodejs/nodejs/stream.md",tags:[{label:"Nodejs Knowledge",permalink:"/devviews/interviews/tags/nodejs-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Nodejs Stream",title:"Nodejs Stream",tags:["Nodejs Knowledge"]},sidebar:"nodejsInterviewSidebar",previous:{title:"Nodejs Stream Events & Functions",permalink:"/devviews/interviews/nodejs/nodejs/common-stream-events"},next:{title:"Nodejs single-thread vs multi-threads vs concurrency vs paralell",permalink:"/devviews/interviews/nodejs/nodejs/threadsvs"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Strean in Nodejs")),(0,a.kt)("p",null,"A stream is an abstract interface for working with streaming data in Node.js. There are four fundamental stream types in Node.js: ",(0,a.kt)("strong",{parentName:"p"},"Readable"),", ",(0,a.kt)("strong",{parentName:"p"},"Writable"),", ",(0,a.kt)("strong",{parentName:"p"},"Duplex"),", and ",(0,a.kt)("strong",{parentName:"p"},"Transform")," streams. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A readable stream")," is a source from which data can be consumed, such as a file or a network request.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nconst readable = fs.createReadStream("input.txt");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A writable stream")," is a destination to which data can be written, such as a file or a network response. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nconst readable = fs.createReadStream("input.txt");\nconst writable = fs.createWriteStream("output.txt");\nreadable.pipe(writable); // pipe them together\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A duplex stream")," is both readable and writable, such as a TCP socket. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { Duplex } = require('stream');\n\n// Create a custom duplex stream\nconst myDuplexStream = new Duplex({\n  write(chunk, encoding, callback) {\n    // Process incoming data\n    console.log(`Incoming data: ${chunk.toString()}`);\n\n    // Call the callback to signal that we're done processing the data\n    callback();\n  },\n  read(size) {\n    // Generate and push some data onto the stream\n    const data = Math.round(Math.random() * 100).toString();\n    this.push(data);\n\n    // If we've pushed 10 or more items, stop generating data\n    if (parseInt(data) > 90) {\n      this.push(null); // signal end of stream\n    }\n  }\n});\n\n// Pipe the stream to the console\nmyDuplexStream.pipe(process.stdout);\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A transform stream")," is a type of duplex stream that modifies the data as it passes through, such as a compression or encryption stream.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nconst stream = require("stream");\nconst transform = new stream.Transform({\n  transform(chunk, encoding, callback) {\n    // convert chunk to uppercase\n    const upperChunk = chunk.toString().toUpperCase();\n    // push the transformed chunk to the output\n    this.push(upperChunk);\n    // call the callback when done\n    callback(null, "Done!");\n  }\n});\n// const readable = fs.createReadStream("input.txt");\n// const writable = fs.createWriteStream("output.txt");\n// readable.pipe(transform).pipe(writable);\ntransform.on("data", (chunk) => {\n  console.log(chunk.toString());\n});\ntransform.on("end", () => {\n  console.log("End of stream");\n});\ntransform.write("hello");\ntransform.write("world");\ntransform.end();\n// Output:\n// HELLO\n// WORLD\n// Done!\n// Done!\n// End of stream\n\n'))))}d.isMDXComponent=!0}}]);