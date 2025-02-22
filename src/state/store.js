import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../api/todos";
import todosReducer from "./todos";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    todos: todosReducer,
  },

  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(todosApi.middleware)
  ),
});
