import React from "react";
import { Link } from "react-router-dom";
import homeStore from "../store/homeStore";
import showStore from "../store/showStore";
import Header from "./Header";

export default function Favorites() {
  const store = homeStore();
  const data = store.favorites;
  const showData = showStore();

  console.log(data);
  return (
    <div>
      <Header />

      <div className="width">
        <div className="favorite-crypto-list">
          {data.map((coin) => {
            return (
              <div className="favorite-item">
                <Link className="coin-list-link" to={`/${coin.id}`}>
                  <div className="favorite-crypto">
                    <div className="home-crypto favorite">
                      <span className="home-crypto-image">
                        <img src={coin.image} alt="" />
                      </span>
                      <span className="home-crypto-name">{coin.name}</span>
                    </div>
                  </div>
                </Link>
                <button className="remove-btn" onClick={() => store.removeFavoriteCoin(coin)}>
                  Remove Fav
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
