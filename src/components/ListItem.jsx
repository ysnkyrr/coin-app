import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeStore from "../store/homeStore";

export default function ListItem({ coin }) {
  const store = homeStore();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (active === false) {
      setActive(!active);
      store.addFavoriteCoin(coin);
    } else {
      store.removeFavoriteCoin(coin);
      setActive(false);
    }
  };
  useEffect(() => {
    localStorage.setItem("favCoin" , JSON.stringify(store.favorites))
  },[handleClick])

  return (
    <div className="home-crypto">
      <span>
        <button className="star-btn" onClick={handleClick}>
          <svg
            className="star-svg"
            version="1.1"
            id="svg4619"
            width="24px"
            height="24px"
            fill="#2222"
            style={{ fill: active ? "#FFD000" : "#ddd" }}
          >
            <path
              id="path4749-2-8-2"
              d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5
	l5,3.5l-2-6l4-3.5h-5L7.5,0z"
            />
          </svg>
        </button>
      </span>
      <Link className="coin-list-link" to={`/${coin.id}`}>
        <div className="home-crypto-left">
          <span className="home-crypto-image">
            <img src={coin.image} alt="" />
          </span>
          <span className="home-crypto-name">{coin.name}</span>
        </div>
        {coin.priceBtc && (
          <span className="home-crypto-price">
            <span className="home-crypto-usd">{coin.priceUsd} USD</span>
            <span className="home-crypto-btc">
              <img className="btc-image" src="/coin/bitcoin.webp" />(
              {coin.priceBtc} BTC)
            </span>
          </span>
        )}
      </Link>
    </div>
  );
}
