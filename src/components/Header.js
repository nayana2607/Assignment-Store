import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const LOGO_URL =
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/25539c29532269.55f7d6a0a8c71.jpg";
  return (
    <div className="flex  justify-between dark:bg-yellow-100 shadow-md m-4 sm:bg-yellow-300 lg:bg-yellow-600">
      <div className="flex">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex p-5 m-2">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="px-4">
            <Link to="/favorites">Favourites</Link>
          </li>
          <li className="px-4">
            <Link to="/generator">Random Meal</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
