import axios from "axios";
import create from "zustand";
import debounce from "../helpers/debounce";

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: "",
  searching: false,
  favorites: localStorage.getItem("favCoin")
    ? JSON.parse(localStorage.getItem("favCoin"))
    : [],

  setQuery: (e) => {
    set({ query: e.target.value });
    homeStore.getState().searchCoins();
  },
  addFavoriteCoin: (coin) => {
    const favorite = homeStore.getState().favorites;
    let newFavoritesList = [];
    newFavoritesList = [...favorite, coin];
    set({ favorites: newFavoritesList });
  },
  removeFavoriteCoin: (coin) => {
    const favorite = homeStore.getState().favorites;
    const rm = favorite.filter((item) => item.id !== coin.id);
    set({ favorites: rm });
  },

  searchCoins: debounce(async () => {
    set({ searching: true });
    const { query, trending } = homeStore.getState();
    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );

      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
        };
      });
      set({ coins, searching: false });
    } else {
      set({ coins: trending, searching: false });
    }
  }, 500),

  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
`),
    ]);

    const btcPrice = btcRes.data.bitcoin.usd;

    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc.toFixed(11),
        priceUsd: (coin.item.price_btc * btcPrice).toFixed(11),
      };
    });
    set({ coins, trending: coins });
  },
}));
export default homeStore;
