import React from "react";
import { Link } from "react-router-dom";
import uoLogo from "../images/uo-logo-white.png";
export default function Header(back) {
  return (
    <header className="header">
      <div className="width">
        <a
          className="nav-link"
          target="_blank"
          href="https://www.yasinakyar.com/"
        >
          <img className="uo-logo" src={uoLogo} alt="" />
        </a>
        
        <h1 className="head-item">
          <Link to="/">Coin App</Link>
        </h1>
        <h1 className="head-item">
          <Link to="/favorites">Favorites</Link>
        </h1>
      </div>
    </header>
  );
}
