import "./App.css";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./ListEmployee";
import Effect from "./EmployeeMonth";
import Context from "./About";
import NewHook from "./Name";

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link className="text-link" to="/">
                Home
              </Link>
            </li>
            <li className="li">
              <Link className="text-link" to="/ref">
                {" "}
                Create Employee
              </Link>
            </li>
            <li className="li">
              <Link className="text-link" to="/context">
                {" "}
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Counter />} />
          <Route path="/effect" exact element={<Effect />} />
          <Route path="/ref" exact element={<NewHook />}></Route>
          <Route path="/context" exact element={<Context />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
