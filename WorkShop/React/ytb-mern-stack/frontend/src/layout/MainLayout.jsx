import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Sidebar from '../components/Layout/Sidebar'

const MainLayout = ({children}) => {
  return (
    <>
        <Header/>
        <Sidebar />
            {children}
        <Footer/>
    </>
  )
}

export default MainLayout