import React from "react";

function Card({ data }) {
  return (
    <div>
      <img src={data.strMealThumb} alt={data.strMeal} />
      <div>{data.strMeal}</div>
      <div>Heart</div>
    </div>
  );
}

export default Card;
