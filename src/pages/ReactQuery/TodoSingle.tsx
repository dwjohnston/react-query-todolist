import { useParams } from "react-router-dom";
import { useAllTodos, useDeleteTodo, useSingleTodo } from "../../hooks/rqHooks";

export function TodoSingle() {
    const { todoId } = useParams<{ todoId: string }>();



    if (!todoId) {
        throw new Error("Id didn't exist")
    }

    const deleteTodo = useDeleteTodo(todoId);

    const todoResult = useSingleTodo(todoId);

    if (todoResult.isLoading) {
        return <>Loading</>
    }

    if (todoResult.isError) {
        return <>error</>
    }

    return <div>
        <h1>Single Todo</h1>

        {todoResult.data.title}

        <button onClick={deleteTodo.mutate}>delete</button>
    </div>
}