import React from 'react'

function Service() {
  return (
    <>
        <div className="w3-third w3-margin-bottom">
                <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Photography</li>
                  <li className="w3-padding-16">1GB Storage</li>
                  <li className="w3-padding-16">Mail Support</li>
                  <li className="w3-padding-16">
                    <h2>$ 10</h2>
                    <span className="w3-opacity">per month</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </div>
    </>
  )
}

export default Service