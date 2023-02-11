import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import loader from './Loaders/index'
import HeroList from './Components/HeroList'
import Profile from './Components/Profile'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    loader,
    errorElement: <h1>error</h1>,
  },
  {
    path: 'heroes',
    element: <HeroList />,
    children: [
      {
        path: ':heroId',
        element: <Profile />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
