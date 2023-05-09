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
        
        <div class="max-w-sm rounded overflow-hidden shadow-lg my-28 mx-32">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 poppins">Card Title 1</div>
            <p class="text-gray-700 text-base poppins">Card description goes here.</p>
          </div>
          <div class="px-6 py-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg my-28 mx-32">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 poppins">Card Title 1</div>
            <p class="text-gray-700 text-base poppins">Card description goes here.</p>
          </div>
          <div class="px-6 py-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg my-28 mx-32">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 poppins">Card Title 1</div>
            <p class="text-gray-700 text-base poppins">Card description goes here.</p>
          </div>
          <div class="px-6 py-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
