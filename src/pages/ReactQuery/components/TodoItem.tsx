import { Link } from "react-router-dom";
import { useDeleteTodo } from "../../../hooks/rqHooks";
import { Todo } from "../../../services/todoService";

export function TodoItem(props: { todo: Todo }) {


    const deleteTodo = useDeleteTodo(`${props.todo.id}`);
    return <>

        <div style={{ display: "flex" }}>
            <Link to={`/ todos / ${props.todo.id}`}>{props.todo.title}</Link><button onClick={deleteTodo.mutate}>Delete</button>
        </div>
    </>
}