import React from "react";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import "./BodyContainer.css";
const BodyContainer = (props) => {
  return (
    <div className="body-container">
      <ItemsContainer
        onDecrementHandler={props.onDecrementHandler}
        onIncrementHandler={props.onIncrementHandler}
        data={props.data}
      />
    </div>
  );
};
export default BodyContainer;