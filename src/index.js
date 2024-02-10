import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// Global styles
import './scss/index.scss';

// Content imports
import About from './pages/about';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';

// Begin code
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
