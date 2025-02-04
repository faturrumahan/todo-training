import TodoFormProvider from "@/container/TodoFormProvider";
import React from "react";
import WithStyles from "./Button/WithStyles";
import Button from "./Button/Index";

const SubmitButton = WithStyles(Button);

const TodoForm = () => {
  return (
    <TodoFormProvider
      render={({ register, handleSubmit, onSubmitHandler, errors }) => (
        <section className="todo__form">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="flex gap-3">
            <div>
              <input
                {...register("text")}
                type="text"
                className="p-2 border-2 rounded"
                placeholder="input some text"
                name="text"
              />
            </div>
            {/* <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button> */}
            <SubmitButton type="submit" />
          </form>
          {errors.text && (
            <p className="text-red-400 text-sm">{errors.text.message}</p>
          )}
        </section>
      )}
    />
  );
};

export default TodoForm;
