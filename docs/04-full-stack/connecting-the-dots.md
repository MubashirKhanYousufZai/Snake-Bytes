---
sidebar_position: 7
---

# Connecting Streamlit to FastAPI

Welcome to the **climax of our Python Sprint book**!  
Here, we finally connect **FastAPI** (backend) and **Streamlit** (frontend) to build a full-stack Python app.

By the end of this chapter, you will know how to:

- Call FastAPI endpoints from Streamlit  
- Display API data interactively  
- Build a modular full-stack Python application

---

## Why Connect Streamlit and FastAPI?

**FastAPI** is ideal for backend:

- Handles HTTP requests  
- Performs calculations & business logic  
- Validates data with **type hints** and **Pydantic models**

**Streamlit** is ideal for frontend:

- Collects user input  
- Displays results in real-time  
- Creates interactive dashboards

Connecting them provides:

- **Separation of concerns** (frontend & backend)  
- Modular, scalable code  
- Professional project structure

---

## Required Libraries

Install the required libraries:

```bash
pip install fastapi uvicorn streamlit requests
````

* `fastapi` → backend framework
* `uvicorn` → ASGI server for FastAPI
* `streamlit` → frontend UI framework
* `requests` → call APIs from Streamlit

---

## Step 1: Create a Simple FastAPI Backend

Create a file called `backend.py`:

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Pydantic model
class Item(BaseModel):
    name: str
    price: float

# GET endpoint
@app.get("/hello")
def read_root():
    return {"message": "Hello from FastAPI!"}

# POST endpoint
@app.post("/item/")
def create_item(item: Item):
    total_price = item.price * 1.15  # add 15% tax
    return {"name": item.name, "price": item.price, "total_price": total_price}
```

### Explanation:

* `/hello` → simple GET request for testing
* `/item/` → POST request with **Pydantic validation**
* `total_price` demonstrates backend logic

---

## Step 2: Run the FastAPI Server

Run backend:

```bash
uvicorn backend:app --reload
```

* Open **[http://127.0.0.1:8000/hello](http://127.0.0.1:8000/hello)** to test GET endpoint
* Open **[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)** for Swagger UI

---

## Step 3: Create a Streamlit Frontend

Create `frontend.py`:

```python
import streamlit as st
import requests

st.title("FastAPI + Streamlit Example")

# Input fields
name = st.text_input("Item Name")
price = st.number_input("Item Price", min_value=0.0, step=0.01)

if st.button("Submit"):
    data = {"name": name, "price": price}
    response = requests.post("http://127.0.0.1:8000/item/", json=data)
    
    if response.status_code == 200:
        result = response.json()
        st.success(f"Total price (with tax): ${result['total_price']:.2f}")
    else:
        st.error("Failed to fetch data from API")
```

### Explanation:

* `requests.post()` → sends JSON data to FastAPI endpoint
* `response.json()` → retrieves validated data
* `st.success()` / `st.error()` → display feedback interactively

---

## Step 4: Run the Streamlit App

```bash
streamlit run frontend.py
```

* Enter `Item Name` and `Price`
* Click **Submit**
* Streamlit calls FastAPI backend and shows results dynamically

---

## Step 5: Add GET Endpoint Display

You can also fetch data from FastAPI GET endpoint:

```python
if st.button("Say Hello"):
    response = requests.get("http://127.0.0.1:8000/hello")
    st.info(response.json()["message"])
```

* Tests connectivity
* Real-time feedback to user

---

## Step 6: Handling Errors Gracefully

Use try-except to handle failed requests:

```python
try:
    response = requests.post("http://127.0.0.1:8000/item/", json=data)
    response.raise_for_status()
    st.success(f"Total price: ${response.json()['total_price']:.2f}")
except requests.exceptions.RequestException as e:
    st.error(f"API Error: {e}")
```

* Prevents app crashes
* Shows clear error messages

---

## Step 7: Organizing a Real Project

Folder structure suggestion:

```
python_sprint_project/
├─ backend/
│  ├─ backend.py
│  └─ models.py
├─ frontend/
│  └─ frontend.py
├─ venv/
├─ requirements.txt
```

* **Backend folder** → all FastAPI logic & Pydantic models
* **Frontend folder** → Streamlit UI
* Use `requests` to communicate
* Modular, maintainable, production-ready

---

## Step 8: Next Steps & Enhancements

* Add more endpoints: CRUD operations, filtering, authentication
* Add charts and tables in Streamlit using `st.line_chart()` or `st.dataframe()`
* Use **state management** in Streamlit for interactivity
* Deploy full-stack app using **Docker**, **Heroku**, or **Vercel**

---

## Key Takeaways

* FastAPI handles **backend logic & validation**
* Streamlit provides **frontend UI & interactivity**
* Requests library bridges the connection
* Proper separation = scalable, professional applications

---

