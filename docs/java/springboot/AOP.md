---
sidebar_position: 1000
sidebar_label: Springboot AOP
title: Springboot AOP
tags:
  - Springboot Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Springboot AOP</h5></summary>

![Springboot aop](/img/interviews/java/aop.jpeg)

**AOP (Aspect-Oriented Programming)** is a programming paradigm that aims to ***increase modularity by allowing the separation of cross-cutting concerns***. It does this by ***adding additional behavior to existing code without modifying*** the code itself. Instead, we can declare the new behavior and the points where it should be applied separately.

Spring Boot supports AOP by providing the `spring-boot-starter-aop` dependency, which includes `Spring AOP` and `AspectJ`. Spring AOP is a framework that implements AOP using proxies (either JDK dynamic proxies or CGLIB proxies). AspectJ is a library that provides a complete AOP implementation, including compile-time and load-time weaving.

To use AOP in Spring Boot, we need to follow these steps:

- Add the spring-boot-starter-aop dependency to the pom.xml file:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

- **Define an aspect class** that encapsulates the cross-cutting concern. An aspect class is a normal class annotated with @Aspect annotation. It can also have other annotations, such as @Component or @Order, depending on the use case.
- **Define one or more pointcuts** that specify where the aspect should be applied. 
  - **A pointcut** is an expression that matches one or more join points in the application. We can define pointcuts using AspectJ expression language or annotations.
  - **A join point** is a point during the execution of a program, such as the execution of a method or the handling of an exception. 
- **Define one or more advices** that ***specify what action should be taken at each join point***. An advice is a method that contains the additional behavior to be executed. We can define advices using annotations, such as` @Before`, `@After`, `@Around`, `@AfterReturning`, or `@AfterThrowing`.
- Optionally, **configure AOP properties** in the `application.properties` file, such as `spring.aop.auto` (to enable or disable AOP auto-configuration), `spring.aop.proxy-target-class` (to choose between JDK dynamic proxies or CGLIB proxies), or `spring.aop.expose-proxy` (to expose the current proxy to the target object).

Here is an example of using AOP in Spring Boot to implement a logging aspect:

```java
// An aspect class that logs method execution
@Aspect
@Component
public class LoggingAspect {

  // A logger object
  private Logger logger = LoggerFactory.getLogger(this.getClass());

  // A pointcut that matches any method execution in any class under com.example package
  @Pointcut("execution(* com.example..*(..))")
  public void anyMethod() {}

  // An advice that logs before method execution
  @Before("anyMethod()")
  public void logBefore(JoinPoint joinPoint) {
    logger.info("Before executing {} with arguments {}", joinPoint.getSignature(), joinPoint.getArgs());
  }

  // An advice that logs after method execution
  @After("anyMethod()")
  public void logAfter(JoinPoint joinPoint) {
    logger.info("After executing {} with arguments {}", joinPoint.getSignature(), joinPoint.getArgs());
  }
}
```

:::note Tips

- **AOP (Aspect-Oriented Programming)** is like ***adding some extra features or accessories to your car without changing the car*** itself. For example, you can add a GPS system, a rearview camera, or a seat warmer to your car without modifying the car engine or body.
- **Aspect** is like ***the extra feature or accessory*** that you add to your car. For example, the GPS system, the rearview camera, or the seat warmer are aspects that provide some additional functionality to your car.
- **Pointcut** is like the ***rule that tells you where to install the extra feature or accessory*** in your car. For example, you can install the GPS system on the dashboard, the rearview camera on the back bumper, or the seat warmer on the driver's seat.
- **Join point** is like the ***specific point in your car where you install*** the extra feature or accessory. For example, a join point can be the spot on the dashboard where you attach the GPS system, the spot on the back bumper where you mount the rearview camera, or the spot on the driver's seat where you plug in the seat warmer.
- **Advice** is like ***the action that the extra feature or accessory performs in your car***. For example, an advice can be showing you directions, displaying what's behind you, or heating up your seat.

:::

</details>
