import React from 'react';
import ReactDOM from 'react-dom/client';

// Global styles
import './scss/index.scss';

// Content imports
import Home from './pages/home';

// Begin code
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
