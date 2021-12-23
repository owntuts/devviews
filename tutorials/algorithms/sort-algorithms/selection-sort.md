---
sidebar_position: 3
sidebar_label: Selection Sort
title: Selection Sort Algorithm
slug: /selection-sort-algorithm
tags:
  - Sort Algorithms
---

### Problem:
:::quest \***`ಠ_ಠ`**\*

Given an array `A` with `n - 1` items in unsorted order. Let's sort the items in <u>ascending order</u>?

:::

### Concept:

:::tip \***`ಠ_ಠ`**\*

Select first item and suppose it's minimum (***mark it as minimum***), then browses the rest items if there's an item lesser than the supposed minimum item, ***mark the new one as minimum***.

![Slection Sort Concept Demo](/img/tutorials/algorithm/selectionSort-demo.svg)

:::

### Selection Sort Algorithm Explained

We'll call `i` is ***Phase*** & `j` is ***Pass*** (or step).

- **First Phase (i start at 0)**: 
  - Mark the first item as minimum (first min item).
  - Let's the Pass ***`j` runs from `1` to `n - 1`***. On the way, it compares each item to the min item if there's `A[j] < A[min]`, it will mark the new position as min. At the end of the phase, we'll know which position is the real min item, then we swap the real min with the first supposed one.

  ![Selection Algorithm Explained - phase 1](/img/tutorials/algorithm/selection-algo-pass-1.svg)

- **Second Phase (i = 1)**: Similar to the first phase but 
  - Mark the first min at `1`.
  - The pass  ***`j` runs from `2` to `n - 1`***.

  ![Bubble Algorithm Explained - phase 2](/img/tutorials/algorithm/selection-algo-pass-2.svg)

- **Phase #i**: And so on, at the phase `i`,
  - Mark the first min at `i`.
  - The pass  ***`j` runs from `i + 1` to `n - 1`***.

  ![Bubble Algorithm Explained - phase 3](/img/tutorials/algorithm/selection-algo-pass-i.svg)

- **Last Phase (i = n - 2)**: At the last phase,  ***`j` runs from `n - 2` to `n - 1`***. It compares `A[n - 2]` to `A[n - 1]` -> the algorithm ends!

### Implementation Notes

We have two for-loops, 
- one for **the phase `i`** (runs from `0` to `n - 2`): `for (int i = 0; i <= n - 2; i++)`
- one for **the pass `j`** (runs from `i + 1` to `n - 1`): `for (int j = i + 1; j <= n - 1; j++)`

### Implementation Code

```cpp {4,6}
void selectionSort(vector<int> A) {
  int n = A.size();
	int min;
	for (int i = 0; i <= n - 2; i++) {
		min = i; // mark the position i as minimum
		for (int j = i + 1; j <= n - 1; j++) {
			if(A[j] < A[min]) {
				min = j; // mark the new position j as minimum
			}
		}
		swap(A[min], A[i]);
	 }
}
```


