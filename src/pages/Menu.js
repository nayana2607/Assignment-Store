import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

function Menu() {
  const [categories, setCategory] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await result.json();
      // console.log(data);
      setCategory(data.categories);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {categories?.map((category) => (
        <div key={category.idCategory}>
          <Button
            label={category.strCategory}
            routeTo={`/meals/${category.strCategory}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Menu;
