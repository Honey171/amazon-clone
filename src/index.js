import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { AuthProvider } from './hooks/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <RecoilRoot>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RecoilRoot>
    </AuthProvider>
  </BrowserRouter>,
);
