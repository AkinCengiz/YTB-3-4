import React from 'react'
import Skills from './Skills'
import DownloadButton from './DownloadButton'
import Services from './Services'

function About({info, skills}) {
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
              {
                info?.description
              }
            </p>
            <hr />
            <Skills skills={skills}/>
            <DownloadButton />
            <hr />
            <Services />
          </div>
    </>
  )
}

export default About