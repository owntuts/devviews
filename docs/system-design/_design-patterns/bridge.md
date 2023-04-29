<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![singleton](/img/interviews/design-system/singleton.svg) -->

<details open>
<summary><h5>Bridge Pattern</h5></summary>

The bridge design pattern is a structural design pattern that ***separates the abstraction from the implementation***. It allows you to ***connect two pieces of code*** that have different behaviors or interfaces. It also follows the principle of ***composition over inheritance***.

In this example, The bridge pattern helps to decouple the **abstraction** (Shape) from the **implementation** (DrawAPI). **The bridge** here ***is the reference to the DrawAPI object in the Shape class***. This reference allows the Shape class to ***delegate the drawing details to the DrawAPI object***, which can be of any type that implements the DrawAPI interface. This way, the Shape class and its subclasses can vary independently from the DrawAPI class and its subclasses. 

![bridge](/img/interviews/design-system/bridge.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

```java
// This is the Implementor interface
interface DrawAPI {
    void drawCircle(int x, int y, int radius);
}

// These are the Concrete Implementor classes
class RedDraw implements DrawAPI {
    @Override
    public void drawCircle(int x, int y, int radius) {
        System.out.println("Drawing Circle[ color: red, radius: " + radius + ", x: " + x + ", y: " + y + "]");
    }
}

class BlueDraw implements DrawAPI {
    @Override
    public void drawCircle(int x, int y, int radius) {
        System.out.println("Drawing Circle[ color: blue, radius: " + radius + ", x: " + x + ", y: " + y + "]");
    }
}

// This is the Abstraction abstract class
abstract class Shape {
    protected DrawAPI drawAPI;
    
    protected Shape(DrawAPI drawAPI) {
        this.drawAPI = drawAPI;
    }
    
    public abstract void draw();
}

// These are the Refined Abstraction classes
class Circle extends Shape {
    private int x, y, radius;
    
    public Circle(int x, int y, int radius, DrawAPI drawAPI) {
        super(drawAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        drawAPI.drawCircle(x, y, radius);
    }
}

// This is the Client class
public class Main {
    public static void main(String[] args) {
        Shape redCircle = new Circle(100, 100, 10, new RedDraw());
        Shape blueCircle = new Circle(200, 200, 20, new BlueDraw());
        
        redCircle.draw(); // This will draw a red circle with radius 10 at coordinates (100, 100)
        blueCircle.draw(); // This will draw a blue circle with radius 20 at coordinates (200, 200)
    }
}

```
</details>
