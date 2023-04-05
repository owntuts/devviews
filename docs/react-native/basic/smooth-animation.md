---
sidebar_position: 1000
sidebar_label: Smooth Animation
title: Smooth Animation
slug: /smooth-animation
tags:
  - Basic React Native Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
How to make your React Native animations smooth?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :
Here are some tips to make your React Native app feel smooth on animations:

1. Use the Animated API instead of setState
2. Use shouldComponentUpdate to prevent unnecessary re-renders
3. Use requestAnimationFrame to schedule animations
4. Use the InteractionManager API to prioritize animations
5. Use native driver for animations
6. Use FlatList instead of ScrollView for long lists

An example of how to use `InteractionManager` to deal with executing the expensive operation of fetching data to make React Native smooth:
```jsx
import React, { useEffect, useState } from 'react';
import { View, Text, InteractionManager } from 'react-native';

const MyScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      // Perform expensive operation here, such as fetching data from network
      fetchData().then((result) => {
        setData(result);
        setIsLoading(false);
      });
    });
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

```

</details>