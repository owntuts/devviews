<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>Indexes</h5></summary>

Indexes in MongoDB are special data structures that store a small portion of the collection's data set in an easy to traverse form. Indexes support the efficient execution of queries in MongoDB by allowing the database to limit the number of documents it must inspect. Indexes also enable MongoDB to return sorted results by using the ordering in the index.

Some of the common features and types of indexes in MongoDB are:

## Default _id Index

MongoDB creates a unique index on the `_id` field during the creation of a collection. The `_id` index prevents clients from inserting two documents with the same value for the `_id` field. You cannot drop this index on the `_id` field.

## Single Field Index

A single field index is an index that is created on a single field of a document. The index entries are sorted by the value of the field in ascending or descending order. For example, you can create a single field index on the `name` field of a collection.

```javascript
// Create a single field ascending index on the name field
db.collection.createIndex( { name: 1 } )
```

## Compound Index

A compound index is an index that is created on multiple fields of a document. The index entries are sorted by the values of the fields in the specified order. For example, you can create a compound index on the `name` and `age` fields of a collection.

```javascript
// Create a compound index on the name and age fields
db.collection.createIndex( { name: 1, age: -1 } )
```

## Multikey Index

A multikey index is an index that is created on an array field or a field that contains subdocuments. The index can contain multiple entries for each document, one for each element of the array or subdocument. For example, you can create a multikey index on the `tags` array field of a collection.

```javascript
// Create a multikey index on the tags array field
db.collection.createIndex( { tags: 1 } )
```

## Text Index

A text index is an index that is created on string fields or arrays of string elements. The index supports text search queries that can match words or phrases in the indexed fields. For example, you can create a text index on the `title` and `description` fields of a collection.

```javascript
// Create a text index on the title and description fields
db.collection.createIndex( { title: "text", description: "text" } )
```

## Geospatial Index

A geospatial index is an index that is created on fields that store geospatial data, such as coordinates, polygons, or GeoJSON objects. The index supports geospatial queries that can find documents near a point, within a region, or intersecting with a geometry. For example, you can create a geospatial index on the `location` field of a collection.

```javascript
// Create a geospatial index on the location field
db.collection.createIndex( { location: "2dsphere" } )
```

These are just some examples of indexes in MongoDB. There are many more types and options for indexes, such as hashed, sparse, partial, TTL, etc.


</details>
