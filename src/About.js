import React, { useState, useContext } from 'react';
import './About.css';

export const themes = {
  light: {
    id: 1,
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    id: 2,
    foreground: '#ffffff',
    background: '#222222',
  },
};
export const ThemeContext = React.createContext(themes.light);
export default function Index() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Main" style={{ background: theme.background, color: theme.foreground }}>
      <p>KELOMPOK21</p>
      <p>Anadda Ferrell Ramadhan - 21120119130035</p>
      <p>M. Farhan Athaullah - 21120119130072</p>
      <p>Muhammad Alifa Ramdhan - 21120119130092</p>
      <p>Rama Pradana Putra - 21120119140125</p>
      <ThemedButton />
    </div>
  );
}
function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button className="Button" style={{ background: theme.background, color: theme.foreground }} onClick={changeTheme}>
      i am styled by theme context!
    </button>
  );
}
