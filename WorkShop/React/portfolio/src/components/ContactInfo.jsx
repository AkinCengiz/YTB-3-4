import React from 'react'
import ContactInfoItem from './ContactInfoItem'

export default function ContactInfo() {
  return (
    <>
    <div
              className="w3-row-padding w3-center w3-padding-24"
              style={{ margin: "0 -16px" }}
            >
              <ContactInfoItem />
              <ContactInfoItem />
              <ContactInfoItem />
            </div>
    </>
  )
}
