import React, { useContext } from "react";
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
      <div className="flex flex-wrap justify-center">
        {context.favMeals.length > 0 ? (
          context.favMeals.map((meal) => (
            <div className="flex flex-row" key={meal.idMeal}>
              <Card
                data={meal}
                handleFavorite={() => toggleFavorite(meal)}
                showFavorite={context.favMeals.includes(meal)}
              />
            </div>
          ))
        ) : (
          <div className="flex flex-1 justify-center">
            <p className="text-xl">No Favorites added </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
