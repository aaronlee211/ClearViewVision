import React from 'react'
import '../css/Home.css'
import Reviews from './Reviews.jsx';
import { useEffect } from 'react'
import ReviewsReact from './ReviewsReact.jsx';
import ContactForm from './ContactForm.jsx';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {

  // Setting cards equal heights
  useEffect(() => {
    const setEqualCardHeights = () => {
      const cards = document.querySelectorAll(".card p");
      let maxHeight = 0;

      Array.from(cards).forEach((card) => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });

      Array.from(cards).forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });

      console.log(`${maxHeight}`)
    };

    window.addEventListener('load', setEqualCardHeights);
    // Make sure to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', setEqualCardHeights);
    };
  }, []);


  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center mx-auto banner hind lg:h-96 lg:text-7xl md:h-64 md:text-4xl h-40 text-2xl">
        Our vision is your vision.
      </div>

      {/* Our Mission */}
      <div className="flex h-fit" id="mission">
        <div className="lg:mx-14 lg:my-20 md:mx-10 md:my-16 mx-8 my-12">
          <h1 className="poppins lg:text-3xl lg:mb-4 md:text-2xl mb-2 text-xl text-center" id="missionTitle">Our Mission</h1>
          <p className="text-left poppins lg:text-2xl md:text-xl text-lg" id="missionContent">
            Here at ClearView Vision in Austin, TX, we are committed to providing comprehensive and personalized eye care to patients of all ages.
            With a team of experienced and friendly optometrists, ClearView Vision offers a range of services, including routine eye exams, contact lens fittings, consultation for eye diseases, infections, and surgical co-managements.
          </p>
        </div>
      </div>

      {/* Optometry Banner */}
      <div className="relative">
        <div className="flex mx-auto h-fit" id="optometryPartner">
          <div className="ml-auto lg:mr-16 lg:my-48 mx-auto my-10" id="optometryPartnerText">
            <h1 className="poppins 2xl:text-4xl lg:text-3xl md:text-2xl text-2xl lg:leading-10 md:leading-6 leading-4">
              Clear Vision, Bright Futures: <br /><br />
              Your Trusted Optometry Partner
            </h1>
          </div>
        </div>
        <div className="lg:absolute lg:top-[10%] lg:left-[5%] relative top-0 left-0">
          <img className="object-cover lg:h-1/3 lg:w-1/2 md:w-screen" src={require("../images/eyeglasses.png")} alt=''></img>
        </div>
      </div>

      {/* Cards of Services */}

      <div className="lg:flex lg:justify-between md:mx-auto h-fit lg:py-20 py-14" id="serviceCards">

        <div className="lg:w-1/3 w-full flex items-center my-4">
          <div className="max-w-md h-fit rounded overflow-hidden shadow-lg mx-auto">
            <div className="card px-6 py-4">
              <div className="font-bold poppins cardTitle text-center text-2xl mb-4">Eye Exams</div>
              <p className="poppins cardText text-center">
                Get a comprehensive eye exam from our experienced optometrists to prolong your vision and eye health.
              </p>
              <NavLink className="navlink-header mx-auto w-[75%] my-4" to="services">
                <button className="py-2 px-4 w-full rounded-full cardButtons">
                  View Services
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 w-full flex items-center my-4">
          <div className="max-w-md max-h-64 rounded overflow-hidden shadow-lg mx-auto">
            <div className="card px-6 py-4">
              <div className="font-bold poppins cardTitle text-center text-2xl mb-4">Appointments</div>
              <p className="poppins cardText text-center">
                Schedule an appointment for an eye exam, contact lens fitting, or other eye care services at our convenient location.
              </p>
              <NavLink className="navlink-header mx-auto w-[75%] my-4" to="book">
                <button className="py-2 px-4 w-full rounded-full cardButtons">
                  Book an Appointment
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 w-full flex items-center my-4">
          <div className="max-w-md max-h-64 rounded overflow-hidden shadow-lg mx-auto">
            <div className="card px-6 py-4">
              <div className="font-bold poppins cardTitle text-center text-2xl mb-4">Insurance</div>
              <p className="poppins cardText text-center">
                We accept most insurance plans to help you save money on your eye care services.
                Contact us to learn more about your coverage options.
              </p>
              <NavLink className="navlink-header mx-auto w-[75%] my-4" to="services">
                <button className="py-2 px-4 w-full rounded-full cardButtons">
                  View Insurance Plans
                </button>
              </NavLink>
            </div>
          </div>
        </div>

      </div>

      <div className='relative'>
        <div className="relative flex w-1/2 2xl:h-128" id="visitUs">
          <div className="my-auto ml-auto 2xl:mr-16" id="visitUsText">
            <h1 className="poppins 2xl:text-4xl leading-10">
              Visit Us!
            </h1>
            <p>Address:</p>
            <p>5017 W US 290 Hwy Service Road, Austin, TX 78735</p>
            <p>{"(located inside Walmart)"}</p>
            <br />
            <p>Phone:</p>
            <p>512-957-6001</p>
            <br />
            <p>Hours:<br />
              Sunday:  Closed<br />
              Monday:  Closed<br />
              Tuesday:  10AM - 6PM<br />
              Wednesday:  10AM - 6PM<br />
              Thursday:  10AM - 6PM<br />
              Friday:  10AM - 6PM<br />
              Saturday:  10AM - 6PM<br />
            </p>
          </div>
        </div>
        <div className="absolute w-full" id="visitUsImage">
          <img className="object-cover 2xl:h-128 2xl:w-[48rem]" src={require("../images/headerbg3.jpg")} alt=''></img>
        </div>
      </div>


      {/* Reviews Carousel */}
      <ReviewsReact />

      {/* Contact Us Form */}
      <ContactForm />
    </>
  )
}

export default Home
