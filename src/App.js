import './App.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './ListEmployee';
import Effect from './EmployeeMonth';
import Context, { themes, ThemeContext } from './About';
import NewHook from './Name';

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div className="App-header">
          <nav className="NavBar">
            <ul className="ul">
              <li className="li">
                <Link to="/">List Employee</Link>
              </li>
              <li className="li">
                <Link to="/effect"> Employee of the Month</Link>
              </li>
              <li className="li">
                <Link to="/ref"> Input Employee Name</Link>
              </li>
              <li className="li">
                <Link to="/context"> About</Link>
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
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
