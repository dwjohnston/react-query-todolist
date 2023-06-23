import { Link } from "react-router-dom";
import { Todo } from "../hooks/todos";

export function TodoItem(props: { todo: Todo }) {
    return <>
        <Link to={`/todos/${props.todo.id}`}>{props.todo.title}</Link>
    </>
}