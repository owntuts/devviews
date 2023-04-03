---
sidebar_position: 1000
sidebar_label: Boxing vs Unboxing
title: Differences Between Boxing vs Unboxing In C# (C-Sharp)
slug: /java-coding
tags:
  - Basic C# Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
What will be the output of below code ?

```java
import java.util.ArrayList;
import java.util.List;
public class Test {
    public static void main(String[] args) {
        List < Integer > arrayList = new ArrayList < > ();
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        arrayList.add(4);
        arrayList.add(1);
        for (Integer i: arrayList) {
            if (i == 1) {
                arrayList.remove(i);
            }
        }
        System.out.println(arrayList);
    }
}
```

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
The output of the code will be an exception which is `ConcurrentModificationException`.
This is because the loop uses a ***for-each loop which creates an iterator in the background*** to iterate over the list. During the loop, the list is modified by the removal of elements with a value of `1`, which results in the `ConcurrentModificationException` since modifying a collection during iteration is not allowed.
To avoid the exception, one can use the Iterator interface to remove the elements instead of using the for each loop.

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Test {
  public static void main(String[] args) {
    List<Integer> arrayList = new ArrayList<>();
    arrayList.add(1);
    arrayList.add(2);
    arrayList.add(3);
    arrayList.add(4);
    arrayList.add(1);
    
    Iterator<Integer> iter = arrayList.iterator();
    while (iter.hasNext()) {
      Integer i = iter.next();
      if (i == 1) {
        iter.remove();
      }
    }
    System.out.println(arrayList);
  }
}
```

</details>