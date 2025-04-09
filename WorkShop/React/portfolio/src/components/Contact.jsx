import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <>
    <div className="w3-container w3-padding-large w3-grey">
            <h4 id="contact">
              <b>Contact Me</b>
            </h4>
            <ContactInfo />
            <hr className="w3-opacity" />
            <ContactForm />
          </div>
    </>
  )
}

export default Contact