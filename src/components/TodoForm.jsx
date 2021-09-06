import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = (e) => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="add_todo">Add Todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        name="add_todo"
        id=""
        placeholder="buy milk"
        cols="30"
        rows="10"
      ></textarea>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
      <button type="submit">Agregar</button>
      {/* ejecuta la del form */}
    </form>
  );
};

export default TodoForm;
