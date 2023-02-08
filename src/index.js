import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import List from './Components/List'
import Profile from './Components/Profile'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <h1>error</h1>,
    children: [
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
    ],
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
