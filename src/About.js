import React, { useState, useContext } from 'react';
import './About.css';
const authors = [
  {
    name: 'Anadda Ferrel Ramadhan',
    nim: '21120119130035'
  },
  {
    name: 'Muhammad Alifa Ramdhan',
    nim: '21120119140092'
  },
  {
    name: 'M. Farhan Athaullah',
    nim: '21120119130072'
  },
  {
    name: 'Rama Pradana Putra',
    nim: '21120119140125'
  },
];

export default function Index() {
  return (
    <div className='Main'>
      <h1>Authors</h1>
      <ul>
        {authors.map(author => (
          <li key={author.email} className="author">
            <strong>{author.name}</strong>
            <br />
            {author.nim}
          </li>
        ))}
      </ul>
    {/*
    <div className="Main">
      <p>KELOMPOK21</p>
      <p>Anadda Ferrell Ramadhan - 21120119130035</p>
      <p>M. Farhan Athaullah - 21120119130072</p>
      <p>Muhammad Alifa Ramdhan - 21120119130092</p>
      <p>Rama Pradana Putra - 21120119140125</p>
    </div>
    */ }
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
