import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Battle from './components/Battle.jsx'
import { RouterProvider } from 'react-router-dom'
import PokeInfo from './components/PokeInfo.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/battle",
    element:<Battle/>
  },
  {
    path:'/pokemon/:name',
    element:<PokeInfo/>
  }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  ,
)
