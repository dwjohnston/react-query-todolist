import { useParams } from "react-router-dom";
import { useGetSingleTodoQuery } from "../../hooks/rtkqHooks";

export function RTKQTodoSingle() {
    const { todoId } = useParams<{ todoId: string }>();



    if (!todoId) {
        throw new Error("Id didn't exist")
    }

    // const deleteTodo = useDeleteTodo(todoId);

    const todoResult = useGetSingleTodoQuery(parseInt(todoId));

    if (todoResult.isLoading) {
        return <>Loading</>
    }

    if (todoResult.isError) {
        return <>error</>
    }

    if (todoResult.isSuccess) {
        return <div>
            <h1>Single Todo</h1>

            {todoResult.data.title}

            {/* <button onClick={deleteTodo.mutate}>delete</button> */}
        </div>
    }

    throw new Error("Unknown state")


}