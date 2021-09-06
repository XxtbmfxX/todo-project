import React, { useContext } from "react";

import Header from "../components/Header";
import Todos from "../components/Todos";
import TodoItem from "../components/TodoItem";
import AddTodoButton from "../components/AddTodoButton";

import Modal from "../modals/modal.js";

import { TodoContext } from "../Context/TodoContext";
import TodoForm from "../components/TodoForm";

const Home = () => {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <Header />
      <Todos>
        {error && <p>Desesperate broh</p>}
        {loading && <p>Cargando amigo dou</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer Todo</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </Todos>
      {/* existe y es falso que es falso, ose que es verdadero */}
      {!!openModal && (
        <Modal>
          <TodoForm />
          <AddTodoButton
            symbol={"X"}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <AddTodoButton
        symbol={"+"}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Home;
