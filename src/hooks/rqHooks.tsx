import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCompletedTodos, fetchTodo, fetchTodos } from "../services/todoService";


export function useAllTodos() {

    const qc = useQueryClient();
    return useQuery({
        queryKey: ["todos", "list"],
        staleTime: 5 * 60 * 1000,
        queryFn: async () => {
            const result = await fetchTodos();
            result.forEach((v) => {
                console.log(v);
                qc.setQueryData(["todos", `${v.id}`], v);
            });
            const completeTodos = result.filter((v) => v.completed);

            qc.setQueryData(["todos", "list", { filter: "complete" }], completeTodos)

            return result;
        }
    })
}

export function useSingleTodo(id: string) {
    return useQuery({
        queryKey: ["todos", id],
        staleTime: 5 * 60 * 1000,
        queryFn: async () => {
            return fetchTodo(id);
        }
    })
}


export function useDeleteTodo(id: string) {

    const qc = useQueryClient();

    return useMutation({
        mutationKey: ["todos", "delete", id],
        mutationFn: (data: {}) => {

            //Pretend that we have deleted the todo

            qc.setQueriesData(["todos", "list"], (oldData) => {
                return (oldData ?? []).filter((v) => `${v.id}` !== id);
            })


            qc.resetQueries(["todos", id]);

            return null;

        }
    });
}

export function useAddCompletedTodo() {

    const qc = useQueryClient();
    return useMutation({
        mutationKey: ["todos", "add"],
        mutationFn: async () => {
            qc.setQueriesData(["todos", "list", { filter: "complete" }], (oldData) => {
                return [...oldData, {
                    id: 999,
                    userId: 1,
                    title: "foo",
                    completed: true
                }]
            })
        },
    })





}

export function useCompleteTodos() {

    const qc = useQueryClient();
    return useQuery({
        queryKey: ["todos", "list", { filter: "complete" }],
        staleTime: 5 * 60 * 1000,
        queryFn: async () => {
            const result = await fetchCompletedTodos();
            result.forEach((v) => {
                qc.setQueryData(["todos", `${v.id}`], v)
            });

            return result;
        }
    })
}

export function useInCompleteTodos() {
    throw new Error();
}