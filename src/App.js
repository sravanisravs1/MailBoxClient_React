import { Fragment } from "react";
import "./App.css";
import Login from "./components/UI/Login";

import { Routes, Route } from "react-router-dom";

import InboxEmail from "./components/pages/Inbox";

import SentEmail from "./components/Mail/SentEmail";
import MainNavigation from "./components/Layout/MainNavigation";
import ComposeEmail from "./components/pages/ComposeMail";
import MailPage from "./components/Mail/MailPage";
import Home from "./components/pages/Home";

function App() {
  return (
    <Fragment>

      <MainNavigation/>
      
      <Routes>
      <Route path="/" element={<Login/>}>
        
      </Route>
      <Route path="/home"element={<Home/>}>
       
      </Route>
      <Route path='/inbox' element={<InboxEmail/>}/>
      <Route path="/sent" element={<SentEmail />} />
      
      <Route path="/compose"
        element={<ComposeEmail/>} >
      </Route>
      <Route path='inbox/:id' element={<MailPage/>}/>

      <Route path="/sent/:id" element={<MailPage />} />
      </Routes>
      
    
    </Fragment>
  );
}

export default App;