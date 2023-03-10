import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import loader from './Loaders/index'
import HeroList from './Components/HeroList'
import HeroProfile from './Components/HeroProfile'
import './index.css'
import ErrorPage from './Components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    loader,
    errorElement: <ErrorPage />,
  },
  {
    path: 'heroes',
    element: <HeroList />,
    children: [
      {
        path: ':heroId',
        element: <HeroProfile />,
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
