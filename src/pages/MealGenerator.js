import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { FavoriteMealContext } from "../store/meal-context";

function MealGenerator() {
  const [randomMeal, setRandomMeal] = useState();
  const context = useContext(FavoriteMealContext);
  useEffect(() => {
    async function fetchRandomMeal() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      setRandomMeal(data.meals);
    }
    fetchRandomMeal();
  }, []);
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
        {randomMeal ? (
          <Card
            data={randomMeal[0]}
            handleFavorite={() => toggleFavorite(randomMeal[0])}
            showFavorite={context.favMeals.includes(randomMeal[0])}
          />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}

export default MealGenerator;
