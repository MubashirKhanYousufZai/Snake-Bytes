# Pydantic Models

In FastAPI, **Pydantic models** are used to define the **structure**, **type**, and **validation rules** of data that comes into your API or goes out of it.

Pydantic plays a **core role** in FastAPI because it ensures that:
- The data received from users is **valid**
- The data types are **correct**
- Errors are **automatically handled**
- APIs are **self-documented**

FastAPI + Pydantic together create **safe, clean, and reliable APIs**.

---

## What is Pydantic?

Pydantic is a Python library used for:
- Data validation
- Data parsing
- Data serialization

It uses **Python type hints** to validate data at runtime.

This means:
- You write clean Python classes
- Pydantic automatically checks data correctness
- You don’t need to write manual validation logic

---

## Why FastAPI Uses Pydantic

FastAPI is built on top of three main pillars:
1. **Starlette** → for web handling
2. **Pydantic** → for data validation
3. **Type hints** → for developer experience

Pydantic allows FastAPI to:
- Validate request bodies
- Validate query parameters
- Validate headers
- Generate OpenAPI docs automatically

---

## What is a Pydantic Model?

A **Pydantic model** is a Python class that:
- Inherits from `BaseModel`
- Uses type annotations
- Automatically validates data

Example:

```python
from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    is_active: bool = True
