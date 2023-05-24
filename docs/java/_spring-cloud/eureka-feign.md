<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details>
<summary><h5>Eureka & Feign Implementation</h5></summary>

![eureka works](/img/interviews/java/ureka-feign.webp)

- **Eureka Server** is for service registration
- After registering services to spring cloud eureka, to make them communicate you need to use a client-side service discovery mechanism that allows services to find and communicate with each other without hard-coding the hostname and port. One way to do this is to use the ***Spring Cloud Netflix Feign*** Client.

Here's the example of implementation.

#### Eureka Server:

- Create a Spring Boot project with Eureka Server dependency using Spring Initializr or your IDE. For example:

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

- Annotate the main application class with @EnableEurekaServer and configure some properties such as server port, application name, and Eureka server URL. For example:

```java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
```

```properties
server.port=7171
spring.application.name=eureka-server
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

- Run the Eureka Server application on the port 7171 or the port you specified. You can use the command line or your IDE to run the application. For example:

```bash
mvn spring-boot:run
```

#### Book Service:

- Create a Spring Boot project with Eureka Client dependency using Spring Initializr or your IDE. For example:

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

- Annotate the main application class with @EnableEurekaClient.

```java
@SpringBootApplication
@EnableEurekaClient
public class BookServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookServiceApplication.class, args);
    }
}
```

- Configure some properties such as server port, application name, and Eureka server URL to register to Eureka server.

```properties
server.port=8080
spring.application.name=book-service
eureka.client.serviceUrl.defaultZone=http://localhost:7171/eureka/
```

- Implement a REST service that exposes some endpoints and registers itself with the Eureka Server. For example:

```java
@RestController
@RequestMapping("/book")
public class BookController {

    @GetMapping("/data")
    public String getBookData() {
        return "Some book data";
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Integer id) {
        return new Book(id, "Book " + id, "Author " + id);
    }

    @GetMapping("/all")
    public List<Book> getAllBooks() {
        return Arrays.asList(
            new Book(1, "Book 1", "Author 1"),
            new Book(2, "Book 2", "Author 2"),
            new Book(3, "Book 3", "Author 3")
        );
    }

    @GetMapping("/entity")
    public ResponseEntity<String> getEntityData() {
        return ResponseEntity.ok("Some entity data");
    }
}
```

- Run the Book Service application on the port 8080 or the port you specified. You can use the command line or your IDE to run the application. For example:

```bash
mvn spring-boot:run
```

#### Student Service:

- Create a Spring Boot project with Eureka Discovery Client and Feign dependencies using Spring Initializr  or your IDE. For example:

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

- Annotate the main application class with `@EnableDiscoveryClient` and `@EnableFeignClients`.

```java
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class StudentServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentServiceApplication.class, args);
    }
}
```

- Configure some properties such as server port, application name, and Eureka server URL to register to Eureka server.

```properties
server.port=9090
spring.application.name=student-service
eureka.client.serviceUrl.defaultZone=http://localhost:7171/eureka/
```

- Implement a web application that consumes the book service using Feign client. For example:

```java
@FeignClient(value="book-service")
public interface BookClient {

    @GetMapping("/book/data")
    public String getBookData();

    @GetMapping("/book/{id}")
    public Book getBookById(@PathVariable Integer id);

    @GetMapping("/book/all")
    public List<Book> getAllBooks();

    @GetMapping("/book/entity")
    public ResponseEntity<String> getEntityData();
}
```

```java
@Controller
public class StudentController {

    @Autowired
    private BookClient bookClient;

    @GetMapping("/student/books")
    public String getBooks(Model model) {
        model.addAttribute("books", bookClient.getAllBooks());
        return "books";
    }
}
```

- Run the Student Service application on the port 9090 or the port you specified. You can use the command line or your IDE to run the application. For example:

```bash
mvn spring-boot:run
```

</details>
