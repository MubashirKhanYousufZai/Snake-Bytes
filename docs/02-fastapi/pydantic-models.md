---
sidebar_position: 3
---

# Pydantic Models in FastAPI

In FastAPI, **Pydantic models** define the **structure**, **types**, and **validation rules** for the data
that flows into and out of your API endpoints.

Together, FastAPI + Pydantic create **safe, reliable, and self-documenting APIs**.

---

## Why Pydantic Matters

Pydantic ensures that:

- Incoming data is **valid**
- Data types are **correct**
- Errors are **automatically handled**
- APIs are **self-documented**

Without Pydantic, you would need **manual validation logic** for every request.

---

## What is Pydantic?

Pydantic is a Python library for:

- Data validation
- Data parsing
- Data serialization

It leverages **Python type hints** to validate data **at runtime**.

### Key Benefits

1. Write clean, readable Python classes
2. Automatic validation
3. Optional default values
4. Nested and complex data structures supported
5. Works seamlessly with FastAPI for request/response handling

---

## How FastAPI Uses Pydantic

FastAPI is built on three main pillars:

1. **Starlette** → Web framework & routing  
2. **Pydantic** → Data validation & parsing  
3. **Python Type Hints** → Developer experience & auto docs  

Pydantic allows FastAPI to:

- Validate **request bodies**
- Validate **query parameters**
- Validate **headers**
- Generate **OpenAPI documentation automatically**

---

## Creating Your First Pydantic Model

A Pydantic model is a **Python class** that:

- Inherits from `BaseModel`
- Uses type annotations for each field
- Can have **default values** and **validators**

Example:

```python
from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    is_active: bool = True
````

### Explanation:

* `id: int` → must be an integer
* `username: str` → must be a string
* `is_active: bool = True` → optional, defaults to True

---

## Using Models in FastAPI Endpoints

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    username: str
    is_active: bool = True

@app.post("/users/")
async def create_user(user: User):
    return {"message": f"User {user.username} created!", "data": user}
```

* FastAPI automatically **parses and validates** the JSON body
* If data is invalid, it returns a **422 error**
* Successful requests return the validated data

---

## Optional Fields

Sometimes, a field may not always be provided.
Use `Optional` from `typing`.

```python
from typing import Optional
from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    bio: Optional[str] = None
```

* `bio` is optional
* Defaults to `None` if not provided

---

## Lists in Pydantic Models

You can use **lists** to represent multiple items.

```python
from typing import List
from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    roles: List[str] = []
```

* `roles` must be a list of strings
* Empty list is the default

---

## Nested Models

Models can be **nested** to represent complex structures.

```python
from pydantic import BaseModel
from typing import List

class Address(BaseModel):
    city: str
    country: str

class User(BaseModel):
    id: int
    username: str
    addresses: List[Address] = []
```

* `addresses` is a list of `Address` objects
* Allows deep validation automatically

---

## Validators

Pydantic allows **custom validation logic** using `@validator`.

```python
from pydantic import BaseModel, validator

class User(BaseModel):
    username: str

    @validator("username")
    def username_must_be_alphanumeric(cls, v):
        if not v.isalnum():
            raise ValueError("Username must be alphanumeric")
        return v
```

* Checks every `username` before model creation
* Raises error if invalid

---

## Default Values & Factories

* Default values provide **fallbacks**
* Default factories generate **dynamic defaults**

```python
from pydantic import BaseModel
from datetime import datetime

class User(BaseModel):
    created_at: datetime = datetime.utcnow()
```

* `created_at` will be automatically set to current UTC time

---

## Error Handling

Pydantic automatically handles errors and provides **descriptive messages**.

Example invalid request:

```json
{
  "id": "abc",
  "username": "user123"
}
```

Response:

```json
{
  "detail": [
    {
      "loc": ["body", "id"],
      "msg": "value is not a valid integer",
      "type": "type_error.integer"
    }
  ]
}
```

---

## Why Pydantic + FastAPI is Powerful

* No manual validation required
* Automatic OpenAPI schema generation
* Supports **nested models, optional fields, defaults**
* Ensures **data integrity**

> FastAPI + Pydantic = **Robust APIs** with minimal effort

---

## Final Notes

Pydantic is the **heart of FastAPI**.
Understanding models thoroughly will allow you to:

* Create **validated request bodies**
* Control **response structure**
* Write **reliable and safe APIs**
* Avoid **common bugs and crashes**

