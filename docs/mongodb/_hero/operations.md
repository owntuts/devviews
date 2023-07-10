<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>CRUD operations</h5></summary>

CRUD stands for **Create, Read, Update, and Delete**, which are the basic operations to interact with databases. In MongoDB, CRUD operations are performed on documents, which are flexible and dynamic JSON-like structures that store data in collections.

Some of the common methods and commands for CRUD operations in MongoDB are:

- **Create**: To insert new documents into a collection, you can use `db.collection.insertOne()`, `db.collection.insertMany()`, or `insert` command. For example, `db.users.insertOne({name: "Alice", age: 25})` will create a new document in the `users` collection with the specified fields and values.
- **Read**: To query documents from a collection, you can use `db.collection.find()`, `db.collection.findOne()`, or `find` command. You can specify query filters or criteria that identify the documents to return. For example, `db.users.find({age: {$gt: 20}})` will return all documents in the `users` collection where the `age` field is greater than 20.
- **Update**: To modify existing documents in a collection, you can use `db.collection.updateOne()`, `db.collection.updateMany()`, `db.collection.replaceOne()`, or `update` command. You can specify criteria or filters that identify the documents to update, and update operators that define the changes to apply. For example, `db.users.updateMany({name: "Alice"}, {$set: {age: 26}})` will update all documents in the `users` collection where the `name` field is `"Alice"` and set the `age` field to 26.
- **Delete**: To remove documents from a collection, you can use `db.collection.deleteOne()`, `db.collection.deleteMany()`, or `delete` command. You can specify criteria or filters that identify the documents to delete. For example, `db.users.deleteOne({name: "Bob"})` will delete one document in the `users` collection where the `name` field is `"Bob"`.

```js
// Create a new document
db.products.insert({
  "name": "Product 1",
  "price": 100
});

// Read all documents in the products collection
db.products.find();

// Update the price of Product 1 to 200
db.products.updateOne({
  "name": "Product 1"
}, {
  $set: {
    "price": 200
  }
});

// Delete Product 1
db.products.deleteOne({
  "name": "Product 1"
});

```

</details>

<details>
<summary><h5>operators that work with array datatypes</h5></summary>

There are different types of operators that work with array datatypes in MongoDB, depending on what you want to do with the arrays. Here are some examples:

- If you want to **match** documents where an array field contains all or some of the specified values, you can use the **$all** or **$in** operators²⁴. For example, `{"tags": {"$all": ["fruit", "tropical"]}}` will match documents where the `tags` array contains both `"fruit"` and `"tropical"`.
- If you want to **query** for documents where an array field meets some conditions, you can use the **$elemMatch** operator²³. For example, `{"scores": {"$elemMatch": {"$gt": 80, "$lt": 95}}}` will match documents where the `scores` array contains at least one element that is greater than 80 and less than 95.
- If you want to **update** documents by adding or removing elements from an array field, you can use the **$push**, **$pull**, or **$pop** operators¹². For example, `{"$push": {"tags": "organic"}}` will add `"organic"` to the end of the `tags` array.
- If you want to **aggregate** documents by grouping or counting elements from an array field, you can use the **$unwind**, **$group**, or **$count** operators¹. For example, `{"$unwind": "$tags"}` will create a new document for each element in the `tags` array.

</details>

<details>
<summary><h5>Operators that work with relationship</h5></summary>

There are different types of operators that work with relationships in MongoDB, depending on how you model them. Here is a list of some common operators with examples for each:

- If you use embedding, you can use **array operators** to perform operations on embedded arrays, such as accessing elements, concatenating arrays, filtering arrays, etc. For example:

```javascript
// Access the first element of the comments array field
{ $arrayElemAt: [ "$comments", 0 ] }

// Concatenate the tags and categories array fields
{ $concatArrays: [ "$tags", "$categories" ] }

// Filter the items array field by price
{ $filter: {
   input: "$items",
   as: "item",
   cond: { $gte: [ "$$item.price", 100 ] }
} }

// Count the number of elements in the comments array field
{ $size: "$comments" }
```

- If you use referencing, you can use **aggregation operators** to perform operations on referenced documents, such as joining collections, unwinding arrays, grouping documents, etc. For example:

```javascript
// Join the posts collection with the authors collection by _id
{ $lookup: {
   from: "authors",
   localField: "author_id",
   foreignField: "_id",
   as: "author"
} }

// Deconstruct the comments array field
{ $unwind: "$comments" }

// Group documents by author name and count the number of posts
{ $group: { _id: "$author.name", postCount: { $sum: 1 } } }
```

These are just some examples of operators that work with relationships in MongoDB. There are many more operators that can perform different operations, such as `$all`, `$elemMatch`, `$push`, `$pull`, etc¹².

</details>
