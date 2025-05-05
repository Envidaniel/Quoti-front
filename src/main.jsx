import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Landing from './page/Landing'

const route = createBrowserRouter([
  {
    path : '/',
    element : <Landing/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={route}>

     </RouterProvider>
  </React.StrictMode>,
)
