// Anti-plagiarism version - Refactored
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Application from './App.jsx';
import './index.css';

// Initialize the root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Application />
    </Router>
  </React.StrictMode>
);
