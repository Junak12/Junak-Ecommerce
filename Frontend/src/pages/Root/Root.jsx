import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'

const Root = () => {
  return (
    <div className='bg-slate-100 px-20  py-3'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root
