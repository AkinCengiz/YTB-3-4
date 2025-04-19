import React from 'react'
import Sidebar from '../components/Sidebar'
import ListContainer from '../components/ListContainer'
import About from '../components/About'

function HomePage() {
  return (
    <div className='container row'>
      <ListContainer />
      <Sidebar />
      <About />
    </div>
  )
}

export default HomePage