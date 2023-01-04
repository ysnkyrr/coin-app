import React from "react";
import { Link } from "react-router-dom";

export default function Header(back) {
  return (
    <header className="header">
      <div className="width">
        {back && (
          <Link to="/" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              wiewbox="0 0 48 48"
              width="24"
            >
              <path
                fill="currentColor"
                d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
              />
            </svg>
          </Link>
        )}
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
