<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![singleton](/img/interviews/design-system/singleton.svg) -->

<details open>
<summary><h5>Adapter Pattern</h5></summary>

The Adapter pattern ***allows two incompatible interfaces to work together*** by converting one interface into another. A real life example could be a case of ***card reader which acts as an adapter between memory card and a laptop***.

Example of Adapter pattern:

![adapter](/img/interviews/design-system/adapter.svg)

</details>

<details>
<summary><h5>Implementation</h5></summary>

```java
// The Target interface
interface MemoryCard {
    void insert();
    void readData();
}

// The Adaptee class
class SDcard {
    public void plugIn() {
        System.out.println("SD card plugged in");
    }

    public void getData() {
        System.out.println("Reading data from SD card");
    }
}

// The Adapter class
class CardReader implements MemoryCard {
    // Composition
    private SDcard sdcard;

    public CardReader(SDcard sdcard) {
        this.sdcard = sdcard;
    }

    // Delegation
    @Override
    public void insert() {
        sdcard.plugIn();
    }

    @Override
    public void readData() {
        sdcard.getData();
    }
}

// The Client class
class Laptop {
    public static void main(String[] args) {
        // Create an SD card object
        SDcard sdcard = new SDcard();

        // Create a card reader object and pass the SD card to it
        MemoryCard cardReader = new CardReader(sdcard);

        // Use the card reader as a memory card
        cardReader.insert();
        cardReader.readData();
    }
}
```

</details>
