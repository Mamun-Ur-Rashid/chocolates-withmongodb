import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layOutes/Main'
import Home from './pages/Home'
import AddChocolates from './pages/AddChocolates'
import UpdateChocolate from './pages/UpdateChocolate'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chocolates')
      },
      {
        path:'/addChocolate',
        element:<AddChocolates></AddChocolates>
      },
      {
        path:'/updateChocolate/:_id',
        element:<UpdateChocolate></UpdateChocolate>,
        loader: ({params}) => fetch(`http://localhost:5000/chocolates/${params._id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
