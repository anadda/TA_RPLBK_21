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
export default function Index() {
  return (
    <div className="Main">
      <p>KELOMPOK21</p>
      <p>Anadda Ferrell Ramadhan - 21120119130035</p>
      <p>M. Farhan Athaullah - 21120119130072</p>
      <p>Muhammad Alifa Ramdhan - 21120119130092</p>
      <p>Rama Pradana Putra - 21120119140125</p>
    </div>
  );
}
function ThemedButton() {
  return (
    <button className="Button">
      i am styled by theme context!
    </button>
  );
}
