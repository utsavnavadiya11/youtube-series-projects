import { CreateSlice, nanoid } from "reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "Learn Redux Toolkit", completed: false }],
};

export const todoSlice = CreateSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
