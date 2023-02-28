import React from "react";
import AuthPage from "./components/Pages/AuthPage";
import { Route } from "react-router-dom";
import ManagedMails from "./components/Mail/ManagedMails";
import Inbox from "./components/Mail/Inbox";
import Mailfirst from "./components/Mail/ComposeMail";
import ShowsentMail from "./components/Mail/SentMails";



function App() {
  return (
    <main>
    <Route path="/" exact>
      <AuthPage />
    </Route>
    <Route path="/auth" exact>
      <AuthPage />
    </Route>
    <Route path="/mail">
      <ManagedMails />
    </Route>
    <Route path='/inbox'>
      <Inbox/>
    </Route>
    <Route path='/sent'>
      <ShowsentMail/>
      </Route>
      <Route path='/compose'>
        <Mailfirst/>
      </Route>
  </main>
  );
}

export default App;
