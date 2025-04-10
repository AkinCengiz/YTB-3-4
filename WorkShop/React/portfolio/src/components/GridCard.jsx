import React from 'react'

function GridCard({ portfoy }) {
  return (
    <>
    <div className="w3-third w3-container w3-margin-bottom">
              <img
                src={portfoy?.image}
                alt={portfoy?.title}
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>{portfoy?.title}</b>
                </p>
                <p>
                  {portfoy?.description}
                </p>
              </div>
            </div>
    </>
  )
}

export default GridCard