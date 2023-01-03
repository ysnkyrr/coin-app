import { createContext, useState } from "react";

const globalstate = [];

const GlobalStateContext = createContext(globalstate);

const [favorites, setFavorites] = useState([]);

console.log(favorites);
