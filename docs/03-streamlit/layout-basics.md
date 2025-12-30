
# Streamlit Layout Basics

Streamlit is a powerful Python framework that allows you to build **interactive web UIs** using only Python.  
There is **no need for HTML, CSS, or JavaScript** — Streamlit handles everything behind the scenes.

This makes Streamlit an excellent choice for:
- Dashboards
- Admin panels
- Data apps
- AI tools
- Internal web tools

In this section, we will focus on **layout fundamentals**, which are essential for creating clean, organized, and user-friendly applications.

---

## What is a Layout in Streamlit?

A layout refers to **how elements are arranged on the screen**.

Good layouts help users:
- Understand the app easily
- Navigate smoothly
- Interact efficiently

Streamlit provides **simple but powerful layout primitives** that allow you to structure your app without complexity.

---

## Why Layout Matters

Even if your app works perfectly, a poor layout can:
- Confuse users
- Look unprofessional
- Reduce usability

A clean layout:
- Improves user experience
- Makes data easier to read
- Makes your app feel polished

---

## Streamlit’s Layout Philosophy

Streamlit follows a **top-to-bottom execution model**.

This means:
- Code runs from top to bottom
- UI elements appear in the same order
- Layout is controlled directly by code structure

This simplicity is one of Streamlit’s biggest strengths.

---

## Basic Page Flow

By default, Streamlit apps are:
- Single-page
- Vertical (top to bottom)

Example:

```python
st.title("My App")
st.write("This appears below the title")
st.button("Click Me")
