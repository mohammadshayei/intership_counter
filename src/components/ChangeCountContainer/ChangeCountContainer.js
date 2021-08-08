import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./ChangeCountContainer.css";

const ChangeCountContainer = (props) => {
  return (
    <div className="change-count-container">
      <p onClick={() => props.onIncrementHandler(props.id)}>+</p>
      <p>{props.count}</p>
      <p onClick={() => props.onDecrementHandler(props.id)}>-</p>
      <p>{props.title} </p>
      <p>Price: {props.price} </p>
      <p>{props.price * count}</p>
    </div>
  );
};
export default ChangeCountContainer;
