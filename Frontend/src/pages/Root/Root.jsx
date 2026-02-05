import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import { DataProvider } from '../../contexts/DataContext'
import { ProductProvider } from '../../contexts/ProductContext'
import Scroll from '../Scroll/Scroll'

const Root = () => {
  return (
    <div className="bg-slate-100 px-20  py-3">
      <ProductProvider>
        <DataProvider>
          <div className="fixed top-0 left-0 w-full z-50 px-20">
            <Navbar />
          </div>
          <Scroll/>
          <Outlet />
          <Footer />
        </DataProvider>
      </ProductProvider>
    </div>
  );
}

export default Root
