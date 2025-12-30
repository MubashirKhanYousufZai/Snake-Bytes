# Session State

One of the most important concepts to understand in Streamlit is **Session State**.  
This topic is considered *intermediate* because it deals with how Streamlit apps behave internally.

By default, Streamlit apps are **stateless**.  
This means every time a user interacts with the app, **the entire script runs again from top to bottom**.

To preserve values between these reruns, Streamlit provides a special feature called:

> **`st.session_state`**

---

## Why Session State Is Needed

Let’s understand the problem first.

In a normal Python script:
- Variables keep their values
- Code runs once from top to bottom

But in Streamlit:
- Clicking a button reruns the script
- Variables are reset every time
- Data is lost unless stored properly

This is where **session state** becomes essential.

---

## What Is `st.session_state`?

`st.session_state` is a **dictionary-like object** that stores values for a single user session.

It allows you to:
- Remember values across reruns
- Store user interactions
- Maintain app state
- Build interactive apps

Each user gets **their own session state**, which makes it safe and reliable.

---

## How Streamlit Reruns Work

Whenever a user:
- Clicks a button
- Changes a slider
- Selects a dropdown
- Types into an input field

👉 Streamlit **re-executes the entire script**

Without session state:
- Counters reset
- Inputs disappear
- App feels broken

---

## Basic Concept of Session State

Session state works like a persistent storage area for your app.

Think of it as:
- A memory box
- That survives reruns
- But resets when the browser session ends

---

## Example: A Simple Counter

Let’s look at the given example.

```python
import streamlit as st

if 'count' not in st.session_state:
    st.session_state.count = 0

increment = st.button('Increment')

if increment:
    st.session_state.count += 1

st.write('Count = ', st.session_state.count)
