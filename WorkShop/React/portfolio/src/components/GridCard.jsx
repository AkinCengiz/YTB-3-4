import React from 'react'

function GridCard() {
  return (
    <>
    <div className="w3-third w3-container w3-margin-bottom">
              <img
                src="/assets/images/mountains.jpg"
                alt="Norway"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Lorem Ipsum</b>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
    </>
  )
}

export default GridCard