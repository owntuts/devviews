<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![grpc-architecture](/img/interviews/design-system/grpc-architecture.png) -->

<details open>
<summary><h5>Prototype Patterns</h5></summary>

This pattern is useful when we want to create new objects by ***copying an existing object (prototype) and modifying it*** according to our needs.

A real life example of the Prototype pattern in Java is ***creating a spreadsheet with many cells***. Instead of creating each cell from scratch and setting its style, we can use a prototype cell that has the desired style and ***clone it when creating new cells***. This way, we can avoid repeating the same code and save time and resources

![prototype](/img/interviews/design-system/prototype.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

```java
public abstract class Cell implements Cloneable {
  private String style;

  public Cell(String style) {
    this.style = style;
  }

  public String getStyle() {
    return style;
  }

  public void setStyle(String style) {
    this.style = style;
  }

  public abstract Cell clone();
}
```

Now let's create two concrete subclasses of Cell that implement the clone () method:

```java
public class TextCell extends Cell {

  private String text;

  public TextCell(String style, String text) {
    super(style);
    this.text = text;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  @Override
  public TextCell clone() {
    try {
      return (TextCell) super.clone();
    } catch (CloneNotSupportedException e) {
      throw new RuntimeException(e);
    }
  }
}

public class NumberCell extends Cell {

  private double value;

  public NumberCell(String style, double value) {
    super(style);
    this.value = value;
  }

  public double getValue() {
    return value;
  }

  public void setValue(double value) {
    this.value = value;
  }

  @Override
  public NumberCell clone() {
    try {
      return (NumberCell) super.clone();
    } catch (CloneNotSupportedException e) {
      throw new RuntimeException(e);
    }
  }
}
```

Now let's create a prototype cell with a specific style and use it to create new cells by cloning it:

```java
public class Main {

  public static void main(String[] args) {
    // Create a prototype cell with bold style
    Cell prototype = new TextCell("bold", "");

    // Create a text cell by cloning the prototype and setting its text
    TextCell textCell = (TextCell) prototype.clone();
    textCell.setText("Hello");

    // Create a number cell by cloning the prototype and setting its value
    NumberCell numberCell = (NumberCell) prototype.clone();
    numberCell.setValue(42);

    // Print the cells
    System.out.println(textCell.getStyle() + " " + textCell.getText());
    System.out.println(numberCell.getStyle() + " " + numberCell.getValue());
  }
}
```

</details>
