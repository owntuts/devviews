---
sidebar_position: 1000
sidebar_label: Springboot Functional Models
title: Springboot Functional Models
tags:
  - Springboot Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Springboot Functional interaction Models</h5></summary>

![Springboot Functional Models](/img/interviews/java/functional_model.png)

</details>

<details>
<summary><h5>Common annotations for configuration</h5></summary>

Some of the common annotations for configuration in Spring Boot are:

- `@SpringBootApplication`: This annotation is used on the main class of a Spring Boot application to ***enable auto-configuration, component scanning, and configuration properties*** support. It is equivalent to using `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan` with their default attributes.
- `@EnableAutoConfiguration`: This annotation is used on a configuration class to enable auto-configuration of the Spring Application Context, attempting to guess and configure beans that you are likely to need. It works by ***scanning the classpath for certain classes or properties and creating beans accordingly***.
- `@Configuration`: This annotation is used on a class to ***indicate that this class is a configuration class*** which is a source of bean definitions. It ***allows us to use `@Bean` annotation to define beans manually and use `@ComponentScan`*** annotation to specify the base packages for component scanning.

Here are some examples of using these annotations in Java Spring Boot:

```java
// This is the main class, bootstrap Application here
@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}

// Define a configuration class and use @EnableAutoConfiguration
@Configuration
@EnableAutoConfiguration
public class MyConfig {
    // ...
}

// Define another configuration class and use @Configuration and @ComponentScan
@Configuration
@ComponentScan("com.example")
public class MyOtherConfig {
    // ...
}

// Define a bean manually and use @Bean
@Configuration
public class MyThirdConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}
```

In these examples, we have four configuration classes that use different annotations for configuration in Spring Boot. We also have a main class that uses @SpringBootApplication to launch the application.

</details>

<details>
<summary><h5>Anotations for request response</h5></summary>

- `@RequestMapping` is a Spring annotation that is used to ***map web requests to handler methods of MVC and REST controllers***. It can be applied to both class-level and method-level in a controller. You can specify the request path, method, parameters, headers, and media types that are supported by the handler method using @RequestMapping. Here is an example of how to use @RequestMapping at method-level:

```java
@RequestMapping(value = "/ex/foos", method = RequestMethod.GET)
@ResponseBody
public String getFoosBySimplePath() {
    return "Get some Foos";
}
```

- `@RestController` is used to ***mark a class as a controller*** that can handle RESTful requests. It is a combination of @Controller and @ResponseBody annotations, which means that the return value of the handler methods are automatically converted to JSON or XML and written to the response body. Here is an example of how to use @RestController:

```java
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
}
```

- `@RequestBody`: This annotation is used to map the HTTP request body to a Java object. It can be used as a parameter annotation in controller methods to automatically deserialize the JSON or XML payload into a Java object. For example:

```java
@PostMapping("/employees")
public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeRequest employeeRequest) {
    // ...
}
```

- `@ResponseBody`: This annotation is used to indicate that the return value of a controller method should be serialized into JSON or XML and written into the HTTP response body. It can be used as a method annotation or a class annotation for controllers. For example:

```java
@GetMapping("/employees/{id}")
@ResponseBody
public EmployeeDTO getEmployee(@PathVariable Long id) {
    // ...
}
```

- `@PathVariable`: This annotation is used to ***extract a part of the URL*** as a method parameter. It can be used in controller methods to bind a variable name in the URI template to a method parameter. For example:

```java
@GetMapping("/employees/{id}")
public ResponseEntity<EmployeeDTO> getEmployee(@PathVariable Long id) {
    // ...
}
```

- `@RequestParam`: This annotation is used to ***extract query parameters or form parameters from the request***. It can be used in controller methods to bind a request parameter name to a method parameter. For example:

```java
@GetMapping("/employees")
public ResponseEntity<List<EmployeeDTO>> getEmployees(@RequestParam String name) {
    // ...
}
```

- `@RequestHeader`: This annotation is used to ***extract header values from the request***. It can be used in controller methods to bind a header name to a method parameter. For example:

```java
@PostMapping("/employees")
public ResponseEntity<EmployeeDTO> createEmployee(@RequestHeader("Authorization") String token, @RequestBody EmployeeRequest employeeRequest) {
    // ...
}
```

- `@CookieValue`: This annotation is used to ***extract cookie values from the request***. It can be used in controller methods to bind a cookie name to a method parameter. For example:

```java
@GetMapping("/employees")
public ResponseEntity<List<EmployeeDTO>> getEmployees(@CookieValue("JSESSIONID") String sessionId) {
    // ...
}
```

- `@ModelAttribute`: This annotation is used to ***bind request parameters to an object***. It can be used as a parameter annotation or a method annotation in controller classes. For example:

```java
@PostMapping("/employees")
public String createEmployee(@ModelAttribute Employee employee, Model model) {
    // ...
}
```

- `@Valid`: This annotation is used to ***validate an object annotated with JSR-303 constraints***. It can be used in controller methods to trigger the validation of a method parameter or a return value. For example:

```java
@PostMapping("/employees")
public ResponseEntity<EmployeeDTO> createEmployee(@Valid @RequestBody EmployeeRequest employeeRequest) {
    // ...
}
```
</details>

<details>
<summary><h5>Anotations for validation</h5></summary>

- `@NotNull`: to check that a field is not null
- `@NotEmpty`: to check that a collection field is not empty
- `@NotBlank`: to check that a string field is not blank
- `@Min` and `@Max`: to check that a numeric field is within a range
- `@Pattern`: to check that a string field matches a regular expression
- `@Email`: to check that a string field is a valid email address

These annotations can be used on fields, getters, or constructors of a bean class. For example:

```java
public class User {

    @Email(message = "{user.email.invalid}")
    private String email;

    @NotBlank(message = "{user.name.blank}")
    private String name;

    // getters and setters
}
```

- To enable validation in Spring Boot, you need to add the spring-boot-starter-validation dependency to your project. You can also use the @Validated and @Valid annotations to trigger validation on method parameters or return values. For example:

```java
@RestController
@RequestMapping("/users")
public class UserController {

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        // save user and return response
    }
}
```

- How to create custom validation annotations: You can create your own validation annotations by defining an annotation interface with the `@Constraint` annotation and a validator class that implements the ConstraintValidator interface. For example:

```java
@Target({ElementType.FIELD}) // used to annotate fields only
@Retention(RetentionPolicy.RUNTIME) // retained during runtime and can be accessed by reflection
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {

    String message() default "Email already exists";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}

```
```java
public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        return email != null && !userRepository.existsByEmail(email);
    }
}

```
- How to validate nested objects or collections: You can use the @Valid annotation on nested objects or collections to cascade the validation to their fields. For example:

```java
public class Order {

    @NotNull
    private User user;

    @NotEmpty
    @Valid
    private List<Item> items;

    // getters and setters
}
```
</details>

<details>
<summary><h5>Anotations for spring data</h5></summary>

Here are some examples of using Spring Data Annotations in different scenarios:

- To **create a custom query** with a named parameter, you can use @Query and @Param annotations on a repository method. For example, to find a person by name using JPA, you can write:

```java
@Repository
interface PersonRepository extends JpaRepository<Person, Long> {

  @Query("FROM Person p WHERE p.name = :name")
  Person findByName(@Param("name") String name);
}
```

- To **create a base repository that provides common methods for all entities**, you can use @NoRepositoryBean annotation on an interface that extends CrudRepository. For example, to ***create a base repository that provides a findById method for all entities using JPA***, you can write:

```java
@NoRepositoryBean
interface MyUtilityRepository<T, ID extends Serializable> extends CrudRepository<T, ID> {

  Optional<T> findById(ID id);
}
```

- To **mark a field in an entity class as the primary key**, you can use `@Id` annotation. For example, to mark the id field as the primary key for a person entity using JPA, you can write:

```java
@Entity
class Person {

  @Id
  Long id;

  // other fields and methods
}
```

- To **mark a field in an entity class as transient**, meaning that it will ***not be persisted or retrieved by the data store engine***, you can use` @Transient` annotation. For example, to mark the age field as transient for a person entity using JPA, you can write:

```java
@Entity
class Person {

  // other fields and methods

  @Transient
  int age;
}
```

- **To enable auditing of an entity class**, meaning that it will ***automatically record who created or modified the entity*** and when, you can use `@CreatedBy`, `@LastModifiedBy`, `@CreatedDate`, and `@LastModifiedDate` annotations. For example, to enable auditing for a person entity using JPA, you can write:

```java
@Entity
@EntityListeners(AuditingEntityListener.class)
class Person {

  // other fields and methods

  @CreatedBy
  String createdBy;

  @LastModifiedBy
  String lastModifiedBy;

  @CreatedDate
  LocalDateTime createdDate;

  @LastModifiedDate
  LocalDateTime lastModifiedDate;
}
```
</details>
