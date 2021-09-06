import React from "react";

const Todos = (props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export default Todos;
