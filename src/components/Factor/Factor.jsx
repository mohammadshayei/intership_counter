import React,{useState, useEffect} from 'react'
import './Factor.scss'
import { useSelector } from "react-redux";
import Button from '../../components/Factor/Factor'

const Factor = () => {

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
        <div className="factor-container">
            <h3 className="factor-title">the facktor</h3>
            <table className="item-container-table">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>count</th>
                    <th>price</th>
                    <th>sub price</th>
                </tr>
                {dataFood.map(food => {
                    if (food.count > 0) {
                        return (
                            <tr>
                                <td>{food.id}</td>
                                <td>{food.name}</td>
                                <td>{food.count}</td>
                                <td>{food.price}</td>
                                <td>{food.price * food.count}</td>
                            </tr>
                        )
                    }
                }
                )}
            </table>
            <h4 className="item-container-sub-prices">sub prices : {subprices}</h4>
            <Button />
        </div>
    )
}

export default Factor
