import React from 'react'
import Service from './Service'

function Services() {
  return (
    <>
    <h4>How much I charge</h4>
            {/* Pricing Tables */}
            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
              <Service />
              <Service />
              <Service />
            </div>
    </>
  )
}

export default Services