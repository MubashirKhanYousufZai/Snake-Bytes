# Setting Up FastAPI

Before we start building APIs, we need to properly **set up our development environment**.  
A correct setup ensures that:
- FastAPI runs smoothly
- Errors are minimized
- Development feels simple and fast

In this chapter, we will prepare everything needed to start working with **FastAPI professionally**.

---

## What is FastAPI?

FastAPI is a **modern Python web framework** used to build APIs quickly and efficiently.

It is known for:
- High performance
- Automatic documentation
- Type safety
- Easy learning curve

FastAPI is built on:
- **Starlette** (for web handling)
- **Pydantic** (for data validation)

---

## What Do We Need to Run FastAPI?

To run a FastAPI application, we need two main things:

1. **FastAPI** – the framework itself  
2. **Uvicorn** – an ASGI server to run the app

FastAPI handles logic, while Uvicorn handles requests.

---

## Prerequisites

Before installing FastAPI, make sure you have:

- Python **3.9 or higher**
- `pip` installed
- A code editor (VS Code recommended)
- Basic command-line knowledge

Check your Python version:

```bash
python --version
