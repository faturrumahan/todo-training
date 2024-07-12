"use client";
import React from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
// import PasswordForm from "@/components/PasswordForm";
// import DynamicForm from "@/components/DynamicForm";

const TodoPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl font-bold">To Do List</h1>
      <TodoForm />
      <TodoList />
      {/* <h1 className="text-2xl font-bold mt-5">Dynamic Form</h1>
      <DynamicForm />
      <h1 className="text-2xl font-bold mt-5">Password</h1>
      <PasswordForm /> */}
    </div>
  );
};

export default TodoPage;
