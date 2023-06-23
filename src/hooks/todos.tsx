import { useQuery } from "@tanstack/react-query";
export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


async function fetchTodos() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (result.ok) {
        return result.json() as Promise<Array<Todo>>;
    }

    throw new Error("Error fetching todos");
}

async function fetchTodo(id: string) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (result.ok) {
        return result.json() as Promise<Todo>;
    }

    throw new Error("Error fetching todo");
}

export function useAllTodos() {
    return useQuery({
        queryKey: ["todos", "list"],
        queryFn: async () => {
            return fetchTodos();
        }
    })
}

export function useSingleTodo(id: string) {
    return useQuery({
        queryKey: ["todos", id],
        queryFn: async () => {
            return fetchTodo(id);
        }
    })
}

export function useCompleteTodos() {
    throw new Error();
}

export function useInCompleteTodos() {
    throw new Error();
}