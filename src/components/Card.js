import React from "react";

function Card({ data, handleFavorite, showFavorite }) {
  return (
    <div className="rounded-lg m-4 p-4 w-[250px] h-43 bg-yellow-400 shadow-md">
      <img
        className="rounded-md w-25 pb-1.5"
        src={data.strMealThumb}
        alt={data.strMeal}
      />

      <div className="flex flex-row justify-between">
        <div className="text-xl font-bold">{data.strMeal}</div>
        <div className="text-xl cursor-pointer" onClick={handleFavorite}>
          {showFavorite ? "♥️" : "♡"}
        </div>
      </div>
    </div>
  );
}

export default Card;
