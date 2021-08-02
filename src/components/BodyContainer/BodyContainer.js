import React ,{ useState}from "react";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import Button from "../UI/Button/Button";
import "./BodyContainer.css";
const BodyContainer = (props) => {
  const [inputValue, setInputValue] = useState('')
  const onChange=e=>{
    setInputValue(e.target.value)
  }
  return (
    <div className="body-container">
      <ItemsContainer
        onDecrementHandler={props.onDecrementHandler}
        onIncrementHandler={props.onIncrementHandler}
        onResetButtonHandler={props.onResetButtonHandler}
        onDeleteButtonHandler={props.onDeleteButtonHandler}
        data={props.data}
      />
      <div className='add-container' >
        <input value={inputValue} onChange={onChange} />
        <Button onClick={()=>props.onAddButtonHandler(inputValue)}  title='ADD' />
      </div>
    </div>
  );
};
export default BodyContainer;
