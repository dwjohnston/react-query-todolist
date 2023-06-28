import { useAddCompletedTodo } from "../../../hooks/rqHooks";

export function TopBar() {


    const addTodo = useAddCompletedTodo();

    return <button onClick={() => addTodo.mutate()}>add todo</button>

}