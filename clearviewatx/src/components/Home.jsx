import React from 'react'
import '../css/Home.css'

function Home() {
  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center mx-auto lg:h-96 hind 2xl:text-7xl banner">
        Our vision is your vision.
      </div>

      {/* Our Mission */}
      <div className="text-center mx-auto 2xl:px-16 2xl:py-12" id="mission">
        <h1 className="poppins 2xl:text-3xl 2xl:mb-4" id="missionTitle">Our Mission</h1>
        <p className="text-left poppins 2xl:text-2xl" id="missionContent">
          Here at ClearView Vision in Austin, TX, we are committed to providing comprehensive and personalized eye care to patients of all ages.
          With a team of experienced and friendly optometrists, ClearView Vision offers a range of services, including routine eye exams, contact lens fittings, consultation for eye diseases, infections, and surgical co-managements.</p>
      </div>

      {/* Optometry Banner */}
      <div className="relative">
        <div className="flex mx-auto 2xl:h-128" id="optometryPartner">
          <div className="my-auto ml-auto 2xl:mr-16" id="optometryPartnerText">
            <h1 className="poppins 2xl:text-4xl leading-10">
              Clear Vision, Bright Futures: <br /><br />
              Your Trusted Optometry Partner
            </h1>
          </div>
        </div>
        <div className="absolute top-20 left-28">
          <img className="object-cover 2xl:h-128 2xl:w-[48rem]" src={require("../images/eyeglasses.png")} alt=''></img>
        </div>
      </div>

      {/* Cards of Services */}
      <div className="flex justify-between mx-auto 2xl:h-128" id="serviceCards">
        <div className="sm:w-1/3 flex items-center">
          <div class="max-w-md max-h-64 rounded overflow-hidden shadow-lg mx-auto">
            <div class="px-6 py-4">
              <div class="font-bold poppins cardTitle text-center text-2xl mb-4">Eye Exams</div>
              <p class="poppins cardText text-center">
                Get a comprehensive eye exam from our experienced optometrists to prolong your vision and eye health.
              </p>
            </div>
            <div class="px-6 py-4 flex justify-center">
              <button class="py-2 px-4 rounded-full cardButtons">
                View Services
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-1/3 flex items-center">
          <div class="max-w-md max-h-64 rounded overflow-hidden shadow-lg mx-auto">
            <div class="px-6 py-4">
              <div class="font-bold poppins cardTitle text-center text-2xl mb-4">Appointments</div>
              <p class="poppins cardText text-center">
                Schedule an appointment for an eye exam, contact lens fitting, or other eye care services at our convenient location.
              </p>
            </div>
            <div class="px-6 py-4 flex justify-center">
              <button class="py-2 px-4 rounded-full cardButtons flex items-end">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-1/3 flex items-center">
          <div class="max-w-md max-h-64 rounded overflow-hidden shadow-lg mx-auto">
            <div class="px-6 py-4">
              <div class="font-bold poppins cardTitle text-center text-2xl mb-4">Insurance</div>
              <p class="poppins cardText text-center">
                We accept most insurance plans to help you save money on your eye care services.
                Contact us to learn more about your coverage options.
              </p>
            </div>
            <div class="px-6 py-4 flex justify-center relative">
              <button class="py-2 px-4 rounded-full cardButtons">
                View Insurance Plans
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
