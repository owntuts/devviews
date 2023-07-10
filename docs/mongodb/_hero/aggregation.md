<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Aggregation Pineline</h5></summary>

Aggregation pipeline is a way of processing and transforming data in MongoDB by ***passing documents through a series of stages***. Each stage performs an operation on the input documents and outputs the modified documents to the next stage. The final output of the pipeline is the result of the aggregation.

```js
// Run an aggregation pipeline on the orders collection
db.orders.aggregate([
  // Stage 1: Group documents by pizza name and calculate the average price
  { $group: { _id: "$name", avgPrice: { $avg: "$price" } } },
  // Stage 2: Filter documents by average price greater than 15
  { $match: { avgPrice: { $gt: 15 } } },
  // Stage 3: Include only the name and average price fields in the output
  { $project: { name: 1, avgPrice: 1 } },
  // Stage 4: Sort the documents by average price in descending order
  { $sort: { avgPrice: -1 } },
  // Stage 5: Limit the output to only 3 documents
  { $limit: 3 }
])

```
</details>

<details>
<summary><h5>Aggregation Pipeline Stages</h5></summary>

Aggregation pipeline stages are the steps that process and transform data in an aggregation pipeline. Each stage takes an input collection or the output of the previous stage and performs some operation on it. The output of the last stage is the result of the aggregation².

Some of the common aggregation pipeline stages are:

## $match

This stage filters documents by a given condition and passes only the matching documents to the next stage. For example:

```javascript
// Stage 1: Filter pizza order documents by pizza size
{ $match: { size: "medium" } }
```

## $project

This stage specifies the fields to include or exclude in the output documents. For example:

```javascript
// Stage 2: Include only the name and quantity fields in the output
{ $project: { name: 1, quantity: 1 } }
```

## $group

This stage groups documents by a given expression and applies an accumulator function to each group. For example:

```javascript
// Stage 3: Group remaining documents by pizza name and calculate total quantity
{ $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } }
```

## $sort

This stage sorts the documents by a specified order. For example:

```javascript
// Stage 4: Sort the documents by total quantity in descending order
{ $sort: { totalQuantity: -1 } }
```

## $limit

This stage passes only the first n documents to the next stage, where n is the specified limit. For example:

```javascript
// Stage 5: Limit the output to only 3 documents
{ $limit: 3 }
```

These are just some examples of aggregation pipeline stages. There are many more stages that can perform different operations, such as `$lookup`, `$unwind`, `$bucket`, `$facet`, etc³.

You can use the `db.collection.aggregate()` method to run an aggregation pipeline on a collection. For example:

```javascript
// Run an aggregation pipeline on the orders collection
db.orders.aggregate([
  // Stage 1: Filter pizza order documents by pizza size
  { $match: { size: "medium" } },
  // Stage 2: Include only the name and quantity fields in the output
  { $project: { name: 1, quantity: 1 } },
  // Stage 3: Group remaining documents by pizza name and calculate total quantity
  { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } },
  // Stage 4: Sort the documents by total quantity in descending order
  { $sort: { totalQuantity: -1 } },
  // Stage 5: Limit the output to only 3 documents
  { $limit: 3 }
])
```
## $skip

This stage skips over the specified number of documents that pass into the stage and passes the remaining documents to the next stage. For example:

```javascript
// Stage 6: Skip the first 2 documents
{ $skip: 2 }
```

## $unwind

This stage deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element. For example:

```javascript
// Stage 7: Unwind the toppings array field
{ $unwind: "$toppings" }
```

These are just some examples of aggregation pipeline stages. There are many more stages that can perform different operations, such as `$lookup`, `$bucket`, `$facet`, etc³.

You can use the `db.collection.aggregate()` method to run an aggregation pipeline on a collection. For example:

```javascript
// Run an aggregation pipeline on the orders collection
db.orders.aggregate([
  // Stage 1: Filter pizza order documents by pizza size
  { $match: { size: "medium" } },
  // Stage 2: Include only the name and quantity fields in the output
  { $project: { name: 1, quantity: 1 } },
  // Stage 3: Group remaining documents by pizza name and calculate total quantity
  { $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } },
  // Stage 4: Sort the documents by total quantity in descending order
  { $sort: { totalQuantity: -1 } },
  // Stage 5: Limit the output to only 3 documents
  { $limit: 3 },
  // Stage 6: Skip the first 2 documents
  { $skip: 2 },
  // Stage 7: Unwind the toppings array field
  { $unwind: "$toppings" }
])
```

</details>

<details>
<summary><h5>Common Aggregation Operators</h5></summary>

Aggregation operators are expressions that can be used in the aggregation pipeline stages to perform various operations on the data. MongoDB supports many aggregation operators for different purposes, such as arithmetic, array, comparison, date, logical, string, etc.

Here is a list of some common aggregation operators with examples for each:

## Arithmetic Operators

Arithmetic operators perform mathematical operations on numbers or dates. Some examples are:

- `$add`: Adds numbers or dates to return the sum or a new date. For example:

```javascript
{ $add: [ "$price", "$tax" ] } // returns the sum of price and tax fields
{ $add: [ new Date(), 3*24*60*60000 ] } // returns a date 3 days from now
```

- `$subtract`: Subtracts the second value from the first and returns the difference. The values can be numbers or dates. For example:

```javascript
{ $subtract: [ "$total", "$discount" ] } // returns the difference of total and discount fields
{ $subtract: [ new Date(), new Date("2020-01-01") ] } // returns the milliseconds between the two dates
```

- `$multiply`: Multiplies numbers and returns the product. For example:

```javascript
{ $multiply: [ "$quantity", "$unitPrice" ] } // returns the product of quantity and unitPrice fields
{ $multiply: [ 10, 2.5 ] } // returns 25
```

- `$divide`: Divides the first number by the second and returns the result. For example:

```javascript
{ $divide: [ "$distance", "$time" ] } // returns the quotient of distance and time fields
{ $divide: [ 15, 3 ] } // returns 5
```

## Array Operators

Array operators perform operations on arrays, such as accessing elements, concatenating arrays, filtering arrays, etc. Some examples are:

- `$arrayElemAt`: Returns the element at the specified array index. The index can be positive or negative. For example:

```javascript
{ $arrayElemAt: [ "$fruits", 0 ] } // returns the first element of the fruits array field
{ $arrayElemAt: [ "$fruits", -1 ] } // returns the last element of the fruits array field
```

- `$concatArrays`: Concatenates arrays to return a new array. For example:

```javascript
{ $concatArrays: [ "$fruits", "$vegetables" ] } // returns a new array with elements from fruits and vegetables array fields
{ $concatArrays: [ [ "a", "b" ], [ "c", "d" ] ] } // returns [ "a", "b", "c", "d" ]
```

- `$filter`: Selects a subset of an array to return an array with only the elements that match the filter condition. For example:

```javascript
{ $filter: {
   input: "$items",
   as: "item",
   cond: { $gte: [ "$$item.price", 100 ] }
} } // returns an array with only the elements from items array field that have a price greater than or equal to 100
```

- `$size`: Returns the number of elements in an array. For example:

```javascript
{ $size: "$fruits" } // returns the number of elements in the fruits array field
{ $size: [ "a", "b", "c" ] } // returns 3
```

## Comparison Operators

Comparison operators compare two values and return true or false depending on the comparison. The values must be of comparable types. Some examples are:

- `$eq`: Returns true if the values are equal. For example:

```javascript
{ $eq: [ "$a", 10 ] } // returns true if the value of field a is equal to 10
{ $eq: [ "$x", "$y" ] } // returns true if the value of field x is equal to the value of field y
```

- `$gt`: Returns true if the first value is greater than the second value. For example:

```javascript
{ $gt: [ "$a", 10 ] } // returns true if the value of field a is greater than 10
{ $gt: [ "$x", "$y" ] } // returns true if the value of field x is greater than the value of field y
```

- `$lt`: Returns true if the first value is less than the second value. For example:

```javascript
{ $lt: [ "$a", 10 ] } // returns true if the value of field a is less than 10
{ $lt: [ "$x", "$y" ] } // returns true if the value of field x is less than the value of field y
```

- `$ne`: Returns true if the values are not equal. For example:

```javascript
{ $ne: [ "$a", 10 ] } // returns true if the value of field a is not equal to 10
{ $ne: [ "$x", "$y" ] } // returns true if the value of field x is not equal to the value of field y
```

## Date Operators

Date operators perform operations on date values, such as extracting components, formatting, or manipulating dates. Some examples are:

- `$dateToString`: Returns a string representation of a date using a format specifier. For example:

```javascript
{ $dateToString: { format: "%Y-%m-%d", date: "$date" } } // returns a string with the format "yyyy-mm-dd" from the date field
{ $dateToString: { format: "%H:%M:%S:%L", date: new Date() } } // returns a string with the format "hh:mm:ss:ms" from the current date
```

- `$dayOfMonth`: Returns the day of the month for a date as a number between 1 and 31. For example:

```javascript
{ $dayOfMonth: "$date" } // returns the day of the month from the date field
{ $dayOfMonth: new Date("2020-01-15") } // returns 15
```

- `$month`: Returns the month for a date as a number between 1 and 12. For example:

```javascript
{ $month: "$date" } // returns the month from the date field
{ $month: new Date("2020-01-15") } // returns 1
```

- `$year`: Returns the year for a date as a four-digit number. For example:

```javascript
{ $year: "$date" } // returns the year from the date field
{ $year: new Date("2020-01-15") } // returns 2020
```

## Logical Operators

Logical operators perform boolean logic operations on one or more expressions and return true or false. Some examples are:

- `$and`: Returns true if all the expressions are true. For example:

```javascript
{ $and: [ { $gt: [ "$a", 10 ] }, { $lt: [ "$a", 20 ] } ] } // returns true if the value of field a is between 10 and 20
{ $and: [ true, false ] } // returns false
```

- `$or`: Returns true if any of the expressions is true. For example:

```javascript
{ $or: [ { $eq: [ "$a", 10 ] }, { $eq: [ "$b", 20 ] } ] } // returns true if the value of field a is 10 or the value of field b is 20
{ $or: [ false, false ] } // returns false
```

- `$not`: Returns the boolean opposite of the expression. For example:

```javascript
{ $not: { $eq: [ "$a", 10 ] } } // returns true if the value of field a is not equal to 10
{ $not: true } // returns false
```

## String Operators

String operators perform operations on string values, such as concatenating, splitting, trimming, etc. Some examples are:

- `$concat`: Concatenates strings and returns the concatenated string. For example:

```javascript
{ $concat: [ "$firstName", " ", "$lastName" ] } // returns a string with the first name and last name fields separated by a space
{ $concat: [ "Hello", ", ", "World" ] } // returns "Hello, World"
```

- `$split`: Splits a string into an array of substrings based on a delimiter. For example:

```javascript
{ $split: [ "$fullName", " " ] } // returns an array with two elements from splitting the fullName field by a space
{ $split: [ "a-b-c-d", "-" ] } // returns [ "a", "b", "c", "d" ]
```

- `$trim`: Removes whitespace or a specified character from the beginning and end of a string. For example:

```javascript
{ $trim: { input: "$name" } } // returns a string with no leading or trailing whitespace from the name field
{ $trim: { input: "-Hello-", chars: "-" } } // returns "Hello"
```

- `$toUpper`: Converts a string to uppercase and returns the result. For example:

```javascript
{ $toUpper: "$name" } // returns an uppercase string from the name field
{ $toUpper: "hello" } // returns "HELLO"
```

</details>
