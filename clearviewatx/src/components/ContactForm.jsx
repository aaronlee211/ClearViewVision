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
  // const [buttonText, setButtonText] = useState('Submit');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const testEmail = "leekevinm@utexas.edu";
  const infoEmail = "info@clearviewatx.com"

  const serviceID = "service_fwwshsl";
  const templateID = "template_swjw8d5";
  const apiKey = "vztP_uDMW7yJvbdeP";

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: `${formDetails.firstName} ${formDetails.lastName}`,
        to_name: "Info @ Clearview Vision",
        from_email: formDetails.email,
        to_email: testEmail,
        message: formDetails.message
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
      alert('Sorry!  Something went wrong!')
    })
  }
  return (
    <>
      <div className="h-fit w-full py-4" id="contactForm">
        <h1 className="poppins text-3xl my-10 text-center">Contact Us!</h1>
        <h2 className="poppins text-xl my-10 text-center">We look forward to receiving your thoughts and feedback.</h2>
        <form onSubmit={handleSubmit}>
          <div className="flexbox text-center my-6">
            <input className="contactFormInputs w-1/4 h-12 mx-[2%] ps-4" type="text" placeholder="First Name*" name="firstName" required 
            onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
            <input className="contactFormInputs w-1/4 h-12 mx-[2%] ps-4" type="text" placeholder="Last Name*" name="lastName" required
            onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flexbox text-center my-6">
            <input className="contactFormInputs w-1/4 h-12 mx-[2%] ps-4" type="text" placeholder="Email*" name="email" required
            onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
            <input className="contactFormInputs w-1/4 h-12 mx-[2%] ps-4" type="text" placeholder="Phone Number" name="phoneNumber"
            onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flexbox text-center my-6">
            <textarea className="contactFormInputs w-[54%] ps-4 pt-4" rows="8" type="text" placeholder="Message*" name="message"
            onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flex justify-center mb-10">
            <button id="contactFormSubmit" className="py-2 px-12 rounded-full mx-auto mt-10 poppins" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm