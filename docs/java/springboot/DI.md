---
sidebar_position: 1000
sidebar_label: Springboot Architecture
title: Dependency Injection
tags:
  - Springboot Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Dependency injection</h5></summary>
Dependency injection is a core feature of the Spring container which allows for the easy wiring of beans and their dependencies.

1. **Define your beans**: You can use any of the standard Spring techniques to define your beans and their injected dependencies, such as ***XML configuration***, ***Java configuration***, or ***annotation-based configuration***.
2. **Scan beans**: The Spring container will scan the beans you defined above (such as, classes annotated with `@Configuration` or `@ComponentScan` and find the methods annotated with `@Bean`).
3. **Register & Resolve**: Then it will ***invoke those methods and register*** the returned objects as beans in the application context. The Spring container will also ***resolve any dependencies among the beans*** using dependency injection.

#### Example

`@Bean public AppName getAppName(@Value (“${app.name}”) String appName) { return () -> appName; }`

This method creates a bean of type AppName (an interface) that returns the application name from a property file. 
- The `@Bean` annotation tells the Spring container to register this bean with the application context.
- The `@Value` annotation injects the value of the `app.name` property into the method parameter. 
- The method name (`getAppName`) is used as the bean name by default, but it can be changed using the name attribute of the `@Bean` annotation.

</details>

<details>
<summary><h5>Bean Lifecycle</h5></summary>

![Bean Lifecycle](/img/interviews/java/bean-lifecycle.jpg)

The bean life cycle in Spring Boot is the same as the bean life cycle in Spring Framework. It refers to ***the process of creating, initializing, using, and destroying a bean in the application context***. The Spring container is responsible for managing the life cycle of beans and invoking callback methods at different stages.

The bean life cycle consists of the following steps:

- **Instantiation**: The ***container creates an instance of the bean class*** based on the bean definition (either XML or annotation-based).
- **Dependency injection**: The container ***injects the dependencies of the bean*** (such as other beans, values, or references) through constructor, setter, or field injection.
- **Initialization**: The container ***performs any initialization work on the bean***, such as invoking custom init methods, applying bean post-processors, or setting default properties.
- **Usage**: The bean is ***ready to be used by other components*** or clients that request it from the container.
- **Destruction**: The container ***performs any destruction work on the bean***, such as invoking custom destroy methods, applying bean post-processors, or releasing resources.

There are different ways to **customize the bean life cycle** and provide custom logic for initialization and destruction phases. Some of the common ways are:

- **Implementing InitializingBean and DisposableBean interfaces**: These interfaces define `afterPropertiesSet()` and `destroy()` methods that are invoked by the container after dependency injection and before destruction respectively.
- **Using `@PostConstruct` and `@PreDestroy` annotations**: These annotations mark methods that are executed by the container after dependency injection and before destruction respectively. They are part of the JSR-250 specification and require a common annotation bean post-processor to be enabled.
- **Using init-method and destroy-method attributes**: These attributes specify custom methods that are invoked by the container after dependency injection and before destruction respectively. They can be used in XML or annotation-based configuration.
- **Using `@Bean` annotation attributes**: These attributes specify custom methods that are invoked by the container after dependency injection and before destruction respectively. They can be used in Java-based configuration with `@Bean` annotation.

Here is an example of using @PostConstruct and @PreDestroy annotations to customize the bean life cycle:

```java
// A singleton bean
@Component
public class MyBean {

  // Injecting a dependency
  @Autowired
  private AnotherBean anotherBean;

  // A method annotated with @PostConstruct
  @PostConstruct
  public void init() {
    System.out.println("MyBean is initialized");
    // Perform some initialization logic here
  }

  // A method annotated with @PreDestroy
  @PreDestroy
  public void destroy() {
    System.out.println("MyBean is destroyed");
    // Perform some destruction logic here
  }

  // Some other methods that use anotherBean
}
```
</details>

<details>
<summary><h5>ScopedProxyMode</h5></summary>

You have a ***checkout service that is a singleton-scoped bean*** and depends on the ***shopping cart service (which is a session-scoped bean)***. How can you ***inject the shopping cart service into the checkout service*** without creating a new instance of the checkout service for each session?

This is where scoped proxies come in handy. When you declare `proxyMode = ScopedProxyMode`, a proxy bean is auto created and deligate jobs to shopping cart service but it's scope is suitable to checkout service.

- `ScopedProxyMode.INTERFACES` means that ***the proxy will implement the same interfaces as the target bean and delegate*** all method calls to the current instance of the target bean. This option requires that the target bean has at least one interface.
- `ScopedProxyMode.TARGET_CLASS` means that ***the proxy will be a subclass of the target bean and override all methods to delegate*** to the current instance of the target bean. This option uses CGLIB to create the proxy and does not require any interfaces.


Here is some code that illustrates this example:

```java
// Shopping cart service
@Service
@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ShoppingCartService {
    // Some fields and methods
}

// Checkout service
@Service
public class CheckoutService {
    // Inject the shopping cart proxy
    @Autowired
    private ShoppingCartService shoppingCart;

    // Some methods that use the shopping cart
}
```

</details>

<details>
<summary><h5>Bean Scopes</h5></summary>

Bean scopes in Spring Boot are the same as bean scopes in Spring Framework. They define the life cycle and visibility of a bean in the application context. The ***default bean scope is singleton***, which means that only one instance of a bean is created and shared by all components that need it. Other bean scopes are `prototype`, `request`, `session`, `application`, and `websocket`, which have different behaviors depending on the context and use case.

Here are some brief explanations and examples of each bean scope:

- **Singleton**: This is the default scope for any bean defined in Spring. It means that ***only one instance of the bean is created per container and cached for later use***. Any request for that bean will return the same instance. For example, to define a singleton bean using Java configuration, you can write:

```java
@Configuration
public class AppConfiguration {

  @Bean // @Scope("singleton") is optional as it is the default scope
  public class BeanClass {
    System.out.println("A new BeanClass instance created");
    return new BeanClass();
  }
}
```

- **Prototype**: This scope means that ***a new instance of the bean is created every time it is requested from the container***. The container does not manage the life cycle of prototype beans, so it is up to the client code to dispose of them when they are no longer needed. For example, to define a prototype bean using Java configuration, you can write:

```java
@Configuration
public class AppConfiguration {

  @Bean 
  @Scope("prototype")
  public class BeanClass {
    System.out.println("A new BeanClass instance created");
    return new BeanClass();
  }
}
```

- **Request**: This scope means that ***a new instance of the bean is created for each HTTP request and shared by all components within that request***. This scope is only valid in a web-aware application context. For example, to define a request-scoped bean using Java configuration, you can write:

```java
@Configuration
public class AppConfiguration {

  @Bean 
  // If the target bean has at least one interface, we can use ScopedProxyMode.INTERFACES insteads  
  @Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)
  public class BeanClass {
    System.out.println("A new BeanClass instance created");
    return new BeanClass();
  }
}
```

Note that you also need to use `proxyMode` attribute to create a proxy object that delegates to the actual bean instance.

```java
// A singleton bean
@Component
public class SingletonBean {
  // Whenever the singleton bean calls a method on the proxy, the proxy will delegate to the actual request-scoped bean instance that is associated with the current HTTP request.
  @Autowired
  private RequestBean requestBean;

  // some methods that use requestBean
}
```

- **Session**: This scope means that ***a new instance of the bean is created for each HTTP session and shared by all components within that session***. This scope is only valid in a web-aware application context. For example, to define a session-scoped bean using Java configuration, you can write:

```java
@Configuration
public class AppConfiguration {

  @Bean 
  @Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
  public class BeanClass {
    System.out.println("A new BeanClass instance created");
    return new BeanClass();
  }
}
```

Note that you also need to use proxyMode attribute to create a proxy object that delegates to the actual bean instance.

- **Application**: This scope means that ***a new instance of the bean is created for each `ServletContext` and shared by all components within that context***. This scope is only valid in a web-aware application context. For example, to define an application-scoped bean using Java configuration, you can write:

```java
@Configuration
public class AppConfiguration {

  @Bean 
  @Scope(value = "application", proxyMode = ScopedProxyMode.TARGET_CLASS)
  public class BeanClass {
    System.out.println("A new BeanClass instance created");
    return new BeanClass();
  }
}
```

Note that you also need to use proxyMode attribute to create a proxy object that delegates to the actual bean instance.

- **WebSocket**: This scope means that ***a new instance of the bean is created for each WebSocket and shared by all components within that WebSocket***. This scope is only valid in a web-aware application context. For example, to define a WebSocket-scoped bean using Java configuration, you can write:

```java
@Configuration
public class AppConfiguration {

  @Bean 
  @Scope(value = "websocket", proxyMode = ScopedProxyMode.TARGET_CLASS)
  public class BeanClass {
    System.out.println("A new BeanClass instance created");
    return new BeanClass();
  }
}
```

</details>

<details>
<summary><h5>Common Annotations for dependency injection</h5></summary>

#### Some of the common annotations that you can use for dependency injection in Spring Boot are:

1. `@Bean` - The `@Bean` annotation is a method-level annotation that is used to ***manually declare a bean for the Spring container***. It can be used in conjunction with `@Configuration` to create beans in a configuration class. For example:

```java
// Define a configuration class and use @Bean
@Configuration
public class Config {
    // We use @Bean on barFormatter() method to manually create and configure a BarFormatter bean
    @Bean
    public BarFormatter barFormatter() {
        BarFormatter barFormatter = new BarFormatter();
        barFormatter.setPrefix("bar");
        return barFormatter;
    }
}

```
2. `@Component` - The `@Component` annotation is used to signal that a Java class is a Spring component. Components are objects that ***Spring manages in its container and can be used across the application***. The `@Component` annotation is a ***class-level annotation that marks a class as a Spring bean***. For example:

```java
// Define an interface
public interface Formatter {
    String format();
}

// We use @Component on FooFormatter to let Spring create a bean for it automatically
@Component
public class FooFormatter implements Formatter {
    public String format() {
        return "foo";
    }
}

```
3. `@ComponentScan` - The `@ComponentScan` annotation is used to specify the base package(s) of an application in which the ***Spring container should look for Spring components and configurations to manage***. For example:

```java
// a configuration class that uses @ComponentScan to scan the com.example package and its sub-packages for annotated classes.
@SpringBootApplication
@ComponentScan("com.example")
public class MyApp {
    // class implementation
}
```

Inside com.example package or its sub-packages

```java
// Define a class that we want to make into a bean and use @Component
@Component
public class FooService {
    // ...
}
```
and use it somewhere

```java
// Define another class that wants to use FooService
@Component
public class BazService {
    // Use @Autowired to inject FooService
    @Autowired
    private FooService fooService;

    // ...
}

```
4. `@Autowired` - The `@Autowired` annotation is used to signal that a variable, method, or constructor should be automatically wired up by Spring. Spring ***automatically injects a dependency into a component*** when `@Autowired` is used. For example:

```java
@Component
public class MyComponent {

    private MyDependency myDependency;
    
    @Autowired
    public MyComponent(MyDependency myDependency) {
        this.myDependency = myDependency;
    }
    
    // rest of class implementation
}

```
5. `@Qualifier` - The `@Qualifier` annotation is used to resolve ambiguity ***when there are multiple beans of the same type*** (For example, if you have two beans that implement the same interface). The annotation is used in conjunction with `@Autowired`. For example:

```java
// Define an interface
public interface Formatter {
    String format();
}

// Define two beans that implement the interface
@Component("fooFormatter")
public class FooFormatter implements Formatter {
    public String format() {
        return "foo";
    }
}

@Component("barFormatter")
public class BarFormatter implements Formatter {
    public String format() {
        return "bar";
    }
}

// Autowire a bean with @Qualifier
@Component
public class FooService {
    @Autowired
    @Qualifier("fooFormatter")
    private Formatter formatter;
}

```
6. `@Primary` - The `@Primary` annotation is used to signal that ***a bean should be preferred over other beans of the same type***. When multiple beans satisfy a dependency injection in a component, the one marked `@Primary` is chosen. For example:

```java
// Define an interface
public interface Formatter {
    String format();
}

// Define two beans that implement the interface
@Component
@Primary
public class FooFormatter implements Formatter {
    public String format() {
        return "foo";
    }
}

@Component
public class BarFormatter implements Formatter {
    public String format() {
        return "bar";
    }
}

// Autowire a bean without @Qualifier
@Component
public class FooService {
    @Autowired
    private Formatter formatter;
}
```
7. `@Value` - The `@Value` annotation is used to ***provide a value to a variable inside a Spring Component***. It can be used for properties or constructor arguments. For example:

```java
@Component
public class MyComponent {
   
   @Value("Hello, World!")
   private String message;
   
   // rest of class implementation
}

```

</details>

<details>
<summary><h5>Variants of @Component </h5></summary>

- `@Repository`: This annotation is used on classes that ***access data from a persistent storage***, such as a database or a file system. It indicates that the class is a Data Access Object (DAO) and enables exception translation from data access technologies to Spring's DataAccessException hierarchy.
- `@Service`: This annotation is used on classes that ***provide business logic or service layer functionality***. It indicates that the class is a Service and may carry additional semantics in future releases of Spring.
- `@Controller`: This annotation is used on classes that ***handle web requests and responses***. It indicates that the class is a Controller and enables web-related features such as request mapping, validation, data binding, etc.

These variants of `@Component` are meta-annotated with `@Component`, which means they ***inherit its functionality of marking a class as a Spring bean and making it eligible for component scanning and dependency injection***.


Here are some examples of using variants of @Component in Java Spring Boot:

```java
// Define a class that accesses data from a database and use @Repository
@Repository
public class BookDao {
    // ...
}

// Define a class that provides book-related service and use @Service
@Service
public class BookService {
    // Inject BookDao with @Autowired
    @Autowired
    private BookDao bookDao;

    // ...
}

// Define a class that handles web requests for books and use @Controller
@Controller
@RequestMapping("/books")
public class BookController {
    // Inject BookService with @Autowired
    @Autowired
    private BookService bookService;

    // ...
}
```

</details>
