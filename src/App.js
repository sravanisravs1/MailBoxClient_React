import { Fragment } from "react";
import "./App.css";
import Login from "./components/UI/Login";

import { Routes, Route } from "react-router-dom";
import Mailfirst from "./components/pages/ComposeMail";
import Inbox from "./components/pages/Inbox";
import MailDetails from "./components/Mail/MailDetails";

function App() {
  return (
    <Fragment>

      <main>
      
      <Routes>
      <Route path="/" element={<Login/>}>
        
      </Route>
      <Route path="/auth"element={<Login />}>
       
      </Route>
      <Route path='/inbox' element={<Inbox/>}>
        </Route>
      
      <Route path="/mail"
        element={<Mailfirst />} >
      </Route>
      <Route path='/inbox/details' element={<MailDetails/>}>

      </Route>
      </Routes>
      
    </main>
    </Fragment>
  );
}

export default App;