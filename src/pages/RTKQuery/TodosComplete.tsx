import { TodoItem } from "./components/TodoItem";
import { useGetCompletedTodosQuery } from "../../hooks/rtkqHooks";

export function RTKQTodoListComplete() {



    const todosQuery = useGetCompletedTodosQuery();

    if (todosQuery.isError) {
        return <>Error!</>
    }

    if (todosQuery.isLoading) {
        return <>Loading...</>
    }


    if (todosQuery.isSuccess) {
        return <div>
            <h1>TodoList</h1>

            {todosQuery.data.map((v) => {
                return <TodoItem todo={v} key={v.id} />
            })}


        </div>
    }

    throw new Error("Unknown state");

}