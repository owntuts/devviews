:::quest Question:

Block Formatting Context

:::

<details>
  <summary><h5>Block Formatting Context</h5></summary>

**Block Formatting Context** means that the layout of block boxes inside a container is determined by the rules of normal flow, which include ***how floats and clears are handled and how margins collapse***. A BFC is created by an element that has certain CSS properties applied to it, such as ***`float`, `position`, `display`, or `overflow`***. These properties do not necessarily layout the container as block boxes, but they change the layout behavior of the container and its children. A BFC can contain both block and inline elements, but it will only affect the layout of block boxes. The CSS style formatting of the container does not necessarily apply to all of its children, unless they inherit those properties.

Block Formatting Context is similar a bookshelf. A bookshelf is a container that holds books and other items. The books and items are arranged in a certain way on the bookshelf, following some rules (such as, The books and items are placed on the horizontal shelves, can be aligned to the left, right, or center of the shelf,...).

#### Example

Here is an example of creating a new BFC using the `overflow` property:

```html
<style>
  .container {
    border: 2px solid black;
    padding: 10px;
    /* create a new BFC */
    overflow: hidden;
  }

  .float {
    float: left;
    width: 100px;
    height: 100px;
    background: green;
    margin: 10px;
  }

  .content {
    background: yellow;
    margin: 10px;
  }
</style>

<div class="container">
  <div class="float">I am a float</div>
  <div class="content">I am the content</div>
</div>
```
If the container element did not create a new BFC, the float element would overflow outside its boundaries and overlap with its border and padding. The content element would also wrap around the float element and fill the remaining space in the container element.

#### Ways to Create BFC

- `overflow`: When an element has an overflow value other than visible, it creates a new BFC for its contents, which means that it will contain any floats inside it and exclude any floats outside it. It will also prevent any margin collapsing between its block boxes and other block boxes in the same context. This can help to achieve some layout effects, such as containing floats or making equal height columns.
- `flow-root`: The `overflow` property is not meant for creating a BFC, but for handling overflowing content. There are some drawbacks of using this property for creating a BFC, such as ***unwanted scrollbars or clipped shadows***. A better way to create a BFC is to use the display property with a value of `flow-root`, which creates a new BFC without affecting the overflow behavior.
    ```css
      .container {
        /* create a new BFC */
        display: flow-root;
    }
    ```
- **float**: any element that is floated (has a value other than none for the float property) creates a new BFC for its contents.
- **position**: any element that is absolutely or fixed positioned (has a value of absolute or fixed for the position property) creates a new BFC for its contents.
- **display**: any element that has a display value of inline-block, table-cell, table-caption, flex, grid, or flow-root creates a new BFC for its contents.
- **contain**: any element that has a contain value of layout, content, or paint creates a new BFC for its contents.
- **column-span**: any element that has a column-span value of all creates a new BFC for its contents.

Each of these properties has different effects on the layout and behavior of the element and its children, so you should choose the one that suits your needs best. A good way to check if an element creates a new BFC is to see if it contains any floats inside it or excludes any floats outside it.

</details>

<details>
  <summary><h5>Specificity in CSS</h5></summary>

The concept of **specificity** in CSS is a way of determining which style rules are applied to an element when there are conflicting declarations. Specificity is based on the type and order of CSS selectors that match the element. The more specific a selector is, the higher priority it has over other selectors.

Specificity is calculated by counting the number of different types of selectors in a selector. There are four types of selectors:

- **ID selectors**, such as #example, have the highest specificity and are counted as `1-0-0`.
- **Class selectors**, such as .myClass, **attribute selectors**, such as [type="radio"], and **pseudo-classes**, such as :hover, have the second highest specificity and are counted as `0-1-0`.
- **Type selectors**, such as p, h1, and td, and **pseudo-elements**, such as ::before, ::placeholder, and all other selectors with double-colon notation, have the third highest specificity and are counted as `0-0-1`.
- **Universal selector** (*), **pseudo-class** :where() and its parameters, **combinators** (+, >, ~, " ", and ||), and **negation pseudo-class** (`:not()`) have no specificity and are counted as `0-0-0`.

The specificity of a selector is the sum of its components in each category. For example, the selector #demo .test p::before has a specificity of 1-1-2 (1 ID selector + 1 class selector + 1 type selector + 1 pseudo-element).

When comparing the specificity of two selectors that match the same element, the one with the higher specificity wins and its style rules are applied. If the specificity is equal, then the order of appearance matters: the last declaration in the source code wins. However, there is one exception to this rule: if a declaration has the !important keyword, it overrides any other declaration, even if it has lower specificity or appears earlier in the source code.

</details>