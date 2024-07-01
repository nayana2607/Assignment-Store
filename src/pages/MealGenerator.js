import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

function MealGenerator() {
  const [randomMeal, setRandomMeal] = useState();
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
  return (
    <div>
      <Header />
      {randomMeal ? <Card data={randomMeal[0]} /> : ""}
    </div>
  );
}

export default MealGenerator;
