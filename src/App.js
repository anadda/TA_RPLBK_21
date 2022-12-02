import "./App.css";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./ListEmployee";
import Effect from "./EmployeeMonth";
import Context from "./About";
import NewHook from "./Name";
import NavBarItem from './components/NavBarItem';

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <NavBarItem text="Home" url="/" />
          <NavBarItem text="Create Employee" url="/ref" />
          <NavBarItem text="About" url="/context" />
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
