import { useAddCompletedTodo } from "../hooks/todos";

export function TopBar() {


    const addTodo = useAddCompletedTodo();

    return <button onClick={() => addTodo.mutate()}>add todo</button>

}