import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/favorites">Favourites</Link>
      <Link to="/generator">Random Meal</Link>
    </nav>
  );
}

export default Header;
