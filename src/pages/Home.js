import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center w-6/12 m-auto bg-gray-200 my-12 p-4 shadow-xl rounded-lg">
        <Button label={"Menu"} routeTo={"menu"} />
        <Button label={"Favorites"} routeTo={"favorites"} />
        <Button label={"Random Meal"} routeTo={"generator"} />
      </div>
    </div>
  );
}

export default Home;
