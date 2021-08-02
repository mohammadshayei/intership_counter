import React from "react";
import ChangeCountContainer from "../../ChangeCountContainer/ChangeCountContainer";
import Button from "../../UI/Button/Button";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item-container">
      <Button
        onClick={() => props.onDeleteButtonHandler(props.id)}
        title="delete"
      />
      <Button
        onClick={() => props.onResetButtonHandler(props.id)}
        title="reset"
      />
      <ChangeCountContainer
        onDecrementHandler={props.onDecrementHandler}
        onIncrementHandler={props.onIncrementHandler}
        count={props.count}
        title={props.title}
        id={props.id}
      />
    </div>
  );
};
export default Item;
