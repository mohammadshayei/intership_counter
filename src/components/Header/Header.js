import React from "react";
import "./Header.scss";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import {  useSelector } from "react-redux";

const Header = (props) => {
  const counter = useSelector((state) => state.counter);

  let sum=0;
  counter.dataFood.forEach(food => {
    sum+=food.count
  });

  return (
    <>
      <div className="header-container">
        <div>
          <ShoppingCartRoundedIcon />
          <span> {sum} items  </span>
        </div>
        <div className="name">Name</div>
        <div className="total-price">50000</div>
      </div>
    </>
  );
};
export default Header;
