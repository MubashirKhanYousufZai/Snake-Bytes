# Connecting Streamlit to FastAPI

Welcome to the **climax of our Python Sprint book**!  
This is where we finally **connect the two frameworks**: FastAPI (backend) and Streamlit (frontend).

By the end of this chapter, you will know how to:
- Call FastAPI endpoints from Streamlit
- Display API data interactively
- Build a full-stack Python application

---

## Why Connect Streamlit and FastAPI?

- **FastAPI** is great for backend logic:
  - Handles requests
  - Performs calculations
  - Validates data with type hints and Pydantic
- **Streamlit** is perfect for UI:
  - Collects user input
  - Displays results instantly
  - Creates interactive dashboards

Connecting them allows you to:
- Separate frontend & backend
- Keep code modular
- Scale projects professionally

---

## Required Libraries

Before we start, make sure you have:

1. **Streamlit**
```bash
pip install streamlit
