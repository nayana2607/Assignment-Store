import React from "react";
import { useNavigate } from "react-router";

function Button(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(props.routeTo);
  }
  return (
    <div className="flex m-8">
      <div className=" bg-yellow-600 px-5 rounded-lg" onClick={handleClick}>
        {props.label}
      </div>
    </div>
  );
}

export default Button;
