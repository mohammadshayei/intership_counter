import React from "react";
import './Button.css'
const Button = (props) => {
  return <button onClick={props.onClick} className='button-container'>{props.title} </button>;
};
export default Button;
