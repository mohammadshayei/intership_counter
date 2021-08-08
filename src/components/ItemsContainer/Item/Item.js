import React from "react";
import ChangeCountContainer from "../../ChangeCountContainer/ChangeCountContainer";
import Button from "../../UI/Button/Button";

import "./Item.css";
const Item = (props) => {
  // wrong place change it
  // const onDeleteItemHandler = () => {
  //   console.log("delete");
  // };
  // const onResetItemHandler = () => {
  //   console.log("reset");
  // };
  ///////////////////////////////////////
  return (
    <div className="item-container">
      <Button onClick={() => props.onDeleteItemHandler(props.id)} title="delete" />
      <Button onClick={() => props.onResetItemHandler(props.id)} title="reset" />
      <ChangeCountContainer
        onDecrementHandler={props.onDecrementHandler}
        onIncrementHandler={props.onIncrementHandler}
        count={props.count}
        title={props.title}
        id={props.id}
        price={props.price}
      />
    </div>
  );
};
export default Item;
