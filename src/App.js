import React from "react";
// import './App.css';
import { TodoProvider } from "./Context/TodoContext";
import Home from "./containers/Home";

function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}

export default App;
