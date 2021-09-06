import React from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";

const Header = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
    </>
  );
};

export default Header;
