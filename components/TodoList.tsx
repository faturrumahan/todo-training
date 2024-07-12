import { removeTodo } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onRemoveHandler = (index: number) => {
    dispatch(removeTodo(index));
  };

  const onCheckHandler = (index: number) => {};

  return (
    <section className="todo__list">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="w-[400px] p-5 shadow-lg rounded bg-gray-50 flex justify-between items-center mb-2"
        >
          <div className="flex items-center gap-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <p>{todo.text}</p>
          </div>
          <button onClick={() => onRemoveHandler(index)}>🗑️</button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
