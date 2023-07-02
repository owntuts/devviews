"use strict";(self.webpackChunkinterviewdev=self.webpackChunkinterviewdev||[]).push([[6288],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(o,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const l={sidebar_position:1e3,sidebar_label:"Data Structure",title:"Data Structure",tags:["Java Knowledge"]},i=void 0,s={unversionedId:"java/hero/data-structure",id:"java/hero/data-structure",title:"Data Structure",description:"Data Structure",source:"@site/docs/java/hero/data-structure.md",sourceDirName:"java/hero",slug:"/java/hero/data-structure",permalink:"/devviews/interviews/java/hero/data-structure",draft:!1,editUrl:"https://github.com/owntuts/devviews/edit/main/docs/java/hero/data-structure.md",tags:[{label:"Java Knowledge",permalink:"/devviews/interviews/tags/java-knowledge"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,sidebar_label:"Data Structure",title:"Data Structure",tags:["Java Knowledge"]},sidebar:"javaInterviewSidebar",previous:{title:"Boxing vs Unboxing",permalink:"/devviews/interviews/java-coding"},next:{title:"Functional Interface",permalink:"/devviews/interviews/java/hero/funtional-interface"}},o={},d=[],u={toc:d},m="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("h5",null,"Data Structure")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"How Java Works",src:n(7490).Z,width:"930",height:"523"})),(0,r.kt)("p",null,"Data structure in Java can be classified into two types: primitive and non-primitive."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Primitive")," data structures are the basic types of data that are built-in in Java, such as byte, short, int, long, float, double, char, and boolean. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Non-primitive")," data structures are the complex types of data that are derived from primitive data structures or defined by the user, such as array, string, class, object, interface, etc.")),(0,r.kt)("p",null,"Non-primitive data structures can be further classified into two types: linear and non-linear."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Linear data structures")," are the ones that store data ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"in a sequential and ordered manner")),", such that each element has a unique predecessor and successor, except the first and last element. Examples of linear data structures are ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"linked list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stack"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"queue"),", etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Non-linear data structures")," are the ones that store data ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"in a hierarchical or networked manner")),", such that each element may have more than one predecessor or successor. Examples of non-linear data structures are ",(0,r.kt)("inlineCode",{parentName:"p"},"tree"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"graph"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"heap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hash table"),", etc."))),(0,r.kt)("p",null,":::note Tips To Remember"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linear prefix: ",(0,r.kt)("inlineCode",{parentName:"li"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Linked"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Priority")),(0,r.kt)("li",{parentName:"ul"},"Non-linear prefix: ",(0,r.kt)("inlineCode",{parentName:"li"},"Hash"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Tree")),(0,r.kt)("li",{parentName:"ul"},"Suffix: ",(0,r.kt)("inlineCode",{parentName:"li"},"Set"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"List"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Table"))),(0,r.kt)("p",null,":::")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"Iterable")),(0,r.kt)("p",null,"Iterable in Java is an interface that represents a collection of elements that can be iterated over using a for-each loop or an iterator & allows sequential access to the elements of a collection. It has three methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"hasNext()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"next()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"remove()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// A custom class that implements Iterable interface\nclass MyCollection<T> implements Iterable<T> {\n  // An array to store the elements\n  private T[] array;\n\n  // A constructor to initialize the array\n  public MyCollection(T[] array) {\n    this.array = array;\n  }\n\n  // An implementation of iterator () method that returns an Iterator object\n  public Iterator<T> iterator() {\n    // Return an anonymous inner class that implements Iterator interface\n    return new Iterator<T>() {\n      // A variable to keep track of the current index\n      private int index = 0;\n\n      // An implementation of hasNext () method that checks if there are more elements\n      public boolean hasNext() {\n        return index < array.length;\n      }\n\n      // An implementation of next () method that returns the next element\n      public T next() {\n        return array[index++];\n      }\n\n      // An implementation of remove () method that is not supported\n      public void remove() {\n        throw new UnsupportedOperationException();\n      }\n    };\n  }\n}\n")),(0,r.kt)("p",null,"To use an Iterable object in Java, we can either use a for-each loop or an explicit iterator. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Create an array of strings\nString[] names = {"Alice", "Bob", "Charlie"};\n\n// Create an instance of MyCollection class with the array\nMyCollection<String> myCollection = new MyCollection<>(names);\n\n// Use a for-each loop to iterate over the elements\nfor (String name : myCollection) {\n  System.out.println(name);\n}\n\n// Use an explicit iterator to iterate over the elements\nIterator<String> iterator = myCollection.iterator();\nwhile (iterator.hasNext()) {\n  System.out.println(iterator.next());\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"Array vs Array List")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Difference"),(0,r.kt)("th",{parentName:"tr",align:null},"Array"),(0,r.kt)("th",{parentName:"tr",align:null},"ArrayList"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Fixed-size data structure"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable-size data structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Can store primitive types or objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Can only store objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Access"),(0,r.kt)("td",{parentName:"tr",align:null},"By using the index operator []"),(0,r.kt)("td",{parentName:"tr",align:null},"By using the get () and set () methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Methods"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not have any built-in methods"),(0,r.kt)("td",{parentName:"tr",align:null},"Has many methods to manipulate the data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Generics"),(0,r.kt)("td",{parentName:"tr",align:null},"Can\u2019t use generics along"),(0,r.kt)("td",{parentName:"tr",align:null},"Can use generics along")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Declare and initialize an array of int type\nint[] numbers = {10, 20, 30, 40};\n\n// Print the length of the array\nSystem.out.println(numbers.length); // Output: 4\n\n// Print the first element of the array\nSystem.out.println(numbers[0]); // Output: 10\n\n// Change the value of the second element of the array\nnumbers[1] = 25;\n\n// Print the second element of the array\nSystem.out.println(numbers[1]); // Output: 25\n\n// Try to add a new element to the array\nnumbers[4] = 50; // Error: ArrayIndexOutOfBoundsException\n\n// Declare and initialize an ArrayList of Integer type\nArrayList<Integer> numbersList = new ArrayList<Integer>();\n\n// Add some elements to the ArrayList\nnumbersList.add(10);\nnumbersList.add(20);\nnumbersList.add(30);\nnumbersList.add(40);\n\n// Print the size of the ArrayList\nSystem.out.println(numbersList.size()); // Output: 4\n\n// Print the first element of the ArrayList\nSystem.out.println(numbersList.get(0)); // Output: 10\n\n// Change the value of the second element of the ArrayList\nnumbersList.set(1, 25);\n\n// Print the second element of the ArrayList\nSystem.out.println(numbersList.get(1)); // Output: 25\n\n// Add a new element to the end of the ArrayList\nnumbersList.add(50);\n\n// Print the size of the ArrayList\nSystem.out.println(numbersList.size()); // Output: 5\n\n// Print the last element of the ArrayList\nSystem.out.println(numbersList.get(4)); // Output: 50\n\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"ArrayList vs. LinkedList vs. Vector vs. Stack")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Difference"),(0,r.kt)("th",{parentName:"tr",align:null},"ArrayList"),(0,r.kt)("th",{parentName:"tr",align:null},"LinkedList"),(0,r.kt)("th",{parentName:"tr",align:null},"Vector"),(0,r.kt)("th",{parentName:"tr",align:null},"Stack"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Implementation"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses a dynamic array as its internal data structure"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses a doubly linked list as its internal data structure"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses a synchronized dynamic array as its internal data structure"),(0,r.kt)("td",{parentName:"tr",align:null},"Extends Vector and uses a LIFO (last-in first-out) order for its elements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Can grow or shrink dynamically as needed"),(0,r.kt)("td",{parentName:"tr",align:null},"Can grow or shrink dynamically as needed"),(0,r.kt)("td",{parentName:"tr",align:null},"Can grow or shrink dynamically as needed"),(0,r.kt)("td",{parentName:"tr",align:null},"Can grow or shrink dynamically as needed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows random access to any element by using its index"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not allow random access, requires sequential traversal to access any element"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows random access to any element by using its index"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not allow random access, only allows access to the top element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Fast for get and set operations, slow for add and remove operations when resizing is involved or shifting is required"),(0,r.kt)("td",{parentName:"tr",align:null},"Fast for add and remove operations at any position, slow for get and set operations"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to ArrayList, but slower due to synchronization overhead"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to Vector, but provides additional methods such as push, pop, peek, and search")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Synchronization"),(0,r.kt)("td",{parentName:"tr",align:null},"Not synchronized, not thread-safe"),(0,r.kt)("td",{parentName:"tr",align:null},"Not synchronized, not thread-safe"),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronized, thread-safe"),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronized, thread-safe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"Not a legacy class, introduced in Java 1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Not a legacy class, introduced in Java 1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"A legacy class, part of the original Java 1.0 API"),(0,r.kt)("td",{parentName:"tr",align:null},"A legacy class, part of the original Java 1.0 API")))),(0,r.kt)("p",null,"Here are some examples to demonstrate the usage of these classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Import the required classes\nimport java.util.ArrayList;\nimport java.util.LinkedList;\nimport java.util.Vector;\nimport java.util.Stack;\n\n// Create a class with a main method\npublic class Main {\n\n  // Define the main method\n  public static void main(String[] args) {\n\n    // Create an ArrayList of String type\n    ArrayList<String> names = new ArrayList<String>();\n\n    // Add some elements to the ArrayList\n    names.add("Alice");\n    names.add("Bob");\n    names.add("Charlie");\n\n    // Print the size and contents of the ArrayList\n    System.out.println("ArrayList size: " + names.size());\n    System.out.println("ArrayList elements: " + names);\n\n    // Get and set an element using its index\n    System.out.println("First element: " + names.get(0));\n    names.set(0, "Ann");\n    System.out.println("First element after update: " + names.get(0));\n\n    // Create a LinkedList of Integer type\n    LinkedList<Integer> numbers = new LinkedList<Integer>();\n\n    // Add some elements to the LinkedList\n    numbers.add(10);\n    numbers.add(20);\n    numbers.add(30);\n\n    // Print the size and contents of the LinkedList\n    System.out.println("LinkedList size: " + numbers.size());\n    System.out.println("LinkedList elements: " + numbers);\n\n    // Add and remove an element at any position\n    numbers.add(1, 15);\n    System.out.println("LinkedList elements after adding 15 at index 1: " + numbers);\n    numbers.remove(2);\n    System.out.println("LinkedList elements after removing element at index 2: " + numbers);\n\n    // Create a Vector of Character type\n    Vector<Character> letters = new Vector<Character>();\n\n    // Add some elements to the Vector\n    letters.add(\'A\');\n    letters.add(\'B\');\n    letters.add(\'C\');\n\n    // Print the size and contents of the Vector\n    System.out.println("Vector size: " + letters.size());\n    System.out.println("Vector elements: " + letters);\n\n    // Sort and search the Vector using Collections class methods\n    Collections.sort(letters);\n    System.out.println("Vector elements after sorting: " + letters);\n    int index = Collections.binarySearch(letters, \'B\');\n    System.out.println("Index of B in Vector: " + index);\n\n    // Create a Stack of Double type\n    Stack<Double> values = new Stack<Double>();\n\n    // Add some elements to the Stack using push method\n    values.push(1.0);\n    values.push(2.0);\n    values.push(3.0);\n\n    // Print the size and contents of the Stack\n    // Print the size and contents of the Stack\n    System.out.println("Stack size: " + values.size());\n    System.out.println("Stack elements: " + values);\n\n    // Access and remove the top element using pop and peek methods\n    System.out.println("Top element: " + values.peek());\n    values.pop();\n    System.out.println("Top element after pop: " + values.peek());\n\n    // Search for an element using search method\n    int position = values.search(2.0);\n    System.out.println("Position of 2.0 in Stack: " + position);\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"HashSet vs. TreeSet vs. LinkedHashSet")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"HashSet"),(0,r.kt)("th",{parentName:"tr",align:null},"LinkedHashSet"),(0,r.kt)("th",{parentName:"tr",align:null},"TreeSet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Internal Working"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses HashMap for storing objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses LinkedHashMap for storing objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses TreeMap for storing objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"When To Use"),(0,r.kt)("td",{parentName:"tr",align:null},"If you don\u2019t want to maintain insertion order but want to store unique objects"),(0,r.kt)("td",{parentName:"tr",align:null},"If you want to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"maintain the insertion order"))," of elements then you can use LinkedHashSet"),(0,r.kt)("td",{parentName:"tr",align:null},"If you want to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"sort the elements"))," according to some Comparator then use TreeSet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not maintain insertion order"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains the insertion order of objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Orders the elements according to supplied Comparator or natural ascending order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Complexity of Operations"),(0,r.kt)("td",{parentName:"tr",align:null},"O(1) for insertion, removing, and retrieving objects"),(0,r.kt)("td",{parentName:"tr",align:null},"O(1) for insertion, removing, and retrieving operations"),(0,r.kt)("td",{parentName:"tr",align:null},"O(log(n)) for insertion, removing, and retrieving operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Better than LinkedHashSet and TreeSet"),(0,r.kt)("td",{parentName:"tr",align:null},"Slower than HashSet but faster than TreeSet"),(0,r.kt)("td",{parentName:"tr",align:null},"Slower than HashSet and LinkedHashSet due to sorting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compare"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses equals() and hashCode() methods to compare the objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses equals() and hashCode() methods to compare it\u2019s objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses compare() and compareTo() methods to compare the objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null Elements"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows only one null value"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows only one null value"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not permit null value")))),(0,r.kt)("p",null,"Here is an example of how to use each of these classes in Java:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.*;\n\nclass Example {\n\n  public static void main(String args[]) {\n\n    // Create HashSet\n    HashSet<String> hashSet = new HashSet<>();\n    // Add elements to HashSet\n    hashSet.add("Java");\n    hashSet.add("Angular");\n    hashSet.add("Spring");\n    hashSet.add("Oracle");\n    hashSet.add("MySQL");\n    // Add duplicate elements to HashSet\n    hashSet.add("Java");\n    hashSet.add("Spring");\n    // Add null values to HashSet\n    hashSet.add(null);\n    hashSet.add(null);\n    // Print HashSet elements\n    System.out.println(hashSet); // [null, Java, MySQL, Spring, Oracle, Angular]\n\n    // Create LinkedHashSet\n    LinkedHashSet<String> linkedHashSet = new LinkedHashSet<>();\n    // Add elements to LinkedHashSet\n    linkedHashSet.add("Java");\n    linkedHashSet.add("Angular");\n    linkedHashSet.add("Spring");\n    linkedHashSet.add("Oracle");\n    linkedHashSet.add("MySQL");\n    // Add duplicate elements to LinkedHashSet\n    linkedHashSet.add("Java");\n    linkedHashSet.add("Spring");\n    // Add null values to LinkedHashSet\n    linkedHashSet.add(null);\n    linkedHashSet.add(null);\n    // Print LinkedHashSet elements\n    System.out.println(linkedHashSet); // [Java, Angular, Spring, Oracle, MySQL, null]\n\n    // Create TreeSet\n    TreeSet<String> treeSet = new TreeSet<>();\n    // Add elements to TreeSet\n    treeSet.add("Java");\n    treeSet.add("Angular");\n    treeSet.add("Spring");\n    treeSet.add("Oracle");\n    treeSet.add("MySQL");\n    // Add duplicate elements to TreeSet\n    treeSet.add("Java");\n    treeSet.add("Spring");\n    // Print TreeSet elements\n    System.out.println(treeSet); // [Angular, Java, MySQL, Oracle, Spring]\n  }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h5",null,"HashMap vs. TreeMap vs. HashTable vs. LinkedHashMap")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"HashMap"),(0,r.kt)("th",{parentName:"tr",align:null},"TreeMap"),(0,r.kt)("th",{parentName:"tr",align:null},"HashTable"),(0,r.kt)("th",{parentName:"tr",align:null},"LinkedHashMap"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Internal Working"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses hash table for storing key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses red-black tree for storing key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses hash table for storing key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses hash table and doubly-linked list for storing key-value pairs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"When To Use"),(0,r.kt)("td",{parentName:"tr",align:null},"If you don\u2019t care about the order of elements and want fast access and insertion"),(0,r.kt)("td",{parentName:"tr",align:null},"If you want to store elements in sorted order by keys or by a custom comparator"),(0,r.kt)("td",{parentName:"tr",align:null},"If you want a legacy thread-safe map that does not allow null keys or values"),(0,r.kt)("td",{parentName:"tr",align:null},"If you want to maintain the insertion order or access order of elements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not maintain any order"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains ascending order by keys or by a custom comparator"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not maintain any order"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintains insertion order or access order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Complexity of Operations"),(0,r.kt)("td",{parentName:"tr",align:null},"O(1) for get, put, remove and containsKey (average case)"),(0,r.kt)("td",{parentName:"tr",align:null},"O(log(n)) for get, put, remove and containsKey"),(0,r.kt)("td",{parentName:"tr",align:null},"O(1) for get, put, remove and containsKey (average case)"),(0,r.kt)("td",{parentName:"tr",align:null},"O(1) for get, put, remove and containsKey (average case)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Faster than TreeMap and HashTable"),(0,r.kt)("td",{parentName:"tr",align:null},"Slower than HashMap and HashTable due to sorting"),(0,r.kt)("td",{parentName:"tr",align:null},"Slower than HashMap and LinkedHashMap due to synchronization"),(0,r.kt)("td",{parentName:"tr",align:null},"Slower than HashMap but faster than HashTable due to maintaining order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compare"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses equals() and hashCode() methods to compare keys and values"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses compare() or compareTo() methods to compare keys and values"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses equals() and hashCode() methods to compare keys and values"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses equals() and hashCode() methods to compare keys and values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null Elements/Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows one null key and multiple null values"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not allow null key but allows multiple null values"),(0,r.kt)("td",{parentName:"tr",align:null},"Does not allow null key or null value"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows one null key and multiple null values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Thread-Safety"),(0,r.kt)("td",{parentName:"tr",align:null},"Not thread-safe as it is not synchronized"),(0,r.kt)("td",{parentName:"tr",align:null},"Not thread-safe as it is not synchronized"),(0,r.kt)("td",{parentName:"tr",align:null},"Thread-safe as it is synchronized on the whole map"),(0,r.kt)("td",{parentName:"tr",align:null},"Not thread-safe as it is not synchronized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fail-Fast Behavior"),(0,r.kt)("td",{parentName:"tr",align:null},"Iterator is fail-fast (throws ConcurrentModificationException) but cannot be guaranteed in the presence of unsynchronized concurrent modification"),(0,r.kt)("td",{parentName:"tr",align:null},"Iterator is fail-fast (throws ConcurrentModificationException) but cannot be guaranteed in the presence of unsynchronized concurrent modification Iterator is fail-fast (throws ConcurrentModificationException) but cannot be guaranteed in the presence of unsynchronized concurrent modification"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}))))))}p.isMDXComponent=!0},7490:function(e,t,n){t.Z=n.p+"assets/images/data-structure-e44e149cee82c3fbb1eb80da5950e3cc.png"}}]);