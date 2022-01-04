---
sidebar_position: 3
sidebar_label: Heap
title: Heap Data Structure
slug: /heap-data-structure
tags:
  - Tree Data Structures
---

### First Views of A Heap

The following is a heap of stones. The rocks underneath is bigger than the rock on top. This is a case of min-heap.

![Heap data structure demo](/img/tutorials/data-tructure/heap-demo.svg) 

### What Is A Heap?
:::tip Definition
- **Max Heap data structure**: is a complete binary tree in which any given node is always ***greater*** than its child nodes.
- **Min Heap data structure**: is a complete binary tree in which any given node is always ***smaller*** than its child nodes.
:::

### How To Build A Heap?
:::note Problem
Given an array: `A = [3, 9, 2, 1, 4, 5]`, How to build a **max-heap** from that array?
:::

:::note Solution
![heap array demo](/img/tutorials/data-tructure/heap-array-demo.svg)

First, View the array as a tree in which if a node is `A[i]` then it's children will be `A[2*i + 1]` and `A[2i + 2]`.

![heap tree demo](/img/tutorials/data-tructure/heap-tree.svg)

Then, Heapify the above tree. Heapify is a proccess of bringing smaller/larger items upwards (see below).
:::

### Heapify Algorithm Explanation

Let's call:
  - `i` is the Phase, runs from `n/2 - 1` to `0`
  - `heapify` is the Heapify function.

* **First Phase**:
  - `i` starts at `2 = n/2 - 1`.
  ![Heapify array demo phase 1](/img/tutorials/data-tructure/heapify-array-phase-1.svg)
  -  `heapify` does:
      - marks `A[i]` as largest elelment, 
      - looks at children of `A[i]`, if they're larger than `A[i]`, it will re-mark the new largest and  swap `A[i]` with the new largest value.
      - Then does the same thing (recursively) to the new marked position.

  ![Heapify demo phase 1](/img/tutorials/data-tructure/heapify-phase-1.svg)

* **Second Phase**: Similar to First phase but `i` at `1`

  ![Heapify array demo phase 2](/img/tutorials/data-tructure/heapify-array-phase-2.svg)

  ![Heapify demo phase 1](/img/tutorials/data-tructure/heapify-phase-2.svg)

* **Final Phase**: Similar to First phase but `i` at `0`

  ![Heapify array demo phase 3](/img/tutorials/data-tructure/heapify-array-phase-3.svg)

  ![Heapify demo phase 1](/img/tutorials/data-tructure/heapify-phase-3.svg)

### Heapify Implementation Note

  - The phase `i` (runs from `n/2 - 1` to `0`): `for (int i = n/2 - 1; i >= 0; i--)`
  - Heapify start from node `i`, comes down and do heapify again => so it's call itself (recursive function).

### Heapify Implementation

#### Max Heap Tree Building

```cpp
void build_maxheap (vector<int> &A)
  {
    int n = A.size();
    for(int i = n/2 - 1 ; i >= 0 ; i--)
    {
      max_heapify (A, i) ;
    }
  }
```
#### Max Heapify
```cpp
void max_heapify(vector<int> &hT, int i)
{
  int n = hT.size();
  int largest = i; // mark i as largest
  int l = 2 * i + 1;
  int r = 2 * i + 2;
  // review the children & re-mark largest if needed
  if (l < n && hT[l] > hT[largest])
    largest = l;
  if (r < n && hT[r] > hT[largest])
    largest = r;

  if (largest != i)
  {
    swap(&hT[i], &hT[largest]);
    // do heapify recursively on new marked position
    heapify(hT, largest); 
  }
}

void swap(int *a, int *b)
{
  int temp = *b;
  *b = *a;
  *a = temp;
}
```

    
