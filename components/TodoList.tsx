import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const TodoItem = dynamic(() => import("./TodoItem"));

const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <section className="todo__list">
      {todos.length == 0 ? (
        <div>-- Todo list empty --</div>
      ) : (
        todos.map((todo, index) => <TodoItem index={index} text={todo.text} />)
      )}
    </section>
  );
};

export default TodoList;
