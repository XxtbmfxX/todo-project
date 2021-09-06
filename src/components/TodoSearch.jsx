import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return [
    <input
      type="text"
      placeholder="Comprear he- anime"
      onChange={onSearchValueChange}
    />,

    <p>{searchValue}</p>,
  ];
};

export default TodoSearch;
