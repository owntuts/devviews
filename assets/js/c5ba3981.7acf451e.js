"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6021],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88978:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=t(83117),a=(t(67294),t(3905));const o={sidebar_position:1e3,sidebar_label:"Kubernetes Workload Resources",title:"Kubernetes Workload Resources",tags:["Kubernetes Knowledge"]},s=void 0,l={unversionedId:"kubernetes/hero/workload-resources",id:"kubernetes/hero/workload-resources",title:"Kubernetes Workload Resources",description:"Kubernetes Workload Resources",source:"@site/docs/kubernetes/hero/workload-resources.md",sourceDirName:"kubernetes/hero",slug:"/kubernetes/hero/workload-resources",permalink:"/devviews/interviews/kubernetes/hero/workload-resources",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/kubernetes/hero/workload-resources.md",tags:[{label:"Kubernetes Knowledge",permalink:"/devviews/interviews/tags/kubernetes-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Kubernetes Workload Resources",title:"Kubernetes Workload Resources",tags:["Kubernetes Knowledge"]},sidebar:"kubernetesInterviewSidebar",previous:{title:"Kubernetes Resources",permalink:"/devviews/interviews/kubernetes/hero/resources"},next:{title:"Kubernetes From Zero To Hero",permalink:"/devviews/interviews/kubernetes/kubernetes-from-zero-to-hero"}},i={},u=[],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Kubernetes Workload Resources")),(0,a.kt)("p",null,"Here is a brief explanation of each resource type you asked for, along with some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pods"),": Pods are the smallest and simplest unit of computing in Kubernetes. A pod ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"consists of one or more containers that share the same storage and network resources")),", and a specification for how to run the containers. A pod is usually created and managed by a higher-level resource, such as a deployment or a stateful set. An example of a pod configuration file is:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    ports:\n    - containerPort: 80\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Replica sets"),": A replica set ensures that a ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"specified number of pod replicas are running at any given time")),". However, a deployment is a higher-level concept that manages replica sets and provides declarative updates to pods along with a lot of other useful features. Therefore, we recommend using deployments instead of directly using replica sets, unless you require custom update orchestration or don't require updates at all. An example of a replica set configuration file is:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: my-replicaset\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx\n        ports:\n        - containerPort: 80\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deployments"),": Deployments are the recommended way to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"manage the creation and scaling of pods")),". A deployment provides declarative updates for pods and replica sets. You describe the desired state of your pods in a deployment, and the deployment controller changes the actual state to match the desired state at a controlled rate. An example of a deployment configuration file is:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx\n        ports:\n        - containerPort: 80\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stateful sets"),": Stateful sets are the workload API object used to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"manage stateful applications")),". Similar but unlike a deployment, a stateful set maintains a sticky identity for each of their pods. Each pod has a persistent identifier that it maintains across any rescheduling. ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"A stateful set also provides a stable network identity and persistent storage for each pod")),". An example of a stateful set configuration file is:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: my-statefulset\nspec:\n  serviceName: "nginx"\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx \n  template:\n    metadata:\n      labels:\n        app: nginx \n    spec:\n      terminationGracePeriodSeconds: 10\n      containers:\n      - name: nginx\n        image: registry.k8s.io/nginx-slim:0.8 \n        ports:\n        - containerPort: 80 \n          name: web \n        volumeMounts:\n        - name: www \n          mountPath: /usr/share/nginx/html \n  volumeClaimTemplates:\n  - metadata:\n      name: www \n    spec:\n      accessModes: [ "ReadWriteOnce" ]\n      storageClassName: "my-storage-class"\n      resources:\n        requests:\n          storage: 1Gi \n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DaemonSet"),": is a Kubernetes resource that ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"ensures that a copy of a pod runs on all or some nodes in the cluster")),". A DaemonSet is useful for",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"}," running system daemons or agents that provide services or monitoring for the nodes")),", such as log collectors, network plugins, storage drivers, etc. A DaemonSet controller ensures that as nodes are added or removed from the cluster, the pods are created or deleted accordingly.")),(0,a.kt)("p",null,"An example of a DaemonSet that runs the fluentd-elasticsearch logging agent on every node is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: fluentd-elasticsearch\n  namespace: kube-system\n  labels:\n    k8s-app: fluentd-logging\nspec:\n  selector:\n    matchLabels:\n      name: fluentd-elasticsearch\n  template:\n    metadata:\n      labels:\n        name: fluentd-elasticsearch\n    spec:\n      tolerations:\n      # these tolerations are to have the daemonset runnable on control plane nodes\n      # remove them if your control plane nodes should not run pods\n      - key: node-role.kubernetes.io/control-plane\n        operator: Exists\n        effect: NoSchedule\n      - key: node-role.kubernetes.io/master\n        operator: Exists\n        effect: NoSchedule\n      containers:\n      - name: fluentd-elasticsearch\n        image: quay.io/fluentd_elasticsearch/fluentd:v2.5.2\n        resources:\n          limits:\n            memory: 200Mi\n          requests:\n            cpu: 100m\n            memory: 200Mi\n        volumeMounts:\n        - name: varlog\n          mountPath: /var/log\n      terminationGracePeriodSeconds: 30\n      volumes:\n      - name: varlog\n        hostPath:\n          path: /var/log\n")),(0,a.kt)("p",null,"You can create a DaemonSet using the kubectl apply command with the YAML file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://k8s.io/examples/controllers/daemonset.yaml\n"))))}m.isMDXComponent=!0}}]);