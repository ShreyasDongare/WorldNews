import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/237/237014.png"
            alt=""
          />
        </div>
        <ul className="menuList">
          <li>Home</li>
          <li>Business News</li>
          <li>Tech News</li>
        </ul>
        <div className="search">
          <input type="text" name="" id="" placeholder="Search Here" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
