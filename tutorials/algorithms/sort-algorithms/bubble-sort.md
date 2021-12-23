---
sidebar_position: 3
sidebar_label: Bubble Sort
title: Bubble Sort Algorithm
slug: /bubble-sort-algorithm
tags:
  - Sort Algorithms
---

### Problem:
:::quest \***`ಠ_ಠ`**\*

Given an array `A` with `n - 1` items in unsorted order. Let's sort the items in descending order?

:::

### Concept:

:::tip \***`ಠ_ಠ`**\*

Imagine items in an array is like bubbles. The lightest bubble will float to the top (the end of array)!

:::

### Bubble Algorithm Explained

We'll call `i` is ***phase*** & `j` is ***pass*** (or step).

- **First Phase (i start at n - 1)**: The pass ***`j` runs from `0` to `n - 1`***. On the way, it compares two adjacent items if there's `A[j] < A[j+1]`, it will swap (change) the position of the two items. At the end of the phase, ***the smallest will bubbles to the end of the array***.

  ![Bubble Algorithm Explained - phase 1](/img/tutorials/algorithm/buble-algo-pass-1.svg)

- **Second Phase (i = n - 2)**: Similar to the first phase but the pass  ***`j` runs from `0` to `n - 2`***.

  ![Bubble Algorithm Explained - phase 2](/img/tutorials/algorithm/buble-algo-pass-2.svg)

- **Phase #i**: And so on, at the phase `i`, the pass  ***`j` runs from `0` to `i`***.

  ![Bubble Algorithm Explained - phase 3](/img/tutorials/algorithm/buble-algo-pass-i.svg)

- **Last Phase (i = 1)**: At the last phase,  ***`j` runs from `0` to `1` ***. It compares `A[0]` and `A[1]` -> the algorithm ends!

### Implementation Notes

We have two for-loops, 
- one for phase `i` (runs from `n - 1` to `1`): `for (int i = n - 1; i >= 1; i--)`
- one for pass `j` (runs from `0` to `i`): `for (int j = 0; j <= i - i; j++)`

### Implementation Code

```cpp {3,4}
void bubbleSort(vector<int> A) {
  int n = A.size();
  for (int i = n - 1; i >= 1; i++) { // for-loop of phase i
    for (int j = 0; j <= i; j++) { // for-loop of pass j
      if (A[j] < A[j + 1]) {
        swap(A[j], A[j + 1])
      }
    }
  }
}
```


