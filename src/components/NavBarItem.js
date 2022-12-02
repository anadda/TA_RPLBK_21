import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarItem.css';

const NavBarItem = ({ text, url }) => {
  return (
    <Link to={url} className="navbar-item">
      {text}
    </Link>
  );
};

export default NavBarItem;