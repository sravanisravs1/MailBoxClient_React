import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';//for bootstrap modules
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  //for routing we use browser router here
  <BrowserRouter> 
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
  
);


