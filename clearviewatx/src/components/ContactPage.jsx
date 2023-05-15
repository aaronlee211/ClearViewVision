import React from 'react'
import ContactForm from './ContactForm.jsx'

function ContactPage() {
  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center mx-auto banner hind lg:h-56 lg:text-5xl md:h-36 md:text-3xl h-24 text-xl">
        Contact Us
      </div>

      {/* Contact Form */}
      <ContactForm/>

      {/* Border */}
      <div className="w-full h-px mx-auto" id="separatingBorderBackground">
        <div className="w-[88%] h-px mx-auto" id="separatingBorder" />
      </div>

      {/* Border */}
      <div className="w-full h-px mx-auto" id="separatingBorderBackground">
        <div className="w-[88%] h-px mx-auto" id="separatingBorder" />
      </div>

    </>
  )
}

export default ContactPage