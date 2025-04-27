import React from 'react'
import ReactDOM from "react-dom"
import "./Offcanvas.css"

const Backdrop = ({hideCartHandle}) => {
    return(
        <div className='backdrop' onClick={hideCartHandle}></div>
    )
}

const OffcanvasOverlay = ({children}) => {
    return(
        <div className='offcanvas'>
        <div className="content">
            {children}
        </div>
    </div>
    )
}


const Offcanvas = ({children, hideCartHandle}) => {

    const portal =document.getElementById("overlays");
  return (
    <>
    {
        ReactDOM.createPortal(<Backdrop hideCartHandle={hideCartHandle} />,portal)
    }
    {
        ReactDOM.createPortal(<OffcanvasOverlay>{children}</OffcanvasOverlay>,portal)
    }
    </>
  )
}

export default Offcanvas