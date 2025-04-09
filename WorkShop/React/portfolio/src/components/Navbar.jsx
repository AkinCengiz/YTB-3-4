import React from 'react'
import NavImage from './NavImage'
import NavMenu from './NavMenu'
import NavSocial from './NavSocial'

export default function Navbar() {
  return (
    <>
        <nav
          className="w3-sidebar w3-collapse w3-white w3-animate-left"
          style={{ zIndex: 3, width: 300 }}
          id="mySidebar"
        >
          <br />
          <NavImage />
          <NavMenu />
          <NavSocial />
        </nav>
    </>
  )
}
