import React, { ReactNode } from "react";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addTodo } from "@/reducer/todoSlice";
import { ITodo } from "@/types/todo";

const todoSchema = yup
  .object({
    text: yup.string().required(),
  })
  .required();

interface FormValues {
  text: string;
}

interface TodoFormProviderProps {
  render: (props: {
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    onSubmitHandler: SubmitHandler<FormValues>;
    errors: FieldErrors<FormValues>;
  }) => ReactNode;
}

const TodoFormProvider: React.FC<TodoFormProviderProps> = ({ render }) => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(todoSchema),
  });

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    const newTodo: ITodo = { text: data.text };
    dispatch(addTodo(newTodo));
    reset();
  };

  return (
    <>
      {render({
        register,
        handleSubmit,
        onSubmitHandler,
        errors,
      })}
    </>
  );
};

export default TodoFormProvider;
