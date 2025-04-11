import React from 'react'

function Header() {
  return (
    <header className='d-flex justify-content-between bg-secondary'>
            <div id="logo" >
                <h1 className='p-3'>Logo</h1>
            </div>
            <nav id="header-menu" className='navbar'>
                <ul style={{display:'flex', listStyle:"none", justifyContent : "space-around", alignItems:"center"}}>
                    <li className='p-3' >Ana Sayfa</li>
                    <li className='p-3'>Hakkımızda</li>
                    <li className='p-3'>İletişim</li>
                </ul>
            </nav>
        </header>
  )
}

export default Header