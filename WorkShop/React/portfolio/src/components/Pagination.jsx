import React from 'react'

function Pagination() {
  return (
    <React.Fragment>
        <div className="w3-center w3-padding-32">
            <div className="w3-bar">
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                «
              </a>
              <a href="#" className="w3-bar-item w3-black w3-button">
                1
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                2
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                3
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                4
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                »
              </a>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Pagination