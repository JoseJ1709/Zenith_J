import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import '../src/css/index.scss'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './routes/Signup.jsx'
import Login from './routes/Login.jsx'
import NavBar from './routes/NavBar.jsx'
import Footer from './routes/Footer.jsx'
import Settings from './routes/Settings'

const router= createBrowserRouter([
  {
  path:"/",
  element: <Login/>
  },
  {
  path:"/Signup",
  element: <Signup/>
  },
  {
    path: "/SobreNosotros",
    element: <NavBar/>
  },
  {
    path: "/Footer",
    element : <Footer/>
  },
  {
    path:"/Settings",
    element: <Settings/>
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)
