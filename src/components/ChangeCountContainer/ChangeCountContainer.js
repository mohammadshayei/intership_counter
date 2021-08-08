import React, { useEffect, useState } from "react";
import "./ChangeCountContainer.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/counter";

const ChangeCountContainer = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const [count, setCount] = useState(0);

  const onIncrementHandler = (id) => {
    console.log('change count countainer -> on increment handler');
    dispatch(actions.incrementHandler(id));
  };

  const onDecrementHandler = (id) => {
    dispatch(actions.decrementHandler(id));
    console.log('change count countainer -> on decrement handler');
  };

  useEffect(() => {
    const founedCount = counter.dataFood.find(
      (food) => food.id === props.id
    ).count;
    setCount(founedCount);
  }, [counter.dataFood]);

  return (
    <div className="change-count-container">
      {/* <p onClick={() => props.onIncrementHandler(props.id)}>+</p> */}
      <p onClick={() => onIncrementHandler(props.id)}>+</p>
      {/* <p>{props.count !== 0 ? props.count : "zero"}</p> */}
      <p>{count}</p>
      <p onClick={() => onDecrementHandler(props.id)}>---</p>
      <p>{props.title} </p>
      <p>{props.price}</p>
      <p>({props.price * count})  </p>
    </div>
  );
};

export default ChangeCountContainer;
