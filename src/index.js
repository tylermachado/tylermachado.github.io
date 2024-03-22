import React from 'react';
import ReactDOM from 'react-dom/client';

// Global styles
import './scss/index.scss';

// Content imports
import Home from './pages/home';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';

// Begin code
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
