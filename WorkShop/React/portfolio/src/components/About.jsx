import React from 'react'
import Skills from './Skills'
import DownloadButton from './DownloadButton'
import Services from './Services'

function About() {
  return (
    <>
    <div
            className="w3-container w3-padding-large"
            style={{ marginBottom: 32 }}
          >
            <h4>
              <b>About Me</b>
            </h4>
            <p>
              Just me, myself and I, exploring the universe of unknownment. I
              have a heart of love and an interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
              lectus vitae, ultricies congue gravida diam non fringilla.
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
            <hr />
            <Skills/>
            <DownloadButton />
            <hr />
            <Services />
          </div>
    </>
  )
}

export default About