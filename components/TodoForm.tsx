import { addTodo, setText } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import { ITodo } from "@/types/todo";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const todoSchema = yup.object({
  text: yup.string().required(),
});

const TodoForm = () => {
  const { form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    dispatch(setText(e.currentTarget.value));
  };

  const onSubmitHandler = (data: any) => {
    // if (form.text) {
    //   const newTodo: ITodo = { text: form.text };
    //   dispatch(addTodo(newTodo));
    //   dispatch(setText(""));
    // }
    const newTodo: ITodo = { text: data.text };
    dispatch(addTodo(newTodo));
    reset();
  };

  return (
    <section className="todo__form">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="flex gap-3">
        <div>
          <input
            {...register("text")}
            type="text"
            className="p-2 border-2 rounded"
            placeholder="input some text"
            name="text"
            //   value={form.text}
            //   onChange={onChangeHandler}
          />
        </div>
        <button className="px-5 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
      <p className="text-red-400 text-sm">{errors?.text?.message}</p>
    </section>
  );
};

export default TodoForm;
