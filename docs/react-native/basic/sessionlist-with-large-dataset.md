---
sidebar_position: 1000
sidebar_label: Boxing vs Unboxing
title: Differences Between Boxing vs Unboxing In C# (C-Sharp)
slug: /sessionlist-with-large-dataset
tags:
  - Basic React Native Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
I have a large data, I want to group the data into sections and render each section as a separate list but would like to use a virtualized list to optimize performance. How to do that?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
You can use the `SectionList` component in React Native to group your data into sections and render each section as a separate list. To optimize performance, you can use the `getItemLayout` prop of `SectionList` to provide estimated dimensions for each item, and the `windowSize` prop to configure the number of items to render outside of the visible area.

Here's an example of how to use `SectionList` with virtualization:

```jsx
import React from 'react';
import { View, Text, SectionList } from 'react-native';

const data = [
  { title: 'Section 1', data: ['Item 1-1', 'Item 1-2', 'Item 1-3'] },
  { title: 'Section 2', data: ['Item 2-1', 'Item 2-2', 'Item 2-3'] },
  { title: 'Section 3', data: ['Item 3-1', 'Item 3-2', 'Item 3-3'] },
  // more sections and items...
];

const Item = ({ title }) => {
  return (
    <View style={{ padding: 16 }}>
      <Text>{title}</Text>
    </View>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={{ backgroundColor: '#f4f4f4', padding: 8 }}>
      <Text>{title}</Text>
    </View>
  );
};

const App = () => {
  const getItemLayout = (data, index) => ({
    length: 50, // estimated item height
    offset: 50 * index,
    index,
  });

  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
      getItemLayout={getItemLayout}
      initialNumToRender={20} // number of items to render initially
      windowSize={30} // number of items to keep outside of the visible area
    />
  );
};

export default App;
```
</details>