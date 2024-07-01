import { func } from "prop-types";
import { createContext, useState } from "react";

export const FavoriteMealContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState();
  function addFavorite(id) {
    setFavoriteIds((currIDs) => [...currIDs, id]);
  }
  function removeFavorites(id) {
    setFavoriteIds((currIDs) => currIDs.filter((currid) => currid != id));
  }

  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorites: removeFavorites,
  };
  return (
    <FavoriteMealContext.Provider value={value}>
      {children}
    </FavoriteMealContext.Provider>
  );
}
export default FavoritesContextProvider;
