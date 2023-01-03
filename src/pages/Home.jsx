import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import homeStore from "../store/homeStore";

export default function Home() {
  const store = homeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div className="home">
      <Header />
      <header className="home-search">
        <div className="width">
          <h2>Search For a Coin</h2>
          <div className="home-search-input">
            <input
              className="home-input"
              type="text"
              value={store.query}
              onChange={store.setQuery}
            />
          </div>
        </div>
      </header>

      <div className="home-cryptos">
        <div className="width">
          <h2>Trending Coins</h2>
          <div className="home-crypto-list">
            {store.coins.map((coin) => {
              return <ListItem key={coin.id} coin={coin} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
