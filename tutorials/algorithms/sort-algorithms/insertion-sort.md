---
sidebar_position: 40
sidebar_label: Insertion Sort
title: Insertion Sort Algorithm
slug: /insertion-sort-algorithm
tags:
  - Sort Algorithms
---

### Problem:
:::quest \***`ಠ_ಠ`**\*

Given an array `A` with `n - 1` items in unsorted order. Let's sort the items in <u>ascending order</u>?

:::

### Concept:

:::tip \***`ಠ_ಠ`**\*

Suppose the ***first part of the array `A` is sorted*** and the ***rest part is unsorted***. We compare an item (called `x`) in the rest part to each item in the sorted part to ***find where `x` can be inserted*** into the sorted part.

![Insertion sort algorithm demo](/img/tutorials/algorithm/insertion-sort-demo.svg)

:::

### Insertion Sort Algorithm Explained

We'll call `i` is ***Phase*** & `j` is ***Pass*** (or step).

- **First Phase (i start at 1)**: 
  - View ***`A[0]` as sorted part*** and `x = A[1]` (is an element in ***unsorted part***).
  - Let's the Pass ***`j` runs from `0` to `0`***. It compares `A[0]` with `x`, if `A[0] > x`, shift the position `A[0]` to `1` to make room for inserting `x`.
  
  ![Selection Algorithm Explained - phase 1](/img/tutorials/algorithm/insertionSort-pass-1.svg)

- **Second Phase (i = 1)**: Similar to the first phase.
  - ***`A[0], A[1]` as sorted part*** and `x = A[2]`.
  - The pass  ***`j` runs from `1` to `0`***. On the way, it compares each item to `x` if there's `A[j] > x`, we will shift `A[j]` to the next position `j + 1` to make room for inserting `x` later. At the end of the phase, we'll find the minimun position of `j` to insert `x` into that.

  ![Bubble Algorithm Explained - phase 2](/img/tutorials/algorithm/insertionSort-pass-2.svg)

- **Phase #i**: And so on, at the phase `i`,
  - ***`A[0], A[1], ..., A[i - 1]` as sorted part*** and `x = A[i]`.
  - The pass  ***`j` runs from `i - 1` to `0`***.

  ![Bubble Algorithm Explained - phase 3](/img/tutorials/algorithm/insertionSort-pass-i.svg)

- **Last Phase (i = n - 1)**: At the last phase,  ***`j` runs from `n - 2` to `0`***. It compares `A[n - 2]` to `x = A[n - 1]` and do insertion as above -> the algorithm ends!

### Implementation Notes

We have two for-loops, 
- one for **the phase `i`** (runs from `1` to `n - 1`): `for (int i = 1; i <= n - 1; i++)`
- one for **the pass `j`** (runs from `i - 1` to `0`): `for (int j = i - 1; j >= 0; j--)`

### Implementation Code

```cpp {3,5}
void insertionSort(vector<int> A) {
  int n = A.size();
	for (int i = 1; i <= n - 1; i++) {
		x = A[i]; // View A[i] as an item need to be inserted
		for (int j = i - 1; j >= 0; j--) {
			if(A[j] > x) {
        A[j + 1] = A[j];
			}
		}
    A[j + 1] = x; // inser x into suitable position
	 }
}
```


