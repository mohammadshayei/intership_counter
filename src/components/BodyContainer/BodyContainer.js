import React, { useState } from "react";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import "./BodyContainer.css";
import Factor from "../Factor/Factor";

const BodyContainer = (props) => {
  const [inputValue, setInputValue] = useState('')
  const [show, setShow] = useState(false)
  const onChange = e => {
    setInputValue(e.target.value)
  }
  const showModal = () => {
    setShow(!show)
  }
  return (
    <div className="body-container">
      <Modal show={show} modalClosed={showModal}>
        <Factor />

      </Modal>
      <div className='add-container' >
        <input value={inputValue} onChange={onChange} />
        <Button onClick={() => props.onAddButtonHandler(inputValue)} title='ADD' />

      </div>
      <ItemsContainer
        onResetButtonHandler={props.onResetButtonHandler}
        onDeleteButtonHandler={props.onDeleteButtonHandler}
      />
      <div className='add-container' >
        <Button onClick={showModal} title='show factor' />
      </div>
    </div>
  );
};
export default BodyContainer;
