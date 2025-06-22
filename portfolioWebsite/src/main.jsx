import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Service from './components/Services/Service.jsx'
import Project from './components/Projects/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
       {
        path: '',
        element: <Hero />
       },
       {
        path: '/aboutme',
        element:<About/>
       },
       {
        path: '/services',
        element:<Service/>
       },
       {
        path:'/projects',
        element:<Project/>
       },
       {
        path: '/contact',
        element:<Contact/>
       },
       {
        path: '/Footer',
        element:<Footer/>
       }
       
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
