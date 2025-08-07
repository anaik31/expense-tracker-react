// Import React core library (needed for JSX)
import React from 'react';

// Import ReactDOM for rendering React components into the DOM
import ReactDOM from 'react-dom/client';

// Import global CSS styles
import './index.css';

// Import the root App component
import App from './App';

// Create a root to render the React app into the HTML element with id="root"
// This is part of React 18+ using the new root API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside a React.StrictMode wrapper
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
