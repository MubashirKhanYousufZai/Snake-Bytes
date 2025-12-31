---
sidebar_position: 6
---

# Session State in Streamlit

One of the most important concepts in Streamlit is **Session State**.  
This is an *intermediate* concept because it deals with how Streamlit apps **preserve user data** across reruns.

By default, Streamlit apps are **stateless**.  
This means every interaction causes the **entire script to rerun from top to bottom**.  

To preserve values between reruns, Streamlit provides:

> **`st.session_state`**

---

## Why Session State Is Important

### The Problem

In a normal Python script:

- Variables keep their values  
- Code runs once  

In Streamlit:

- Clicking a button reruns the script  
- Variables reset on every run  
- Inputs and counters are lost  

Without session state, apps feel **broken or unresponsive**.

---

## What is `st.session_state`?

`st.session_state` is a **dictionary-like object** that stores values **for a single user session**.

It allows you to:

- Remember values across reruns  
- Store user inputs  
- Maintain app state  
- Build interactive, dynamic apps  

> Each user gets their **own session state**, making it safe for multi-user apps.

---

## How Streamlit Reruns Work

Whenever a user interacts:

- Clicks a button  
- Changes a slider  
- Selects a dropdown  
- Types in an input  

Streamlit **re-executes the entire script**.  

Without session state:

- Counters reset  
- Inputs disappear  
- App feels broken

---

## Basic Example: Counter

```python
import streamlit as st

# Initialize state
if 'count' not in st.session_state:
    st.session_state.count = 0

# Button to increment
increment = st.button('Increment')

if increment:
    st.session_state.count += 1

st.write('Count =', st.session_state.count)
````

**Explanation:**

* `st.session_state.count` stores the counter
* Every rerun preserves the value
* Clicking the button updates it without losing previous count

---

## Using Session State with Inputs

```python
import streamlit as st

if 'name' not in st.session_state:
    st.session_state.name = ""

st.session_state.name = st.text_input("Enter your name:", st.session_state.name)
st.write("Hello,", st.session_state.name)
```

* Input is **persisted** even when other parts rerun
* Ideal for forms and multi-step workflows

---

## Using Session State with Sliders

```python
if 'volume' not in st.session_state:
    st.session_state.volume = 50

st.session_state.volume = st.slider("Volume", 0, 100, st.session_state.volume)
st.write("Volume =", st.session_state.volume)
```

* Slider value persists across reruns
* Works for interactive dashboards

---

## Using Session State with Buttons and Actions

```python
def increment_counter():
    st.session_state.count += 1

if 'count' not in st.session_state:
    st.session_state.count = 0

st.button("Increment", on_click=increment_counter)
st.write("Count =", st.session_state.count)
```

* `on_click` lets you **link a function to a button**
* Keeps logic organized

---

## Advanced: Reset Button Example

```python
def reset_counter():
    st.session_state.count = 0

st.button("Reset", on_click=reset_counter)
```

* Allows users to **reset state** without page refresh
* Important for forms and interactive apps

---

## Session State Best Practices

1. Always **initialize state** before using it
2. Use **dictionary keys** for multiple variables:

   ```python
   st.session_state['username'] = ""
   st.session_state['age'] = 18
   ```
3. Use **functions with `on_click`** for cleaner logic
4. Avoid global variables for persistent data
5. Use state for **multi-step forms, dashboards, or counters**

---

## Summary

* Streamlit is **stateless by default**
* `st.session_state` allows **persistence across reruns**
* Enables building **interactive, user-friendly apps**
* Essential for real-world dashboards, forms, and data apps

> Mastering session state transforms your Streamlit apps from simple scripts into **full-fledged interactive applications**.

---


