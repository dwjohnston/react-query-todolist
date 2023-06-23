import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TodoList } from './pages/TodosAll.tsx'
import { TodoItem } from './components/TodoItem.tsx'
import { TodoSingle } from './pages/TodoSingle.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TodoListComplete } from './pages/TodosComplete.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>

      <p>
        <Link to="todos-all"> All todos</Link>
      </p>
      <p>
        <Link to="todos-complete"> Complete Todos</Link>

      </p>
      <hr />
      <Outlet />
    </div>,

    children: [
      {
        path: "todos/:todoId",
        element: <TodoSingle />,

      },
      {
        path: "todos-all",
        element: <TodoList />
      },
      {
        path: "todos-complete",
        element: <TodoListComplete />
      },
      {
        path: "todos-incomplete",
        element: <div>Hello world!</div>,
      },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
