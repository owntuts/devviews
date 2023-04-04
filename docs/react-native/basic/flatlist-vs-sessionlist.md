---
sidebar_position: 1000
sidebar_label: Boxing vs Unboxing
title: Differences Between Boxing vs Unboxing In C# (C-Sharp)
slug: /reactnative-flatlist-vs-sessionlist
tags:
  - Basic React Native Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
FlatList vs SessionList in react native?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
In React Native, there are two main types of components that are commonly used to support list rendering:

**FlatList**: `FlatList` is a high-performance component that is suitable for rendering large lists of data. It provides a lot of flexibility and customization options, such as support for scroll events, item separators, and more. In addition, it uses a virtualized list to optimize performance by rendering only the visible items on the screen.

**SectionList**: `SectionList` is similar to `FlatList`, but provides support for rendering data in nested sections. It allows you to group your data into sections and render each section as a separate list, with the ability to specify a header and/or footer for each section.

Both `FlatList` and `SectionList` can be used to render dynamic lists of data with high performance. However, `FlatList` is more suitable for rendering large, flat lists without nested sections, while `SectionList` is best for rendering nested data with sections, such as products by category or messages by date.

</details>