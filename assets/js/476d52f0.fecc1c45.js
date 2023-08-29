"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[8261],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7018:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var a=t(83117),o=(t(67294),t(3905));const r={sidebar_position:1e3,sidebar_label:"Springboot Architecture",title:"Dependency Injection",tags:["Springboot Knowledge"]},i=void 0,s={unversionedId:"java/springboot/DI",id:"java/springboot/DI",title:"Dependency Injection",description:"Dependency injection",source:"@site/docs/java/springboot/DI.md",sourceDirName:"java/springboot",slug:"/java/springboot/DI",permalink:"/devviews/interviews/java/springboot/DI",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/springboot/DI.md",tags:[{label:"Springboot Knowledge",permalink:"/devviews/interviews/tags/springboot-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Springboot Architecture",title:"Dependency Injection",tags:["Springboot Knowledge"]},sidebar:"javaInterviewSidebar",previous:{title:"Springboot AOP",permalink:"/devviews/interviews/java/springboot/AOP"},next:{title:"Springboot Functional Models",permalink:"/devviews/interviews/java/springboot/functional-model"}},l={},p=[{value:"Example",id:"example",level:4},{value:"Some of the common annotations that you can use for dependency injection in Spring Boot are:",id:"some-of-the-common-annotations-that-you-can-use-for-dependency-injection-in-spring-boot-are",level:4}],c={toc:p},m="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Dependency injection")),"Dependency injection is a core feature of the Spring container which allows for the easy wiring of beans and their dependencies.",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Define your beans"),": You can use any of the standard Spring techniques to define your beans and their injected dependencies, such as ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"XML configuration")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Java configuration")),", or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"annotation-based configuration")),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Scan beans"),": The Spring container will scan the beans you defined above (such as, classes annotated with ",(0,o.kt)("inlineCode",{parentName:"li"},"@Configuration")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"@ComponentScan")," and find the methods annotated with ",(0,o.kt)("inlineCode",{parentName:"li"},"@Bean"),")."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Register & Resolve"),": Then it will ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"invoke those methods and register"))," the returned objects as beans in the application context. The Spring container will also ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"resolve any dependencies among the beans"))," using dependency injection.")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@Bean public AppName getAppName(@Value (\u201c${app.name}\u201d) String appName) { return () -> appName; }")),(0,o.kt)("p",null,"This method creates a bean of type AppName (an interface) that returns the application name from a property file. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Bean")," annotation tells the Spring container to register this bean with the application context."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Value")," annotation injects the value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"app.name")," property into the method parameter. "),(0,o.kt)("li",{parentName:"ul"},"The method name (",(0,o.kt)("inlineCode",{parentName:"li"},"getAppName"),") is used as the bean name by default, but it can be changed using the name attribute of the ",(0,o.kt)("inlineCode",{parentName:"li"},"@Bean")," annotation."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Bean Lifecycle")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bean Lifecycle",src:t(82685).Z,width:"1280",height:"720"})),(0,o.kt)("p",null,"The bean life cycle in Spring Boot is the same as the bean life cycle in Spring Framework. It refers to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"the process of creating, initializing, using, and destroying a bean in the application context")),". The Spring container is responsible for managing the life cycle of beans and invoking callback methods at different stages."),(0,o.kt)("p",null,"The bean life cycle consists of the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Instantiation"),": The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"container creates an instance of the bean class"))," based on the bean definition (either XML or annotation-based)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dependency injection"),": The container ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"injects the dependencies of the bean"))," (such as other beans, values, or references) through constructor, setter, or field injection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Initialization"),": The container ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"performs any initialization work on the bean")),", such as invoking custom init methods, applying bean post-processors, or setting default properties."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Usage"),": The bean is ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"ready to be used by other components"))," or clients that request it from the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Destruction"),": The container ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"performs any destruction work on the bean")),", such as invoking custom destroy methods, applying bean post-processors, or releasing resources.")),(0,o.kt)("p",null,"There are different ways to ",(0,o.kt)("strong",{parentName:"p"},"customize the bean life cycle")," and provide custom logic for initialization and destruction phases. Some of the common ways are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Implementing InitializingBean and DisposableBean interfaces"),": These interfaces define ",(0,o.kt)("inlineCode",{parentName:"li"},"afterPropertiesSet()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"destroy()")," methods that are invoked by the container after dependency injection and before destruction respectively."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using ",(0,o.kt)("inlineCode",{parentName:"strong"},"@PostConstruct")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"@PreDestroy")," annotations"),": These annotations mark methods that are executed by the container after dependency injection and before destruction respectively. They are part of the JSR-250 specification and require a common annotation bean post-processor to be enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using init-method and destroy-method attributes"),": These attributes specify custom methods that are invoked by the container after dependency injection and before destruction respectively. They can be used in XML or annotation-based configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using ",(0,o.kt)("inlineCode",{parentName:"strong"},"@Bean")," annotation attributes"),": These attributes specify custom methods that are invoked by the container after dependency injection and before destruction respectively. They can be used in Java-based configuration with ",(0,o.kt)("inlineCode",{parentName:"li"},"@Bean")," annotation.")),(0,o.kt)("p",null,"Here is an example of using @PostConstruct and @PreDestroy annotations to customize the bean life cycle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// A singleton bean\n@Component\npublic class MyBean {\n\n  // Injecting a dependency\n  @Autowired\n  private AnotherBean anotherBean;\n\n  // A method annotated with @PostConstruct\n  @PostConstruct\n  public void init() {\n    System.out.println("MyBean is initialized");\n    // Perform some initialization logic here\n  }\n\n  // A method annotated with @PreDestroy\n  @PreDestroy\n  public void destroy() {\n    System.out.println("MyBean is destroyed");\n    // Perform some destruction logic here\n  }\n\n  // Some other methods that use anotherBean\n}\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"ScopedProxyMode")),(0,o.kt)("p",null,"You have a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"checkout service that is a singleton-scoped bean"))," and depends on the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"shopping cart service (which is a session-scoped bean)")),". How can you ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"inject the shopping cart service into the checkout service"))," without creating a new instance of the checkout service for each session?"),(0,o.kt)("p",null,"This is where scoped proxies come in handy. When you declare ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyMode = ScopedProxyMode"),", a proxy bean is auto created and deligate jobs to shopping cart service but it's scope is suitable to checkout service."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ScopedProxyMode.INTERFACES")," means that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"the proxy will implement the same interfaces as the target bean and delegate"))," all method calls to the current instance of the target bean. This option requires that the target bean has at least one interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ScopedProxyMode.TARGET_CLASS")," means that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"the proxy will be a subclass of the target bean and override all methods to delegate"))," to the current instance of the target bean. This option uses CGLIB to create the proxy and does not require any interfaces.")),(0,o.kt)("p",null,"Here is some code that illustrates this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Shopping cart service\n@Service\n@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic class ShoppingCartService {\n    // Some fields and methods\n}\n\n// Checkout service\n@Service\npublic class CheckoutService {\n    // Inject the shopping cart proxy\n    @Autowired\n    private ShoppingCartService shoppingCart;\n\n    // Some methods that use the shopping cart\n}\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Bean Scopes")),(0,o.kt)("p",null,"Bean scopes in Spring Boot are the same as bean scopes in Spring Framework. They define the life cycle and visibility of a bean in the application context. The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"default bean scope is singleton")),", which means that only one instance of a bean is created and shared by all components that need it. Other bean scopes are ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"request"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"session"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"application"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"websocket"),", which have different behaviors depending on the context and use case."),(0,o.kt)("p",null,"Here are some brief explanations and examples of each bean scope:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Singleton"),": This is the default scope for any bean defined in Spring. It means that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"only one instance of the bean is created per container and cached for later use")),". Any request for that bean will return the same instance. For example, to define a singleton bean using Java configuration, you can write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class AppConfiguration {\n\n  @Bean // @Scope("singleton") is optional as it is the default scope\n  public class BeanClass {\n    System.out.println("A new BeanClass instance created");\n    return new BeanClass();\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prototype"),": This scope means that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"a new instance of the bean is created every time it is requested from the container")),". The container does not manage the life cycle of prototype beans, so it is up to the client code to dispose of them when they are no longer needed. For example, to define a prototype bean using Java configuration, you can write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class AppConfiguration {\n\n  @Bean \n  @Scope("prototype")\n  public class BeanClass {\n    System.out.println("A new BeanClass instance created");\n    return new BeanClass();\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Request"),": This scope means that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"a new instance of the bean is created for each HTTP request and shared by all components within that request")),". This scope is only valid in a web-aware application context. For example, to define a request-scoped bean using Java configuration, you can write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class AppConfiguration {\n\n  @Bean \n  // If the target bean has at least one interface, we can use ScopedProxyMode.INTERFACES insteads  \n  @Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)\n  public class BeanClass {\n    System.out.println("A new BeanClass instance created");\n    return new BeanClass();\n  }\n}\n')),(0,o.kt)("p",null,"Note that you also need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyMode")," attribute to create a proxy object that delegates to the actual bean instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// A singleton bean\n@Component\npublic class SingletonBean {\n  // Whenever the singleton bean calls a method on the proxy, the proxy will delegate to the actual request-scoped bean instance that is associated with the current HTTP request.\n  @Autowired\n  private RequestBean requestBean;\n\n  // some methods that use requestBean\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Session"),": This scope means that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"a new instance of the bean is created for each HTTP session and shared by all components within that session")),". This scope is only valid in a web-aware application context. For example, to define a session-scoped bean using Java configuration, you can write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class AppConfiguration {\n\n  @Bean \n  @Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)\n  public class BeanClass {\n    System.out.println("A new BeanClass instance created");\n    return new BeanClass();\n  }\n}\n')),(0,o.kt)("p",null,"Note that you also need to use proxyMode attribute to create a proxy object that delegates to the actual bean instance."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application"),": This scope means that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"a new instance of the bean is created for each ",(0,o.kt)("inlineCode",{parentName:"em"},"ServletContext")," and shared by all components within that context")),". This scope is only valid in a web-aware application context. For example, to define an application-scoped bean using Java configuration, you can write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class AppConfiguration {\n\n  @Bean \n  @Scope(value = "application", proxyMode = ScopedProxyMode.TARGET_CLASS)\n  public class BeanClass {\n    System.out.println("A new BeanClass instance created");\n    return new BeanClass();\n  }\n}\n')),(0,o.kt)("p",null,"Note that you also need to use proxyMode attribute to create a proxy object that delegates to the actual bean instance."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WebSocket"),": This scope means that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"a new instance of the bean is created for each WebSocket and shared by all components within that WebSocket")),". This scope is only valid in a web-aware application context. For example, to define a WebSocket-scoped bean using Java configuration, you can write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class AppConfiguration {\n\n  @Bean \n  @Scope(value = "websocket", proxyMode = ScopedProxyMode.TARGET_CLASS)\n  public class BeanClass {\n    System.out.println("A new BeanClass instance created");\n    return new BeanClass();\n  }\n}\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Common Annotations for dependency injection")),(0,o.kt)("h4",{id:"some-of-the-common-annotations-that-you-can-use-for-dependency-injection-in-spring-boot-are"},"Some of the common annotations that you can use for dependency injection in Spring Boot are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@Bean")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Bean")," annotation is a method-level annotation that is used to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"manually declare a bean for the Spring container")),". It can be used in conjunction with ",(0,o.kt)("inlineCode",{parentName:"li"},"@Configuration")," to create beans in a configuration class. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Define a configuration class and use @Bean\n@Configuration\npublic class Config {\n    // We use @Bean on barFormatter() method to manually create and configure a BarFormatter bean\n    @Bean\n    public BarFormatter barFormatter() {\n        BarFormatter barFormatter = new BarFormatter();\n        barFormatter.setPrefix("bar");\n        return barFormatter;\n    }\n}\n\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@Component")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Component")," annotation is used to signal that a Java class is a Spring component. Components are objects that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Spring manages in its container and can be used across the application")),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Component")," annotation is a ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"class-level annotation that marks a class as a Spring bean")),". For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Define an interface\npublic interface Formatter {\n    String format();\n}\n\n// We use @Component on FooFormatter to let Spring create a bean for it automatically\n@Component\npublic class FooFormatter implements Formatter {\n    public String format() {\n        return "foo";\n    }\n}\n\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@ComponentScan")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"@ComponentScan")," annotation is used to specify the base package(s) of an application in which the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Spring container should look for Spring components and configurations to manage")),". For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// a configuration class that uses @ComponentScan to scan the com.example package and its sub-packages for annotated classes.\n@SpringBootApplication\n@ComponentScan("com.example")\npublic class MyApp {\n    // class implementation\n}\n')),(0,o.kt)("p",null,"Inside com.example package or its sub-packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Define a class that we want to make into a bean and use @Component\n@Component\npublic class FooService {\n    // ...\n}\n")),(0,o.kt)("p",null,"and use it somewhere"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Define another class that wants to use FooService\n@Component\npublic class BazService {\n    // Use @Autowired to inject FooService\n    @Autowired\n    private FooService fooService;\n\n    // ...\n}\n\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@Autowired")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Autowired")," annotation is used to signal that a variable, method, or constructor should be automatically wired up by Spring. Spring ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"automatically injects a dependency into a component"))," when ",(0,o.kt)("inlineCode",{parentName:"li"},"@Autowired")," is used. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class MyComponent {\n\n    private MyDependency myDependency;\n    \n    @Autowired\n    public MyComponent(MyDependency myDependency) {\n        this.myDependency = myDependency;\n    }\n    \n    // rest of class implementation\n}\n\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@Qualifier")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Qualifier")," annotation is used to resolve ambiguity ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"when there are multiple beans of the same type"))," (For example, if you have two beans that implement the same interface). The annotation is used in conjunction with ",(0,o.kt)("inlineCode",{parentName:"li"},"@Autowired"),". For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Define an interface\npublic interface Formatter {\n    String format();\n}\n\n// Define two beans that implement the interface\n@Component("fooFormatter")\npublic class FooFormatter implements Formatter {\n    public String format() {\n        return "foo";\n    }\n}\n\n@Component("barFormatter")\npublic class BarFormatter implements Formatter {\n    public String format() {\n        return "bar";\n    }\n}\n\n// Autowire a bean with @Qualifier\n@Component\npublic class FooService {\n    @Autowired\n    @Qualifier("fooFormatter")\n    private Formatter formatter;\n}\n\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@Primary")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Primary")," annotation is used to signal that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"a bean should be preferred over other beans of the same type")),". When multiple beans satisfy a dependency injection in a component, the one marked ",(0,o.kt)("inlineCode",{parentName:"li"},"@Primary")," is chosen. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Define an interface\npublic interface Formatter {\n    String format();\n}\n\n// Define two beans that implement the interface\n@Component\n@Primary\npublic class FooFormatter implements Formatter {\n    public String format() {\n        return "foo";\n    }\n}\n\n@Component\npublic class BarFormatter implements Formatter {\n    public String format() {\n        return "bar";\n    }\n}\n\n// Autowire a bean without @Qualifier\n@Component\npublic class FooService {\n    @Autowired\n    private Formatter formatter;\n}\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@Value")," - The ",(0,o.kt)("inlineCode",{parentName:"li"},"@Value")," annotation is used to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"provide a value to a variable inside a Spring Component")),". It can be used for properties or constructor arguments. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Component\npublic class MyComponent {\n   \n   @Value("Hello, World!")\n   private String message;\n   \n   // rest of class implementation\n}\n\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h5",null,"Variants of @Component ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@Repository"),": This annotation is used on classes that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"access data from a persistent storage")),", such as a database or a file system. It indicates that the class is a Data Access Object (DAO) and enables exception translation from data access technologies to Spring's DataAccessException hierarchy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@Service"),": This annotation is used on classes that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"provide business logic or service layer functionality")),". It indicates that the class is a Service and may carry additional semantics in future releases of Spring."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@Controller"),": This annotation is used on classes that ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"handle web requests and responses")),". It indicates that the class is a Controller and enables web-related features such as request mapping, validation, data binding, etc.")),(0,o.kt)("p",null,"These variants of ",(0,o.kt)("inlineCode",{parentName:"p"},"@Component")," are meta-annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Component"),", which means they ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"inherit its functionality of marking a class as a Spring bean and making it eligible for component scanning and dependency injection")),"."),(0,o.kt)("p",null,"Here are some examples of using variants of @Component in Java Spring Boot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Define a class that accesses data from a database and use @Repository\n@Repository\npublic class BookDao {\n    // ...\n}\n\n// Define a class that provides book-related service and use @Service\n@Service\npublic class BookService {\n    // Inject BookDao with @Autowired\n    @Autowired\n    private BookDao bookDao;\n\n    // ...\n}\n\n// Define a class that handles web requests for books and use @Controller\n@Controller\n@RequestMapping("/books")\npublic class BookController {\n    // Inject BookService with @Autowired\n    @Autowired\n    private BookService bookService;\n\n    // ...\n}\n'))))}u.isMDXComponent=!0},82685:function(e,n,t){n.Z=t.p+"assets/images/bean-lifecycle-c1fbc77a15d313cee48a01ce7c16d9b2.jpg"}}]);