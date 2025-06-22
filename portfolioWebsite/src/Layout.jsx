import React from 'react'

import Navbar from './components/Navbar/Navbar'
import{Outlet} from 'react-router-dom'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Services/Service'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    

      
    </div>
  )
}

export default Layout
