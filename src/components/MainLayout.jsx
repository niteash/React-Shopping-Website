import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductSection from './ProductSection'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />
   <Toaster toastOptions={{
    // Define default options
    className: '',
    duration: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 2000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }} />
   </>
  )
}

export default MainLayout