import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "Buy some milk",
      completed: false,
    },
    {
      id: 2,
      title: "Walk the dog",
      completed: false,
    },
    {
      id: 3,
      title: "Wash the car",
      completed: false,
    },
    {
      id: 4,
      title: "Learn 15 new words in English",
      completed: false,
    },
    {
      id: 5,
      title: "Practice on Codewars",
      completed: false,
    },
    {
      id: 6,
      title: "Cook dinner",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.unshift(newTodo);
      console.log(newTodo);
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => {
        console.log(todo.id);
        console.log(action.payload);
        return todo.id === action.payload.id;
      });
      console.log(current(todo));
      todo.title = action.payload.title;
    },
    toggleComplete: (state, action) => {
      console.log(action);
      console.log(state.todos);
      const index = state.findIndex((todo) => todo?.id === action?.payload?.id);
      state[index].completed = action?.payload?.completed;
      state.push(state.splice(index, 1)[0]);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { newTodo } = todoSlice.actions.addTodo;

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
