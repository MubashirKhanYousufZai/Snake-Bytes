
---
sidebar_position: 4
---

# Setting Up FastAPI

Before we start building APIs, we need to properly **set up our development environment**.  
A correct setup ensures that:

- FastAPI runs smoothly  
- Errors are minimized  
- Development is fast and enjoyable  

This chapter walks you through a **professional FastAPI setup**, so you can start coding confidently.

---

## What is FastAPI?

FastAPI is a **modern Python web framework** used to build APIs quickly and efficiently.

It is known for:

- High performance (comparable to Node.js & Go)  
- Automatic API documentation (Swagger & ReDoc)  
- Type safety (via Python type hints & Pydantic)  
- Easy to learn and use  

FastAPI is built on:

- **Starlette** → Handles web requests and routing  
- **Pydantic** → Handles data validation & parsing  

---

## Why Use FastAPI?

- Minimal code for high-performance APIs  
- Automatic validation and error handling  
- Auto-generated OpenAPI and docs for developers  
- Production-ready features out-of-the-box  

---

## Prerequisites

Before installing FastAPI, ensure you have:

- Python **3.9 or higher** (`python --version`)  
- `pip` installed (`pip --version`)  
- A code editor (VS Code recommended)  
- Basic command-line knowledge  

Check Python version:

```bash
python --version
````

Check pip version:

```bash
pip --version
```

---

## Step 1: Create a Project Folder

Choose a location and create a folder:

```bash
mkdir fastapi_project
cd fastapi_project
```

This folder will contain **all your FastAPI code**.

---

## Step 2: Set Up a Virtual Environment

A virtual environment keeps your project dependencies **isolated**.

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment:

* **Windows (PowerShell / CMD):**

```bash
# PowerShell
.\venv\Scripts\Activate.ps1

# CMD
.\venv\Scripts\activate.bat
```

* **Mac / Linux:**

```bash
source venv/bin/activate
```

Once activated, your terminal prompt will show `(venv)`.

---

## Step 3: Install FastAPI and Uvicorn

Install FastAPI:

```bash
pip install fastapi
```

Install Uvicorn (ASGI server):

```bash
pip install "uvicorn[standard]"
```

Check installation:

```bash
pip list
```

You should see **fastapi** and **uvicorn** listed.

---

## Step 4: Create Your First FastAPI File

Create a file called `main.py` in your project folder:

```python
# main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}
```

### Explanation:

* `FastAPI()` → creates the application instance
* `@app.get("/")` → decorator for **GET request** at `/` path
* `read_root()` → function executed when `/` is accessed
* Returns a **JSON response** automatically

---

## Step 5: Run the FastAPI Server

Use Uvicorn to run the app:

```bash
uvicorn main:app --reload
```

* `main` → file name (`main.py`)
* `app` → FastAPI instance
* `--reload` → auto-reloads server on code changes (great for development)

Visit **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)** in your browser.
You should see:

```json
{"message": "Hello, FastAPI!"}
```

---

## Step 6: Interactive Documentation

FastAPI automatically generates interactive docs:

* **Swagger UI:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
* **ReDoc UI:** [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

Try making GET requests directly from the docs interface.

---

## Step 7: Project Structure Suggestion

A simple project structure:

```
fastapi_project/
├─ main.py
├─ venv/
├─ requirements.txt
└─ app/
   ├─ routers/
   ├─ models/
   └─ utils/
```

* `routers/` → API endpoints
* `models/` → Pydantic models
* `utils/` → helper functions
* `requirements.txt` → store dependencies (`pip freeze > requirements.txt`)

---

## Step 8: Saving Dependencies

After installing packages:

```bash
pip freeze > requirements.txt
```

Later, to install dependencies on another machine:

```bash
pip install -r requirements.txt
```

---

## Step 9: Tips for Smooth Development

1. Use **VS Code extensions**: Python, Pylance, and FastAPI snippets
2. Always **activate your virtual environment**
3. Use `--reload` in development, **no reload** in production
4. Keep **project structure clean**
5. Document your endpoints using **docstrings**

---

## Final Notes

Once the setup is complete, you are ready to:

* Build **GET, POST, PUT, DELETE** endpoints
* Use **Pydantic models** for validation
* Implement **CRUD operations**
* Integrate databases, authentication, and more

> A proper setup saves time, reduces bugs, and makes development enjoyable.

---

