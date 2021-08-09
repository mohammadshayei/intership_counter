import React,{useState, useEffect} from 'react'
import './Header.css'
import { useSelector } from "react-redux";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Header = (props) => {

  const counter = useSelector((state) => state.counter);
  
  const [subprices, setsubprices] = useState(0);
  const [subcounts, setsubcounts] = useState(0);

  useEffect(() => {
    const prices = counter.dataFood.map((food) => food.price * food.count);
    const subprices = prices.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue)
    })
    setsubprices(subprices);
    const counts = counter.dataFood.map((food) => food.count);
    const subcounts = counts.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue)
    })
    setsubcounts(subcounts);
    console.log('header -> use effect');
  }, [counter.dataFood]);


  return <div className='header-container'>
        
        <h3> <ShoppingBasketIcon /> {subcounts} </h3>
        <h1> POFAKIAN </h1>
        <h3> {subprices} </h3>
  </div>;
};
export default Header;
