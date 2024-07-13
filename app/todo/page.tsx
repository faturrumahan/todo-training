"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import TodoForm from "@/components/TodoForm";

const TodoList = dynamic(() => import("@/components/TodoList"));
const PasswordForm = dynamic(() => import("@/components/PasswordForm"));
const DynamicForm = dynamic(() => import("@/components/DynamicForm"));

const TodoPage = () => {
  const [showTodo, setShowTodo] = useState(false);

  const showTodoHandler = () => {
    setShowTodo(!showTodo);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-3">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">To Do List</h1>
        <button
          className="px-5 py-2 bg-black text-white rounded"
          onClick={showTodoHandler}
        >
          {!showTodo ? "Show" : "Hide"}
        </button>
      </div>
      {showTodo && (
        <>
          <TodoForm />
          <TodoList />
        </>
      )}
      {/* <h1 className="text-2xl font-bold mt-5">Dynamic Form</h1>
      <DynamicForm />
      <h1 className="text-2xl font-bold mt-5">Password</h1>
      <PasswordForm /> */}
    </div>
  );
};

export default TodoPage;
