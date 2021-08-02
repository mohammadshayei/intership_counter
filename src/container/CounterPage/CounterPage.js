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
  const onResetButtonHandler = (id) => {
    const newData = data.map((food) => {
      if (food.id === id) {
        return food.count > 0 ? { ...food, count: 0 } : food;
      }
      return food;
    });
    setData(newData);
  };
  const onDeleteButtonHandler = (id) => {
    const newData = data.filter((food) => food.id !== id);
    setData(newData);
  };
  const onAddButtonHandler = (name) => {
    if (data.find((food) => food.name === name)) {
      alert("exist");
      return;
    }
    const newData = [
      ...data,
      {
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
        name: name,
        count: 0,
      },
    ];
    setData(newData);
  };
  return (
    <div className="counterpage">
      <Header />

      <BodyContainer
        data={data}
        onIncrementHandler={onIncrementHandler}
        onDecrementHandler={onDecrementHandler}
        onResetButtonHandler={onResetButtonHandler}
        onDeleteButtonHandler={onDeleteButtonHandler}
        onAddButtonHandler={onAddButtonHandler}
      />
    </div>
  );
};
export default CounterPage;
