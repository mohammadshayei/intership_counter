import React, { useState, useEffect } from "react";
import Item from "./Item/Item";
import { useSelector } from "react-redux";
import "./ItemsContainer.css";

const ItemsContainer = (props) => {
  const counter = useSelector((state) => state.counter);
  const [subprices, setsubprices] = useState(0);
  const [dataFood, setDataFood] = useState([]);

  useEffect(() => {
    const prices = counter.dataFood.map((food) => food.price * food.count);
    const subprices = prices.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue)
    })
    setsubprices(subprices);
    setDataFood(counter.dataFood)
    console.log('items countainer -> use effect', dataFood);
  }, [counter.dataFood]);



  return (
    <div className="ItemsContainer">
      {counter.dataFood.map((food) => {
        return (
          <Item
            onDeleteButtonHandler={props.onDeleteButtonHandler}
            onResetButtonHandler={props.onResetButtonHandler}
            title={food.name}
            price={food.price}
            id={food.id}
            key={food.id}
          />
        );
      })}

      {/* {dataFood.length === 2 && <h2>hello seyed</h2>} */}
      <p>sub prices : {subprices}</p>
      {dataFood.map(food =>{
        if(food.count > 0){
          return (
            <p>
          <span>id: {food.id}</span>
          <span>/  name: {food.name}</span>
          <span>/  count: {food.count}</span>
          <span>/  price: {food.price}</span>
          <span>/  sub price: {food.price * food.count}</span>
        </p>
          )
        }
      }
      )}
      {console.log('end:', dataFood)}
    </div>
  );
};
export default ItemsContainer;
