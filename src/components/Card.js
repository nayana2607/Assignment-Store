import React from "react";

function Card({ data, handleFavorite, showFavorite }) {
  return (
    <div>
      <img src={data.strMealThumb} alt={data.strMeal} />
      <div>{data.strMeal}</div>
      <div onClick={handleFavorite}>{showFavorite ? "♥️" : "♡"}</div>
    </div>
  );
}

export default Card;
