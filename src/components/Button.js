import React from "react";
import { useNavigate } from "react-router";

function Button(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(props.routeTo);
  }
  return <div onClick={handleClick}>{props.label}</div>;
}

export default Button;
