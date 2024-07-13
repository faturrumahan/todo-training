import { removeTodo } from "@/reducer/todoSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface ITodoItem {
  index: number;
  text: string;
}

const TodoItem: React.FC<ITodoItem> = ({ index, text }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const onRemoveHandler = (index: number) => {
    dispatch(removeTodo(index));
  };

  const onCheckHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      key={index}
      className="w-[400px] p-5 shadow-lg rounded bg-gray-50 flex justify-between items-center mb-2"
    >
      <div className="flex items-center gap-2">
        <input
          id="default-checkbox"
          type="checkbox"
          onClick={onCheckHandler}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        />
        <p className={`${isChecked && "line-through"}`}>{text}</p>
      </div>
      <button onClick={() => onRemoveHandler(index)}>🗑️</button>
    </div>
  );
};

export default TodoItem;
