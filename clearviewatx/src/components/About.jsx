import React from 'react'
import '../css/About.css'
import ReviewsReact from './ReviewsReact.jsx';

function About() {
  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center mx-auto banner hind lg:h-56 lg:text-5xl md:h-36 md:text-3xl h-24 text-xl">
        About Clearview Vision
      </div>

      {/* Our Team */}
      <div className="flex h-fit" id="ourTeam">
        <div className="lg:mx-14 lg:my-20 md:mx-10 md:my-16 mx-8 my-12">
          <h1 className="poppins lg:text-3xl lg:mb-4 md:text-2xl mb-2 text-xl text-center" id="ourTeamTitle">Our Team</h1>
          <p className="text-left poppins lg:text-2xl md:text-xl text-lg" id="ourTeamContent">
            Our experienced team of optometrists is dedicated to providing you with the highest level of eye care and vision correction services. 
            We specialize in comprehensive eye exams to evaluate your overall eye health and provide accurate prescriptions for glasses and contact lenses. 
            Our optometrists are highly trained and experienced in the latest technologies and techniques in the field of optometry. 
            We are committed to staying up-to-date with the latest research and advancements in eye care to ensure that you receive the best possible treatment. 
            Thank you for choosing our optometry practice. 
            We look forward to serving you and your family for all of your eye care needs.
          </p>
        </div>
      </div>

      {/* Doctors */}

      {/* Reviews Carousel */}
      <ReviewsReact />
    </>
  )
}

export default About