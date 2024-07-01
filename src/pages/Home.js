import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <Button label={"Menu"} routeTo={"menu"} />
      <Button label={"Favorites"} routeTo={"myfavorites"} />
      <Button label={"Random Meal"} routeTo={"mealGenerator"} />
    </div>
  );
}

export default Home;
