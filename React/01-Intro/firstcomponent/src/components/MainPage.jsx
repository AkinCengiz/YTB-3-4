import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

export default function MainPage() {
  return (
    <>
    <div id="main" className='row p-3'>
        <Sidebar/>
        <Content />
      </div>
    </>
  )
}
