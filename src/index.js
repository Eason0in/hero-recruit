import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import List from './Components/List'
import Profile from './Components/Profile'
import './index.scss'
import loader from './Loaders/index'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: '/',
    loader,
    errorElement: <h1>error</h1>,
  },
  {
    path: 'heroes',
    element: <List />,
    children: [
      {
        path: ':heroId',
        element: <Profile />,
      },
    ],
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
