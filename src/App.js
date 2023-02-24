import { Fragment } from "react";
import "./App.css";
import Login from "./components/UI/Login";

import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Fragment>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;