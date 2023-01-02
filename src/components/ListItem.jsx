import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ coin }) {
  return (
    <div className="home-crypto">
      <Link className="coin-list-link" to={`/${coin.id}`}>
        <span className="home-crypto-image">
          <img src={coin.image} alt="" />
        </span>
        <span className="home-crypto-name">{coin.name}</span>
        {coin.priceBtc && (
          <span className="home-crypto-price">
            <span className="home-crypto-btc">
              <img className="btc-image" src="/bitcoin.webp" />
              {coin.priceBtc} BTC
            </span>
            <span className="home-crypto-usd">({coin.priceUsd} USD)</span>
          </span>
        )}
      </Link>
    </div>
  );
}
