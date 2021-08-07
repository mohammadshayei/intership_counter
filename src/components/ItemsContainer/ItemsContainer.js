import React from "react";
import Item from "./Item/Item";
import { useSelector } from "react-redux";
import "./ItemsContainer.css";

const ItemsContainer = (props) => {
  const counter= useSelector((state) => state.counter);
  return (
    <div className="ItemsContainer">
      {counter.dataFood.map((food) => {
        return (
          <Item
            onDeleteButtonHandler={props.onDeleteButtonHandler}
            onResetButtonHandler={props.onResetButtonHandler}
            title={food.name}
            id={food.id}
          />
        );
      })}
    </div>
  );
};
export default ItemsContainer;
