import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Todo } from "../services/todoService";

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ["todos"],
    endpoints: (builder) => ({
        getSingleTodo: builder.query<Todo, number>({
            query: (todoId) => `todos/${todoId}`,
            providesTags: (result, err, arg) => [{ type: "todos", id: arg }]
        }),
        getAllTodos: builder.query<Array<Todo>, void>({
            query: () => `todos`,
            providesTags: (result, err, arg) => {
                if (result) {
                    return [
                        { type: "todos", id: "LIST" },
                        ...result.map((v) => {
                            return {
                                type: "todos",
                                id: v.id
                            } as const;
                        })
                    ]
                }
                return [{
                    type: "todos",
                    id: "LIST"
                }];
            }
        }),
        getCompletedTodos: builder.query<Array<Todo>, void>({
            query: () => `todos?completed=true`,
        }),
    }),
})



// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTodosQuery, useGetCompletedTodosQuery, useGetSingleTodoQuery, } = todoApi