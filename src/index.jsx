import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Ensure this is correctly imported

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <BrowserRouter basename="/wealth-within-app">
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);