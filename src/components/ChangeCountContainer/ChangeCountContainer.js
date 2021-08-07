import React, { useState } from "react";
import "./ChangeCountContainer.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/counter";
const ChangeCountContainer = (props) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  const selectSoftware = (software) => {
    dispatch(actions.selectSoftware(software));
  };
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
