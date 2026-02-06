import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import { DataProvider } from '../../contexts/DataContext'
import { ProductProvider } from '../../contexts/ProductContext'
import Scroll from '../Scroll/Scroll'
import { CartProvider } from '../../contexts/CartContext'
import { AuthProvider } from '../../contexts/AuthContext'

const Root = () => {
  return (
    <div className="bg-slate-100 px-20  py-3">
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <DataProvider>
              <div className="fixed top-0 left-0 w-full z-50 md:px-20">
                <Navbar />
              </div>
              <Scroll />
              <Outlet />
              <Footer />
            </DataProvider>
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default Root
