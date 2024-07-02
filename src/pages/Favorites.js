import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { FavoriteMealContext } from "../store/meal-context";
import Card from "../components/Card";

function Favorites() {
  const context = useContext(FavoriteMealContext);
  function toggleFavorite(meal) {
    if (context.favMeals.includes(meal)) {
      context.removeFavorites(meal.idMeal);
    } else {
      context.addFavorite(meal);
    }
  }
  return (
    <div>
      <Header />
      {context.favMeals.length > 0 ? (
        context.favMeals.map((meal) => (
          <Card
            data={meal}
            handleFavorite={() => toggleFavorite(meal)}
            showFavorite={context.favMeals.includes(meal)}
          />
        ))
      ) : (
        <p>No Favorites added :)</p>
      )}
    </div>
  );
}

export default Favorites;
