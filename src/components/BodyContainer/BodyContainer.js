import React ,{ useState}from "react";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import Button from "../UI/Button/Button";
import "./BodyContainer.css";
import {useDispatch} from 'react-redux'
import * as actions from '../../store/actions/counter'
const BodyContainer = (props) => {
  const [inputValueName, setInputValueName] = useState('')
  const [inputValuePrice, setInputValuePrice] = useState('')
  const  dispatch = useDispatch()
  const addRecordHandler=(name,price)=>{
    dispatch(actions.addRecordHandler(name,price))
  }
  const onChangeName=e=>{
    setInputValueName(e.target.value);
  }
  const onChangePrice=e=>{
    setInputValuePrice(e.target.value);
  }
  return (
    <div className="body-container">
      <ItemsContainer
        onResetButtonHandler={props.onResetButtonHandler}
        onDeleteButtonHandler={props.onDeleteButtonHandler}
      />
      <div className='add-container' >
        <input placeholder="Name"value={inputValueName} onChange={onChangeName} />
        <input placeholder="Price"value={inputValuePrice} onChange={onChangePrice}/>
        <Button onClick={()=>addRecordHandler(inputValueName,inputValuePrice)}  title='ADD' />
      </div>
    </div>
  );
};
export default BodyContainer;
