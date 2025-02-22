import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    listTodos: builder.query({
      query: (payload) => ({
        url: 'todos',
        params: payload,
      }),
      transformResponse: ({ todos }) => todos.map(t => {
        const {todo, ...rest} = t;
        rest.name = todo;

        return rest;
      }),
    }),
  }),
});

export const { useListTodosQuery } = todosApi;
