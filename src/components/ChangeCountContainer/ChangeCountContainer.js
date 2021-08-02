import React, { useState } from "react";
import "./ChangeCountContainer.css";
const ChangeCountContainer = (props) => {
  return (
    <div className="change-count-container">
      <p onClick={() => props.onIncrementHandler(props.id)}>+</p>
      <p>{props.count !== 0 ? props.count : "zero"}</p>
      <p onClick={() => props.onDecrementHandler(props.id)}>-</p>
      <p>{props.title} </p>
    </div>
  );
};
export default ChangeCountContainer;
