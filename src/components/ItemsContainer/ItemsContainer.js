import React from "react";
import Item from "./Item/Item";
import "./ItemsContainer.css";
const ItemsContainer = (props) => {
  return (
    <div className="ItemsContainer">
      {props.data.map((food) => {
        return (
          <Item
            onDecrementHandler={props.onDecrementHandler}
            onIncrementHandler={props.onIncrementHandler}
            onDeleteItemHandler={props.onDeleteItemHandler}
            onResetItemHandler={props.onResetItemHandler}
            count={food.count}
            title={food.name}
            id={food.id}
            price={food.price}
          />
        );
      })}
    </div>
  );
};
export default ItemsContainer;
