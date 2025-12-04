import React from 'react'
import Navbar from '../Components/Navber'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
const Mainmother = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Mainmother