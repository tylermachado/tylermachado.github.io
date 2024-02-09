import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './scss/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
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
