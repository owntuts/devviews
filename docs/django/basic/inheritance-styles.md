---
sidebar_position: 1000
sidebar_label: Inheritance Styles
title: Inheritance Styles
slug: /inheritance-styles
tags:
  - Basic Django Interviews
---

:::quest Question:

\***`ಠ_ಠ`**\* : 
Describe the inheritance styles in Django?

:::

<details>
  <summary><h5>ANSWER:</h5></summary>

  \***`◔̯◔`**\* :

1. **Abstract base classes:** Abstract base classes can define common fields and methods to be used by other model classes, allowing code reuse and reducing redundant code.

```py
from django.db import models
 
class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
 
    class Meta:
        abstract = True # marked as abstract
 
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
 
class Employee(Person):
    department = models.CharField(max_length=50)

```
Since `Person` is an abstract base class, it cannot be instantiated or stored in the database. However, `Employee` can be instantiated and stored in the database.

2. **Multi-table inheritance**: Multi-table inheritance is used to create a model hierarchy where each model represents a more specific type of object.

```py
from django.db import models
 
class Place(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=80)
 
class Restaurant(Place):
    serves_hot_dogs = models.BooleanField(default=False)
    serves_pizza = models.BooleanField(default=False)

```

When `Restaurant` is created, Django automatically generates a new database table for `Restaurant` that includes all the fields of `Place` (parent of `Restaurant`), as well as the two additional fields defined by `Restaurant`.



3. **Proxy models**: Proxy models allow developers to create new models that function similarly to the original model, but with minor modifications, such as adding new methods or changing the default ordering.

```py
from django.db import models
 
class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
 
class Employee(Person):
    department = models.CharField(max_length=50)
 
    class Meta:
        proxy = True # marked as a proxy model
 
    def get_department(self):
        return self.department
 
class Manager(Employee):
    class Meta:
        proxy = True # marked as a proxy model
 
    def get_title(self):
        return "Manager"

```
 `Employee` is a model that inherits from `Person`, and `Manager` is a proxy model that inherits from `Employee`. `Employee` defines a `department` field and is ***marked as a proxy model***. `Manager` is also marked as a proxy model, so ***it does not create a new database table***. However, it inherits all the fields and methods from `Employee`, as well as the `get_title()` method defined in `Manager`.


</details>