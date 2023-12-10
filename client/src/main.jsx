import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './mobile.css';
import { AppProvider } from './context/Context.jsx';
import { ShoeProvider } from './context/ShoeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ShoeProvider>
        <App />
      </ShoeProvider>
    </AppProvider>
  </React.StrictMode>
);
