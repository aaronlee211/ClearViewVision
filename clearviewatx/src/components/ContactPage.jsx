import { React, useMemo } from 'react'
import ContactForm from './ContactForm.jsx'
import Border from './Border.jsx'
import '../css/ContactPage.css'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { ExternalLink } from 'react-external-link';

function ContactPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  })

  if (!isLoaded) return <div>Loading ...</div>

  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center mx-auto banner hind lg:h-96 lg:text-7xl md:h-64 md:text-4xl h-40 text-2xl">
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
          <p className="poppins informationContent">
            <ExternalLink className="footerText link link-hover informationContent"
              href="https://www.google.com/maps/place/ClearView+Vision/@30.2328086,-97.8277622,17z/data=!3m1!4b1!4m6!3m5!1s0x865b4be7ae82f12b:0x7f59bfd2b85a9872!8m2!3d30.2328041!4d-97.8228859!16s%2Fg%2F11khzp9p6g">
              5017 W US 290 Hwy Service Road, Austin, TX 78735 <br /> (located at Walmart)
            </ExternalLink></p>
          <br />
          <h1 className="poppins informationTitle">Contact</h1>
          <p className="poppins informationContent">512-957-6001<br />info@clearviewatx.com</p>
          <br />
          <h1 className="poppins informationTitle">Hours: </h1>
          <p className="poppins informationContent">
            Sunday:  Closed<br />
            Monday:  Closed<br />
            Tuesday:  10AM - 6PM<br />
            Wednesday:  10AM - 6PM<br />
            Thursday:  10AM - 6PM<br />
            Friday:  10AM - 6PM<br />
            Saturday:  10AM - 6PM
          </p>
        </div>
        <div className="h-fit w-1/2 py-auto px-32">
          <Map />
        </div>
      </div>

      {/* Border */}
      <Border />

    </>
  )
}

function Map() {
  const center = useMemo(() => ({ lat: 30.232531448374512, lng: -97.82296529141712 }), [])

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName='mapcontainer'>
      <MarkerF position={center} />
    </GoogleMap>
  )
}

export default ContactPage
