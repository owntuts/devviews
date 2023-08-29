"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[2932],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},54312:function(e,t,r){r.d(t,{ZP:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const i={toc:[]},o="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(o,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"interview"},r.level&&(0,a.kt)("span",{className:"level"},r.level),r.children))}s.isMDXComponent=!0},3343:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return f}});var n=r(83117),a=(r(67294),r(3905));r(54312);const i={toc:[{value:"Clients Services Communication",id:"clients-services-communication",level:4},{value:"Services Communication",id:"services-communication",level:4},{value:"Monitoring &amp; Handle Failures",id:"monitoring--handle-failures",level:4}]},o="wrapper";function s(e){let{components:t,...s}=e;return(0,a.kt)(o,(0,n.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Architecture")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"spring cloud",src:r(2676).Z,width:"1694",height:"1405"})),(0,a.kt)("h4",{id:"clients-services-communication"},"Clients Services Communication"),(0,a.kt)("p",null,"You can use Eureka as a service registry and specify the service name in the URI of the route. Spring Cloud Gateway will use Ribbon to resolve the physical address of the service and choose one of the available instances to forward the request"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"API gateway"),": ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Spring Cloud Gateway"))," provides an API gateway that ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"acts as a reverse proxy for all incoming requests")),". It handles routing requests to the appropriate microservices and provides additional functionalities like ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"rate-limiting, security, and monitoring")),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Service registry and discovery"),": Spring Cloud provides a service registry and discovery mechanism using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Netflix Eureka"))," or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Consul"))," service registry. ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"It enables services to register themselves and discover other services"))," through a common service registry.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Load balancing"),": Spring Cloud integrates with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Netflix Ribbon"))," to provide client-side load balancing. It ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"allows multiple instances of a service to be registered in the service registry")),", and Ribbon will automatically ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"handle load balancing"))," between these instances.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Config server"),": can ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"store and serve configuration properties from various sources")),", such as git repositories, file systems, databases, or vaults. It exposes an HTTP API that allows clients to retrieve the properties for their application and environment"))),(0,a.kt)("h4",{id:"services-communication"},"Services Communication"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Spring Feign Client"),": is to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"enable service discovery and load balancing for the web service calls")),". Spring Feign Client will use Eureka to resolve the physical address of the inventory-service and choose one of the available instances to make the request. This provides benefits such as ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"fault tolerance, scalability, and dynamic configuration")),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"RestTemplate"),": is a synchronous REST client that ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"performs HTTP requests"))," using a simple template-style API. It privides an alternative way for communication between two services."))),(0,a.kt)("h4",{id:"monitoring--handle-failures"},"Monitoring & Handle Failures"),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Circuit breaker"),": Spring Cloud integrates with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Netflix Hystrix"))," to provide a circuit breaker pattern. It ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"allows services to handle failures gracefully"))," by isolating the failing services and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"providing fallback mechanisms"))," to avoid potential cascading failures.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Distributed tracing and monitoring"),": Spring Cloud integrates with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Zipkin"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Sleuth"))," to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"provide distributed tracing and monitoring"))," capabilities. It allows monitoring of requests as they propagate through different microservices."))),(0,a.kt)("p",null,"Overall, Spring Cloud provides a set of building blocks that help developers to build and manage distributed systems and microservices-based architectures more easily.")))}s.isMDXComponent=!0;const l={toc:[]},p="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h5",null,"How Eureka Works")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"eureka works",src:r(64579).Z,width:"922",height:"352"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Spring Cloud Eureka Server is started"),": In the first step, the Eureka server is started, and it starts registering with itself. At this point, the server is up and running and ready to accept registrations from Eureka clients.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Eureka Clients registration"),": The Eureka clients are configured with the Eureka server URL in their application properties/yaml files. When they start up, they attempt to register with the Eureka server - sending their service instance metadata for registration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Eureka Server Registers Clients"),": When a Eureka client application attempts to register with the Eureka server, the server stores the client instance metadata in its registry. This registry contains a collection of service instance metadata registered with the Eureka server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Eureka Server Heartbeats"),': After registering with the Eureka server, Eureka clients send periodic heartbeats to the server to let it know that they are still alive. If the Eureka server doesn\'t receive a heartbeat after a configurable period, it marks the client instance as "DOWN" and will not route traffic to that instance until it is marked UP again.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Eureka Server Monitoring"),": Eureka server monitors the registry for changes, and when an instance is marked as DOWN, it can remove it from its registry automatically.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Eureka Server Discovery"),": When a client wants to call a service registered with the Eureka server, it requests the registry from the Eureka server. The Eureka server returns a list of currently registered service instances.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Eureka Client Service Call"),": Once a client has a list of service instances, it can make a service call using the load balancing or routing algorithm of its choice. If an instance is not available, clients can attempt to fallback or retry using another instance in the list.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Eureka Server Replication (optional)"),": In a multiple data center or availability zone setup, Eureka servers can replicate their registries to ensure that instances registered in one data center are available for service calls in another.")))))}c.isMDXComponent=!0;const u={toc:[{value:"Eureka Server:",id:"eureka-server",level:4},{value:"Book Service:",id:"book-service",level:4},{value:"Student Service:",id:"student-service",level:4}]},m="wrapper";function k(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h5",null,"Eureka & Feign Implementation")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"eureka works",src:r(19425).Z,width:"847",height:"599"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Eureka Server")," is for service registration"),(0,a.kt)("li",{parentName:"ul"},"After registering services to spring cloud eureka, to make them communicate you need to use a client-side service discovery mechanism that allows services to find and communicate with each other without hard-coding the hostname and port. One way to do this is to use the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Spring Cloud Netflix Feign"))," Client.")),(0,a.kt)("p",null,"Here's the example of implementation."),(0,a.kt)("h4",{id:"eureka-server"},"Eureka Server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a Spring Boot project with Eureka Server dependency using Spring Initializr or your IDE. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n</dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Annotate the main application class with @EnableEurekaServer and configure some properties such as server port, application name, and Eureka server URL. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableEurekaServer\npublic class EurekaServerApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaServerApplication.class, args);\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"server.port=7171\nspring.application.name=eureka-server\neureka.client.register-with-eureka=false\neureka.client.fetch-registry=false\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the Eureka Server application on the port 7171 or the port you specified. You can use the command line or your IDE to run the application. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mvn spring-boot:run\n")),(0,a.kt)("h4",{id:"book-service"},"Book Service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a Spring Boot project with Eureka Client dependency using Spring Initializr or your IDE. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n</dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Annotate the main application class with @EnableEurekaClient.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableEurekaClient\npublic class BookServiceApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(BookServiceApplication.class, args);\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure some properties such as server port, application name, and Eureka server URL to register to Eureka server.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"server.port=8080\nspring.application.name=book-service\neureka.client.serviceUrl.defaultZone=http://localhost:7171/eureka/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement a REST service that exposes some endpoints and registers itself with the Eureka Server. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/book")\npublic class BookController {\n\n    @GetMapping("/data")\n    public String getBookData() {\n        return "Some book data";\n    }\n\n    @GetMapping("/{id}")\n    public Book getBookById(@PathVariable Integer id) {\n        return new Book(id, "Book " + id, "Author " + id);\n    }\n\n    @GetMapping("/all")\n    public List<Book> getAllBooks() {\n        return Arrays.asList(\n            new Book(1, "Book 1", "Author 1"),\n            new Book(2, "Book 2", "Author 2"),\n            new Book(3, "Book 3", "Author 3")\n        );\n    }\n\n    @GetMapping("/entity")\n    public ResponseEntity<String> getEntityData() {\n        return ResponseEntity.ok("Some entity data");\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the Book Service application on the port 8080 or the port you specified. You can use the command line or your IDE to run the application. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mvn spring-boot:run\n")),(0,a.kt)("h4",{id:"student-service"},"Student Service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a Spring Boot project with Eureka Discovery Client and Feign dependencies using Spring Initializr  or your IDE. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-openfeign</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n</dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Annotate the main application class with ",(0,a.kt)("inlineCode",{parentName:"li"},"@EnableDiscoveryClient")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@EnableFeignClients"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableDiscoveryClient\n@EnableFeignClients\npublic class StudentServiceApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(StudentServiceApplication.class, args);\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure some properties such as server port, application name, and Eureka server URL to register to Eureka server.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"server.port=9090\nspring.application.name=student-service\neureka.client.serviceUrl.defaultZone=http://localhost:7171/eureka/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement a web application that consumes the book service using Feign client. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@FeignClient(value="book-service")\npublic interface BookClient {\n\n    @GetMapping("/book/data")\n    public String getBookData();\n\n    @GetMapping("/book/{id}")\n    public Book getBookById(@PathVariable Integer id);\n\n    @GetMapping("/book/all")\n    public List<Book> getAllBooks();\n\n    @GetMapping("/book/entity")\n    public ResponseEntity<String> getEntityData();\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Controller\npublic class StudentController {\n\n    @Autowired\n    private BookClient bookClient;\n\n    @GetMapping("/student/books")\n    public String getBooks(Model model) {\n        model.addAttribute("books", bookClient.getAllBooks());\n        return "books";\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the Student Service application on the port 9090 or the port you specified. You can use the command line or your IDE to run the application. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mvn spring-boot:run\n"))))}k.isMDXComponent=!0;const d={sidebar_position:3,id:"spring-cloud-zero-to-hero",sidebar_label:"Spring Cloud Zero To Hero",title:"Spring Cloud Zero To Hero"},g="Spring Cloud Zero To Hero",v={unversionedId:"java/spring-cloud-zero-to-hero",id:"java/spring-cloud-zero-to-hero",title:"Spring Cloud Zero To Hero",description:"Here, we discuss about Angular Interview Questions & Answers!",source:"@site/docs/java/spring-cloud.md",sourceDirName:"java",slug:"/java/spring-cloud-zero-to-hero",permalink:"/devviews/interviews/java/spring-cloud-zero-to-hero",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/spring-cloud.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"spring-cloud-zero-to-hero",sidebar_label:"Spring Cloud Zero To Hero",title:"Spring Cloud Zero To Hero"},sidebar:"javaInterviewSidebar",previous:{title:"Java Zero To Hero",permalink:"/devviews/interviews/java/java-zero-to-hero"},next:{title:"SpringBoot Zero To Hero",permalink:"/devviews/interviews/java/springboot-zero-to-hero"}},h={},f=[{value:"Architecture",id:"architecture",level:3},{value:"How Eureka Works",id:"how-eureka-works",level:3}],N={toc:f},b="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spring-cloud-zero-to-hero"},"Spring Cloud Zero To Hero"),(0,a.kt)("p",null,"Here, we discuss about Angular Interview Questions & Answers!"),(0,a.kt)("h2",{id:""}),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)(s,{mdxType:"Architecture"}),(0,a.kt)("h3",{id:"how-eureka-works"},"How Eureka Works"),(0,a.kt)(c,{mdxType:"Eureka"}),(0,a.kt)(k,{mdxType:"EurekaFeign"}))}y.isMDXComponent=!0},64579:function(e,t,r){t.Z=r.p+"assets/images/eureka-works-248afab3db8e96df6c6ec3969c2bdb56.png"},2676:function(e,t,r){t.Z=r.p+"assets/images/spring-cloud-architecture-969ec7526299586518c7d16ae675725a.png"},19425:function(e,t,r){t.Z=r.p+"assets/images/ureka-feign-38e67a2813e83570755a39c337c0e857.webp"}}]);