import React from 'react'
import ContactForm from './ContactForm.jsx'
import Border from './Border.jsx'
import '../css/ContactPage.css'

function ContactPage() {
  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center mx-auto banner hind lg:h-56 lg:text-5xl md:h-36 md:text-3xl h-24 text-xl">
        Contact Us
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Border */}
      <Border />

      {/* Information + Google Maps API */}
      <div className="flex h-fit w-full" id="informationBackground">
        <div className="h-fit w-1/2 py-14 px-32">
          <h1 className="poppins informationTitle">Address</h1>
          <p className="poppins informationContent">5017 W US 290 Hwy, Austin, TX 78735<br/>(located inside Walmart)</p>
          <br />
          <h1 className="poppins informationTitle">Contact</h1>
          <p className="poppins informationContent">512-957-6001<br/>info@clearviewatx.com</p>
          <br />
          <h1 className="poppins informationTitle">Hours: </h1>
          <p className="poppins informationContent">
            Sunday:  Closed<br/>
            Monday:  Closed<br/>
            Tuesday:  10AM - 6PM<br/>
            Wednesday:  10AM - 6PM<br/>
            Thursday:  10AM - 6PM<br/>
            Friday:  10AM - 6PM<br/>
            Saturday:  10AM - 6PM
          </p>
        </div>
        <div className="h-fit w-1/2 py-auto px-32">
          This is the Google Maps.
        </div>
      </div>

      {/* Border */}
      <Border />

    </>
  )
}

export default ContactPage
