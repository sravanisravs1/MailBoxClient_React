import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';//for bootstrap modules
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  //for routing we use browser router here
  <BrowserRouter> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  
);


