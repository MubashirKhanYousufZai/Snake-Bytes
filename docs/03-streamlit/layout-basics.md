---
sidebar_position: 5
---

# Streamlit Layout Basics

Streamlit is a **Python framework** that allows you to build **interactive web apps** using only Python.  
No need for HTML, CSS, or JavaScript — Streamlit handles everything behind the scenes.

Streamlit is ideal for:

- Dashboards  
- Admin panels  
- Data apps  
- AI & ML tools  
- Internal tools  

In this chapter, we focus on **layout fundamentals**, essential for building clean, professional apps.

---

## What is a Layout?

A **layout** refers to how elements are arranged on the page.

Good layouts help users:

- Understand content quickly  
- Navigate easily  
- Interact efficiently  

Streamlit provides simple but powerful **layout primitives** to structure your app.

---

## Why Layout Matters

Even if your app works perfectly, a **poor layout** can:

- Confuse users  
- Look unprofessional  
- Reduce usability  

A clean layout:

- Improves user experience  
- Makes data easier to read  
- Gives your app a polished feel

---

## Streamlit’s Layout Philosophy

Streamlit follows a **top-to-bottom execution model**:

- Code executes from top to bottom  
- UI elements appear in the same order  
- Layout is determined directly by code structure  

This simplicity is one of Streamlit’s strengths.

---

## Basic Page Flow

By default, Streamlit apps are **single-page** and **vertical**:

```python
import streamlit as st

st.title("My App")
st.write("This appears below the title")
st.button("Click Me")
````

* `st.title()` → Main heading
* `st.write()` → Display text, data, or markdown
* `st.button()` → Interactive button

Elements appear **exactly in the order written**.

---

## Using the Sidebar

Streamlit provides a **sidebar** for navigation and controls:

```python
st.sidebar.title("Navigation")
page = st.sidebar.radio("Go to", ["Home", "Settings"])
st.write("You selected:", page)
```

* Sidebar keeps controls separate from main content
* Perfect for navigation menus, filters, and settings

---

## Columns (Side-by-Side Layout)

You can display elements **side-by-side** using columns:

```python
col1, col2 = st.columns(2)

with col1:
    st.button("Button 1")
    
with col2:
    st.button("Button 2")
```

* Columns can be of **equal or custom widths**:

```python
col1, col2 = st.columns([2, 1])  # 2:1 width ratio
```

Use columns for:

* Forms
* Metrics
* Charts side-by-side

---

## Containers (Grouping Elements)

Containers group elements together:

```python
with st.container():
    st.write("Inside a container")
    st.button("Click Me")
```

Benefits:

* Keep related UI elements together
* Conditional display
* Dynamic content updates

---

## Expanders (Collapsible Sections)

Expanders hide less important content:

```python
with st.expander("More info"):
    st.write("Detailed explanation goes here")
```

* Users can expand/collapse content
* Useful for FAQs, help sections, or optional details

---

## Tabs (Multiple Sections)

Streamlit supports **tabs** for multi-section content:

```python
tab1, tab2 = st.tabs(["Tab 1", "Tab 2"])

with tab1:
    st.write("Content in Tab 1")
    
with tab2:
    st.write("Content in Tab 2")
```

* Tabs reduce scroll and organize large apps

---

## Best Practices for Layouts

1. **Use sidebar for controls**

   * Filters, navigation, settings
2. **Group related elements in containers**
3. **Use columns for comparison and metrics**
4. **Use expanders for optional details**
5. **Keep top-to-bottom logical flow**
6. **Use whitespace to separate sections**

---

## Combining Layouts

Example combining sidebar, columns, and expanders:

```python
import streamlit as st

st.title("Dashboard")

# Sidebar filter
category = st.sidebar.selectbox("Category", ["A", "B", "C"])

# Metrics in columns
col1, col2, col3 = st.columns(3)
col1.metric("Sales", 1000)
col2.metric("Users", 150)
col3.metric("Orders", 75)

# Expandable info
with st.expander("More Details"):
    st.write(f"Category selected: {category}")
    st.line_chart([1, 2, 3, 4, 5])
```

This is how **real dashboards** are built in Streamlit.

---

## Key Takeaways

* Streamlit layout is **simple but powerful**
* Default flow is **top-to-bottom**
* Use **sidebar, columns, containers, expanders, and tabs** to improve UX
* Good layout = professional & user-friendly app

> Once you master layouts, you can focus on **functionality, interactivity, and aesthetics** without worrying about HTML/CSS.


