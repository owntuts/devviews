<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/OSIvsTCP.png) -->

<details>
<summary><h5>OSI vs TCP/IP</h5></summary>

![OSIvsTCP](/img/interviews/design-system/OSIvsTCP.webp)

**OSI model** is a ***declaration*** of how network communication should be done, while **TCP/IP model** is an ***implementation*** of how network communication is actually done. OSI model defines the general functions and services of each layer, while TCP/IP model specifies the particular protocols and standards of each layer. OSI model is more abstract and flexible, while TCP/IP model is more concrete and rigid.

As you can see in image, TCP/IP is not implement exactly as OSI model:
- **OSI model** divides the network communication into ***seven layers***, ***each of which performs a specific function and communicates with the adjacent layers***. This is called a **vertical approach** because the data moves vertically from one layer to another. 
- **TCP/IP model**, on the other hand, combines some of the OSI layers into ***fewer layers***, and ***each layer can access any of the lower layers directly***. This is called a **horizontal approach** because the data can move horizontally across different layers. 

The vertical approach of OSI model allows more ***modularity and flexibility***, while the horizontal approach of TCP/IP model allows more ***efficiency and simplicity***.

</details>
