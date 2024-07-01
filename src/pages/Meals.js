import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";

function Meals() {
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
  return (
    <div>
      {meals?.map((meal) => (
        <div key={meal.idMeal}>
          <Card data={meal} />
        </div>
      ))}
    </div>
  );
}

export default Meals;
