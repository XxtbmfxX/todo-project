import React from "react";

import Amongus from "../utils/amungus.jpg";

const Todo = (props) => {
  return (
    <div className="todo">
      <span onClick={props.onCompleted}> completed </span>
      <img src={Amongus} alt="un amoass cualquiera" width="50px" />
      <h2>{props.text}</h2>
      <button onClick={props.onDelete}>X</button>
    </div>
  );
};

export default Todo;
