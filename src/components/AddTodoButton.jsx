import React from "react";

const AddTodoButton = ({ symbol, openModal, setOpenModal }) => {
  const handleClick = () => {
    setOpenModal((prevState) => !prevState);
  };
  return <button onClick={handleClick}> {symbol} </button>;
};

export default AddTodoButton;
