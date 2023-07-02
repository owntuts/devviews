"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[9460],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),c=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(m.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,k=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4212:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=t(3117),a=(t(7294),t(3905));const i={sidebar_position:1e3,sidebar_label:"Dockerfile-commands",title:"Dockerfile-commands",tags:["Docker Knowledge"]},o=void 0,l={unversionedId:"docker/hero/dockerfile-commands",id:"docker/hero/dockerfile-commands",title:"Dockerfile-commands",description:"Dockerfile-commands",source:"@site/docs/docker/hero/dockerfile-commands.md",sourceDirName:"docker/hero",slug:"/docker/hero/dockerfile-commands",permalink:"/devviews/interviews/docker/hero/dockerfile-commands",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/docker/hero/dockerfile-commands.md",tags:[{label:"Docker Knowledge",permalink:"/devviews/interviews/tags/docker-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Dockerfile-commands",title:"Dockerfile-commands",tags:["Docker Knowledge"]},sidebar:"dockerInterviewSidebar",previous:{title:"docker-compose",permalink:"/devviews/interviews/docker/hero/docker-compose"},next:{title:"Docker Interviews",permalink:"/devviews/interviews/docker/docker-from-zero-hero"}},m={},c=[{value:"Commands for building images:",id:"commands-for-building-images",level:4},{value:"Commands for configuring images:",id:"commands-for-configuring-images",level:4},{value:"Miscellaneous commands",id:"miscellaneous-commands",level:4},{value:"The order of execution",id:"the-order-of-execution",level:4}],s={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Dockerfile-commands")),(0,a.kt)("h4",{id:"commands-for-building-images"},"Commands for building images:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FROM"),": Specifies the base image for the subsequent instructions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RUN"),": Runs a command inside the container to install packages, configure services or applications, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ARG"),": Defines an argument to be used in ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WORKDIR"),": Sets the working directory for future instructions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"COPY")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD"),": Copies a file or directory from the host machine to the container.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Use the official node image as the base image\nFROM node:14\n\n# Define an argument called NODE_ENV with a default value of production\nARG NODE_ENV=production\n\n# Set the environment variable NODE_ENV to the value of the argument NODE_ENV\nENV NODE_ENV $NODE_ENV\n\n# Set the working directory to /app\nWORKDIR /app\n\n# Copy the package.json and package-lock.json files from the host to the working directory\nCOPY package*.json ./\n\n# Run the npm install command to install dependencies\nRUN npm install\n\n# Copy the rest of the files from the host to the working directory\nCOPY . .\n\n# Expose port 3000 for the app\nEXPOSE 3000\n\n# Run the npm start command to start the app\nCMD [ "npm", "start" ]\n')),(0,a.kt)("h4",{id:"commands-for-configuring-images"},"Commands for configuring images:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EXPOSE"),": Declares what port(s) should be exposed by the container.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# To expose port 80 of the container\nEXPOSE 80\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENV"),": Set environment variable inside the container.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# To set the working directory as an environment variable\nENV workdirectory /usr/node\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LABEL"),": Provides metadata to an image.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# To add some labels to the image\nLABEL "author"="FOSS TechNIx"\nLABEL "Date"="2020-09-29"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USER"),": Specifies the user or UID to use when running the image.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# To run the image as user ubuntu\nUSER ubuntu\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT"),": Specifies the command to be run when the container starts.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# To run a python script as the entrypoint\nENTRYPOINT ["python", "app.py"]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CMD"),": Specifies the arguments to be passed to the entrypoint command.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# To pass some arguments to the python script\nCMD ["--port", "8080"]\n')),(0,a.kt)("h4",{id:"miscellaneous-commands"},"Miscellaneous commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LABEL"),": Provides metadata to an image.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# To add some labels to the image\nLABEL "author"="FOSS TechNIx"\nLABEL "Date"="2020-09-29"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ONBUILD"),": Specifies a command to execute when the image is used as a base image.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# To run a command when another image is built on top of this image\nONBUILD RUN npm install\n")),(0,a.kt)("h4",{id:"the-order-of-execution"},"The order of execution"),(0,a.kt)("p",null,"Here's a list of Dockerfile commands in the order they are typically executed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FROM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ARG")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RUN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"COPY")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WORKDIR")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RUN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EXPOSE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENV")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LABEL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CMD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ONBUILD")))))}p.isMDXComponent=!0}}]);