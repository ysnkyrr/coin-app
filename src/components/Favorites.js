import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import homeStore from "../store/homeStore";
import Header from "./Header";

export default function Favorites() {
  const store = homeStore();
  const data = store.favorites;

  console.log(data);

  useEffect(() => {
    localStorage.removeItem("favCoin");
  }, [store.removeFavoriteCoin]);
  return (
    <div>
      <Header />
      <div className="width">
        <div className="favorite-crypto-list-link">
          {data.map((coin) => {
            return (
              <div className="favorite-item">
                <button
                  className="remove-btn"
                  onClick={() => store.removeFavoriteCoin(coin)}
                >
                  Delete Fav
                </button>
                <Link className="favorite-coin-list-link" to={`/${coin.id}`}>
                  <span className="home-crypto-image">
                    <img src={coin.image} alt="" />
                  </span>
                  <span className="home-crypto-name">{coin.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
