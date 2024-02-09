import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// Global styles
import './scss/index.css';

// Content imports
import About from './pages/about';

// Begin code
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/test",
    element: (
      <h1>Test</h1>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
