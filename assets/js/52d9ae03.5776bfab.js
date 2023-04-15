"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[3805],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,y=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(y,p(p({ref:t},m),{},{components:n})):r.createElement(y,p({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const l={sidebar_position:1e3,sidebar_label:"Helm Example",title:"Helm Example",tags:["HELM Knowledge"]},p=void 0,o={unversionedId:"helm/hero/helm-example",id:"helm/hero/helm-example",title:"Helm Example",description:"Example",source:"@site/docs/helm/hero/helm-example.md",sourceDirName:"helm/hero",slug:"/helm/hero/helm-example",permalink:"/devviews/interviews/helm/hero/helm-example",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/helm/hero/helm-example.md",tags:[{label:"HELM Knowledge",permalink:"/devviews/interviews/tags/helm-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Helm Example",title:"Helm Example",tags:["HELM Knowledge"]},sidebar:"helmInterviewSidebar",previous:{title:"Helm Expression",permalink:"/devviews/interviews/helm/hero/expression"},next:{title:"Helm some commands.md",permalink:"/devviews/interviews/helm/hero/some-commands"}},i={},s=[],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Example")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Create Helm project")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm create my-app\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Add variables in ",(0,a.kt)("inlineCode",{parentName:"strong"},"values.yaml")," file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="my-app\\values.yaml"',title:'"my-app\\values.yaml"'},"image:\n  repository: nginx\n  tag: stable\n  pullPolicy: IfNotPresent\n\nservice:\n  type: ClusterIP\n  port: 80\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create & add deployment clarification in ",(0,a.kt)("inlineCode",{parentName:"strong"},"my-app.yaml")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"touch my-app.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="my-app\\my-app.yaml"',title:'"my-app\\my-app.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n        - name: my-app\n          image: {{ .Values.image.repository }}:{{ .Values.image.tag }}\n          ports:\n            - containerPort: {{ .Values.service.port }}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-app\nspec:\n  type: {{ .Values.service.type }}\n  ports:\n    - port: {{ .Values.service.port }}\n      targetPort: {{ .Values.service.port }}\n  selector:\n    app: my-app\n\n")),(0,a.kt)("p",null,"This YAML definition creates a Kubernetes Deployment and Service that will run your application. The ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ .Values }}")," syntax refers to the values you defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Test your chart by running:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm install my-app ./my-app\n\n")),(0,a.kt)("p",null,"Check the status of the deployment and service using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get deployments\nkubectl get services\n\n")),(0,a.kt)("p",null,"You should see your application running and be able to access it at the service URL.")))}u.isMDXComponent=!0}}]);