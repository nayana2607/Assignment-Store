import { createContext, useState } from "react";

export const FavoriteMealContext = createContext({
  favMeals: [],
  addFavorite: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(meal) {
    setFavoriteIds((currMeals) => [...currMeals, meal]);
  }

  function removeFavorites(id) {
    setFavoriteIds((currMeals) =>
      currMeals.filter((curr) => curr.idMeal !== id)
    );
  }

  const value = {
    favMeals: favoriteIds,
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
