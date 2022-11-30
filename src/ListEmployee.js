import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './ListEmployee.css';
import { ThemeContext } from './About';

export default function Counter() {
  const [text, setText] = React.useState('');
  const [showImage] = useState(true);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="Main" style={{ background: theme.background, color: theme.foreground }}>
      <p className="Text">Input Type with useState</p>
      <p>KELOMPOK 21</p>
      <div className="ViewImage">
        <div className="ViewImage1">
          <img className="App-logo" style={{ display: showImage === true ? 'flex' : 'none' }} src={logo} alt="logo" />
        </div>
      </div>
      <input type="text" placeholder="" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}
