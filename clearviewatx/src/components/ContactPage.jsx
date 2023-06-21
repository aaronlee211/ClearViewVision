import { React, useMemo, useEffect, useState } from 'react'
import ContactForm from './ContactForm.jsx'
import Border from './Border.jsx'
import '../css/ContactPage.css'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { ExternalLink } from 'react-external-link';
import '../css/contactForm.css';
import emailjs from '@emailjs/browser';

function ContactPage() {
  // Emailjs Setup
    const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState('Submit');
  // const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const infoEmail = "info.clearviewatx@gmail.com"

  const serviceID = "service_rmytzck";
  const templateID = "template_jz94lrg";
  const apiKey = "vztP_uDMW7yJvbdeP";

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: `${formDetails.firstName} ${formDetails.lastName}`,
        to_name: "ClearView Vision",
        from_email: formDetails.email,
        to_email: infoEmail,
        message: `Message: ${formDetails.message} \n\n Email: ${formDetails.email} \n Phone Number: ${formDetails.phoneNumber}`
      },
      apiKey
    )
    .then(() => {
      // setButtonText("Sending Message...");
      setFormDetails(formInitialDetails);
      alert('Thank you for contacting us, we will respond as soon as possible!');
      // setButtonText("Submit");
    }, (error) => {
      console.log(error);
      alert('Sorry! Something went wrong, please try again!')
    })
  }

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  })

  if (!isLoaded) return <div>Loading ...</div>

  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center mx-auto banner hind lg:h-96 lg:text-7xl md:h-64 md:text-4xl h-40 text-2xl" id="topsection">
        Contact Us
      </div>

      {/* Contact Form */}
      <div className="h-fit w-full py-4" id="contactForm">
        <h2 className="poppins text-xl my-10 text-center">We look forward to receiving your thoughts and feedback.</h2>
        <form onSubmit={handleSubmit}>
          <div className="flexbox text-center my-6">
            <input className="contactFormInputs lg:w-1/4 md:w-1/3 w-[40%] h-12 mx-[2%] ps-4" type="text" placeholder="First Name*" name="firstName" required
            value={formDetails.firstName} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
            <input className="contactFormInputs lg:w-1/4 md:w-1/3 w-[40%] h-12 mx-[2%] ps-4" type="text" placeholder="Last Name*" name="lastName" required
            value={formDetails.lastName} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flexbox text-center my-6">
            <input className="contactFormInputs lg:w-1/4 md:w-1/3 w-[40%] h-12 mx-[2%] ps-4" type="text" placeholder="Email*" name="email" required
            value={formDetails.email} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
            <input className="contactFormInputs lg:w-1/4 md:w-1/3 w-[40%] h-12 mx-[2%] ps-4" type="text" placeholder="Phone Number*" name="phoneNumber"
            value={formDetails.phoneNumber} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flexbox text-center my-6">
            <textarea className="contactFormInputs lg:w-[54%] md:w-[70.67%] w-[84%] ps-4 pt-4" rows="8" type="text" placeholder="Message*" name="message"
            value={formDetails.message} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flex justify-center mb-10">
            <button id="contactFormSubmit" className="py-2 px-12 rounded-full mx-auto mt-10 poppins" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>

      {/* Border */}
      <Border />

      {/* Information + Google Maps API */}
      <div className="grid md:flex h-fit w-full pb-10" id="informationBackground">
        <div className="h-fit w-full text-center md:w-1/2 py-14 px-0 md:px-32">
          <h1 className="poppins informationTitle">Address</h1>
          <p className="poppins informationContent">
            <ExternalLink className="footerText link link-hover informationContent"
              href="https://www.google.com/maps/place/ClearView+Vision/@30.2328086,-97.8277622,17z/data=!3m1!4b1!4m6!3m5!1s0x865b4be7ae82f12b:0x7f59bfd2b85a9872!8m2!3d30.2328041!4d-97.8228859!16s%2Fg%2F11khzp9p6g">
              5017 W US 290 Hwy Service Road, Austin, TX 78735 <br /> (located at Walmart)
            </ExternalLink></p>
          <br />
          <h1 className="poppins informationTitle">Contact</h1>
          <p className="poppins informationContent">512-957-6001<br />info.clearviewatx@gmail.com</p>
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
        <div className="mapcontainer mr-0 md:mr-10">
          <Map />
        </div>
      </div>

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
