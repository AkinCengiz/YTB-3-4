import React from 'react'

function Home() {
  return (
    <div id="main-section" className='row'>
            <div id="sidebar" className="col-3 bg-danger" style={{height:"50vh"}}></div>
            <div id="content" className="col-9 bg-info" style={{height:"50vh"}}><h2>Home Page</h2></div>
        </div>
  )
}

export default Home