import { TodoItem } from "./components/TodoItem";
import { useAllTodos, useCompleteTodos } from "../../hooks/rqHooks"

export function TodoListComplete() {



    const todosQuery = useCompleteTodos();

    if (todosQuery.isError) {
        return <>Error!</>
    }

    if (todosQuery.isLoading) {
        return <>Loading...</>
    }


    return <div>
        <h1>TodoList</h1>

        {todosQuery.data.map((v) => {
            return <TodoItem todo={v} key={v.id} />
        })}


    </div>
}