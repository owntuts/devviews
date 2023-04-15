"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[4745],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),m=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(t),s=r,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||a;return t?o.createElement(k,l(l({ref:n},u),{},{components:t})):o.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<a;m++)l[m]=t[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9338:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return m}});var o=t(3117),r=(t(7294),t(3905));const a={sidebar_position:1e3,sidebar_label:"Common Commands",title:"Common Commands",tags:["Kubernetes Knowledge"]},l=void 0,i={unversionedId:"kubernetes/hero/common-commands",id:"kubernetes/hero/common-commands",title:"Common Commands",description:"Common Commands in Kubernetes",source:"@site/docs/kubernetes/hero/common-commands.md",sourceDirName:"kubernetes/hero",slug:"/kubernetes/hero/common-commands",permalink:"/devviews/interviews/kubernetes/hero/common-commands",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/kubernetes/hero/common-commands.md",tags:[{label:"Kubernetes Knowledge",permalink:"/devviews/interviews/tags/kubernetes-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Common Commands",title:"Common Commands",tags:["Kubernetes Knowledge"]},sidebar:"kubernetesInterviewSidebar",previous:{title:"Kubernetes Architecture",permalink:"/devviews/interviews/kubernetes/hero/architecture"},next:{title:"Kubernetes Ingress Models",permalink:"/devviews/interviews/kubernetes/hero/ingress-models"}},p={},m=[],u={toc:m},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("h5",null,"Common Commands in Kubernetes")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," is a tool that allows you to run commands against Kubernetes clusters. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"deploy applications, inspect and manage cluster resources, and view logs")),"."),(0,r.kt)("p",null,"Some common Kubernetes commands and examples for each are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply"),": Apply a configuration to a resource by filename or stdin. The resource name must be specified. This command creates the resource if it does not exist yet. To use apply, always create the resource initially with either ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create --save-config"),". For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Create a pod using the data in pod.yaml\nkubectl apply -f ./pod.yaml\n\n# Update a pod using the data in pod.json\nkubectl apply -f ./pod.json\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create"),": Create a resource from a file or from stdin. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Create a pod using the data in pod.json\nkubectl create -f ./pod.json\n\n# Create a service using the data passed into stdin\ncat service.yaml | kubectl create -f -\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl delete"),": Delete resources by filenames, stdin, resources and names, or by resources and label selector. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Delete a pod using the type and name specified in pod.yaml\nkubectl delete -f ./pod.yaml\n\n# Delete all pods and services with label app=nginx\nkubectl delete pods,services -l app=nginx\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl describe"),": Show details of a specific resource or group of resources. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Show details of a pod\nkubectl describe pods my-pod\n\n# Show details of all nodes\nkubectl describe nodes\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl edit"),": Edit a resource on the server. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Edit a deployment named nginx-deployment\nkubectl edit deployment/nginx-deployment\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl exec"),": Execute a command in a container. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Run ls command in a container named my-container in a pod named my-pod\nkubectl exec my-pod -c my-container -- ls /\n\n# Get an interactive shell to a container named my-container in a pod named my-pod\nkubectl exec -it my-pod -c my-container -- /bin/bash\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get"),": Display one or many resources. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Get details of a pod named my-pod\nkubectl get pods my-pod\n\n# Get details of all pods in JSON format\nkubectl get pods -o json\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl logs"),": Print the logs for a container in a pod. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Print the logs for a container named my-container in a pod named my-pod\nkubectl logs my-pod -c my-container\n\n# Print the logs for the previous instance of a container named my-container in a pod named my-pod\nkubectl logs my-pod -c my-container --previous\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl patch"),": Update field(s) of a resource using strategic merge patch, a JSON merge patch, or a JSON patch. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Partially update a node using strategic merge patch\nkubectl patch node k8s-node-1 -p \'{"spec":{"unschedulable":true}}\'\n\n# Partially update an array element of a deployment using JSON merge patch\nkubectl patch deployment valid-deployment  --type json   -p=\'[{"op": "replace", "path": "/spec/template/spec/containers/0/image", "value":"new image"}]\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl port-forward"),": Forward one or more local ports to a pod. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Listen on port 8888 locally and forward to port 5000 in the pod named my-pod\nkubectl port-forward my-pod 8888:5000\n\n# Listen on port 8888 on all addresses locally and forward to port 5000 in the pod named my-pod\nkubectl port-forward --address 0.0.0.0 my-pod 8888:5000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl scale"),": Set a new size for a Deployment, ReplicaSet, Replication Controller, or StatefulSet. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Scale up/down a deployment named nginx-deployment to 3 replicas\nkubectl scale deployment/nginx-deployment --replicas=3\n\n# Scale up/down all deployments matching app=nginx label selector to 4 replicas\nkubectl scale deployments -l app=nginx --replicas=4\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl rollout"),": Manage the rollout of a resource. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# View the rollout history of a deployment named nginx-deployment\nkubectl rollout history deployment/nginx-deployment\n\n# Rollback to the previous revision of a deployment named nginx-deployment\nkubectl rollout undo deployment/nginx-deployment\n\n# Pause the rollout of a deployment named nginx-deployment\nkubectl rollout pause deployment/nginx-deployment\n\n# Resume the rollout of a deployment named nginx-deployment\nkubectl rollout resume deployment/nginx-deployment\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl run"),": Run a particular image on the cluster. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Start a single instance of nginx pod\nkubectl run nginx --image=nginx\n\n# Start a pod of busybox and keep it in the foreground, don\'t restart it if it exits\nkubectl run -i -t busybox --image=busybox --restart=Never\n\n# Start the nginx container using a specified port and env variable\nkubectl run nginx --image=nginx --port=80 --env="DOMAIN=cluster"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl set"),": Set specific features on objects. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Set a new image for all containers in the pods of a deployment named nginx-deployment\nkubectl set image deployment/nginx-deployment nginx=nginx:1.9.1\n\n# Update the image and resources request and limit for all containers in the pods of a deployment named nginx-deployment\nkubectl set resources deployment nginx-deployment -c=nginx --limits=cpu=200m,memory=512Mi --requests=cpu=100m,memory=256Mi\n\n# Update the label of pod foo with the value bar\nkubectl label pods foo bar=value\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl taint"),": Update the taints on one or more nodes. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Add a taint that no pod can tolerate to node node1\nkubectl taint nodes node1 key=value:NoSchedule\n\n# Remove from node node1 the taint with key key and effect NoSchedule if one exists\nkubectl taint nodes node1 key:NoSchedule-\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl top"),": Display Resource (CPU/Memory/Storage) usage. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Show metrics for all nodes\nkubectl top node\n\n# Show metrics for a given pod and its containers\nkubectl top pod pod_name --containers\n"))))}c.isMDXComponent=!0}}]);