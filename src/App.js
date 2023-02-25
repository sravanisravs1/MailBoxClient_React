import { Fragment } from "react";
import "./App.css";
import Login from "./components/UI/Login";

import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Mailfirst from "./components/pages/ComposeMail";
import Header from "./components/pages/Header";

function App() {
  return (
    <Fragment>

      <main>
      <h1>MailBox</h1>
      <Routes>
      <Route path="/" element={<Login/>}>
        
      </Route>
      <Route path="/auth"element={<Login />}>
       
      </Route>
      
      <Route path="/mail"
        element={<Mailfirst />} >
      </Route>
      </Routes>
      
    </main>
    </Fragment>
  );
}

export default App;