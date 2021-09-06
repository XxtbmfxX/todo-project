import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <div>
      <h1>
        Has completado {completedTodos} <br /> de {totalTodos} tareas
      </h1>
    </div>
  );
};

export default TodoCounter;
