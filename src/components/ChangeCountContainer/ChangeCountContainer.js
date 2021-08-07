import React, { useState } from "react";
import "./ChangeCountContainer.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/counter";

const ChangeCountContainer = (props) => {

  const dispatch = useDispatch();
  const counter= useSelector((state) => state.counter);

  const onIncrementHandler = (id) => {
    dispatch(actions.incrementHandler(id));
  };
  const onDecrementHandler = (id) => {
    dispatch(actions.decrementHandler(id));
  }
  
  return (
    <div className="change-count-container">
      {/* <p onClick={() => props.onIncrementHandler(props.id)}>+</p> */}
      <p onClick={() => onIncrementHandler(props.id)}>+</p>
      {/* <p>{props.count !== 0 ? props.count : "zero"}</p> */}
      <p>{counter.dataFood[0].count}</p>
      <p onClick={() => onDecrementHandler(props.id)}>-</p>
      <p>{props.title} </p>
    </div>
  );
};
export default ChangeCountContainer;
