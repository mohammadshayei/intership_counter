import React, { useState } from "react";
import "./CounterPage.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import Header from "../../components/Header/Header";

const CounterPage = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "pizza",
      count: 0,
    },
    {
      id: 2,
      name: "gheyme",
      count: 0,
    },
  ]);

  const onIncrementHandler = (id) => {
    const newData = data.map((food) => {
      if (food.id === id) {
        return { ...food, count: food.count + 1 };
      }
      return food;
    });
    setData(newData);
  };
  const onDecrementHandler = (id) => {
    const newData = data.map((food) => {
      if (food.id === id) {
        return food.count > 0 ? { ...food, count: food.count - 1 } : food;
      }
      return food;
    });
    setData(newData);
  };
  return (
    <div className="counterpage">
      <Header />
      <BodyContainer
        data={data}
        onIncrementHandler={onIncrementHandler}
        onDecrementHandler={onDecrementHandler}
      />
    </div>
  );
};
export default CounterPage;
