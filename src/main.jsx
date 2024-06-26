import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './Component/Users.jsx';
import Update from './Component/Update.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App></App>,
  },
  {
    path : "/users",
    element : <Users></Users>,
    loader : () => fetch("http://localhost:3000/users")
  },
  {
    path : "/update/:id",
    element : <Update></Update>,
    loader : ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
