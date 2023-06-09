// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import the index.css file
import "./index.css";

// Import the App component
import App from "./App";

// Create a new React root with the HTML element that has an ID of "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in React.StrictMode to catch potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
