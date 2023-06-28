import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { TodoList } from './pages/ReactQuery/TodosAll.tsx'
import { TodoSingle } from './pages/ReactQuery/TodoSingle.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TodoListComplete } from './pages/ReactQuery/TodosComplete.tsx'
import { TopBar } from './pages/ReactQuery/components/TopBar.tsx'
import { RTKQTodoSingle } from './pages/RTKQuery/TodoSingle.tsx'
import { RTKQTodoList } from './pages/RTKQuery/TodosAll.tsx'
import { RTKQTodoListComplete } from './pages/RTKQuery/TodosComplete.tsx'
import { Provider } from 'react-redux'
import { store } from './reduxStore.ts'
const router = createBrowserRouter([
  {
    path: "/rq",
    element: <div>

      <TopBar />

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

  {
    path: "/rtkq",
    element: <div>

      <TopBar />

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
        element: <RTKQTodoSingle />,

      },
      {
        path: "todos-all",
        element: <RTKQTodoList />
      },
      {
        path: "todos-complete",
        element: <RTKQTodoListComplete />
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
