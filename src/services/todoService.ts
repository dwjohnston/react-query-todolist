export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export async function fetchTodos() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (result.ok) {
        return result.json() as Promise<Array<Todo>>;
    }

    throw new Error("Error fetching todos");
}

export async function fetchCompletedTodos() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos?completed=true");

    if (result.ok) {
        return result.json() as Promise<Array<Todo>>;
    }

    throw new Error("Error fetching todos");
}

export async function fetchTodo(id: string) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (result.ok) {
        return result.json() as Promise<Todo>;
    }

    throw new Error("Error fetching todo");
}