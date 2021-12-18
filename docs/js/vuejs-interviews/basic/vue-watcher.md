---
sidebar_position: 1000
sidebar_label: JIT vs AOT
title: Watch vs Computed In VueJS
slug: /watch-vs-computed-vuejs
tags:
  - Basic Vuejs Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Could you tell the differences between **Watcher** vs **computed** property in Vue.js?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* : 

computed                                                      |watch      
--------------------------------------------------------------|-----------
**purpose**: composing new data derived from other data       | observe and react to data changes on a current active instance
Computed properties always have to return a value             | Don't have a return value                                                    
Should not have any side effects  => So, it's synchronous     | Can have side effects => So, it's a synchronous                                              
**Usage**: When you want to perform caching/cheap computation | When you want to perform asynchronous or expensive operations in response to changing data


</details>