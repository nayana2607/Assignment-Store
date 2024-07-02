import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";
import { FavoriteMealContext } from "../store/meal-context";

import Header from "../components/Header";

function Meals() {
  const context = useContext(FavoriteMealContext);
  const { category } = useParams();
  const [meals, setMeals] = useState();
  useEffect(() => {
    async function fetchMeal() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setMeals(data.meals);
    }
    fetchMeal();
  }, [category]);

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
        {meals
          ? meals.map((meal) => (
              <div key={meal.idMeal} className="flex flex-row">
                <Card
                  data={meal}
                  showFavorite={context.favMeals.includes(meal)}
                  handleFavorite={() => toggleFavorite(meal)}
                />
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default Meals;
