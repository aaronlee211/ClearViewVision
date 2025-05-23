import React from 'react';
import '../css/contactForm.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);

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
      alert('Thank you for contacting us, we will respond as soon as possible!');
      setFormDetails(formInitialDetails);
      // setButtonText("Submit");
    }, (error) => {
      console.log(error);
      alert('Sorry! Something went wrong, please try again!')
    })
  }
  return (
    <>
      <div className="h-fit w-full py-4" id="contactForm">
        <h1 className="poppins text-3xl my-10 text-center">Contact Us!</h1>
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
            <button
              id="contactFormSubmit"
              className="py-2 px-12 rounded-full mx-auto mt-10 poppins"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
          <div className="text-center mx-auto max-w-2xl px-4">
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>
              Disclaimer: By providing your contact information and submitting the form, you consent to receive 
              communications from ClearView Vision. Message and data rates may apply. Reply STOP to opt-out. 
              See our{' '}
              <a
                href="http://www.clearviewatx.com/privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007bff', textDecoration: 'none' }}
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
