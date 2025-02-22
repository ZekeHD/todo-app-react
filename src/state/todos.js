import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => ({
  todos: [],
  totalCount: 0,
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: getInitialState(),
  reducers: {
    setTodos(state, { payload }) {
      state.todos = payload;
    },
  },
});

export const { setTodos } = todosSlice.actions;

export default todosSlice.reducer;