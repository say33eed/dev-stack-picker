# 🧱 Dev Stack Builder

Dev Stack Builder is a responsive React application where users can explore popular development technologies and build their own technology stack.

Users can view useful information about each technology, add technologies to their stack, remove selected technologies, and clear the entire stack.

## 🚀 Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## ✨ Features

### 1. Explore Development Technologies

Users can explore different technologies from categories such as Frontend, Backend, Database, Language, Styling, and DevOps.

Each technology card displays its icon, name, description, category, difficulty level, rating, and badge.

### 2. Build Your Own Stack

Users can add technologies to the Your Stack section.

A technology cannot be added more than once. Selected technologies can be removed individually, or users can clear the complete stack using the Remove All button.

### 3. Responsive and Interactive Design

The website is responsive across mobile, tablet, and desktop devices.

React-Toastify provides notifications when technologies are added, removed, or when a duplicate add is attempted.

---

## 📚 React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to create and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store data inside a component that can change while the application is running.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook allows a React component to store and update data.

I used `useState` in the Technologies section to store the technologies selected by the user.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is commonly used to run code after a component renders, such as fetching data from an API or JSON file.

In this project, I did not use `useEffect` to load the JSON data. I used the Fetch API with `async/await` in `main.tsx` and loaded the technology data before rendering the main application.

### 5. Why does every item in a .map() list need a unique key prop?

A unique `key` helps React identify each item in a list.

This helps React update the correct item efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used conditional rendering in the Your Stack section. When no technology is selected, the application displays:

`Your stack is empty.`

When technologies are selected, it displays the selected technology items instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent component to a child component using props.

A child component can send information back by calling a function that was passed to it from the parent as a prop.

For example, in this project, `TechnologiesSection` passes the `onAdd` function to `TechnologyCard`. When the Add to Stack button is clicked, `TechnologyCard` calls that function and sends the selected technology back to the parent.