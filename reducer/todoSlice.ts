import { ITodo } from "@/types/todo";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IForm {
  text: string;
}
export interface TodoState {
  todos: Array<ITodo>;
  // todos: ITodo[] //alternative
  form: IForm;
}

const initialState: TodoState = {
  todos: [],
  form: {
    text: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = [
        ...state.todos.slice(0, action.payload),
        ...state.todos.slice(action.payload + 1),
      ];
    },
    setText: (state, action: PayloadAction<string>) => {
      state.form = { ...state.form, text: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, setText } = todoSlice.actions;

export default todoSlice.reducer;
