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
      setCategory(data.categories);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-wrap w-6/12 m-auto bg-gray-200 my-12 p-4 shadow-xl rounded-lg">
        {categories
          ? categories?.map((category) => (
              <div key={category.idCategory} className="flex justify-between">
                <Button
                  label={category.strCategory}
                  routeTo={`/meals/${category.strCategory}`}
                />
              </div>
            ))
          : "Loading......"}
      </div>
    </div>
  );
}

export default Menu;
