import { useParams } from "react-router-dom";
import { useAllTodos, useSingleTodo } from "../hooks/todos";

export function TodoSingle() {
    const { todoId } = useParams<{ todoId: string }>();

    if (!todoId) {
        throw new Error("Id didn't exist")
    }

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
    </div>
}