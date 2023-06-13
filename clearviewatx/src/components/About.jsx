import React, { useEffect } from 'react'
import '../css/About.css'
import ReviewsReact from './ReviewsReact.jsx';
import Border from './Border.jsx'

function About() {

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      {/* Banner */}
      <div className="flex justify-center items-center mx-auto banner hind lg:h-96 lg:text-7xl md:h-64 md:text-4xl h-40 text-2xl" id="ClearView">
        About ClearView Vision
      </div>

      {/* Our Team */}
      <div className="flex h-fit" id="ourTeam">
        <div className="lg:mx-14 lg:my-20 md:mx-10 md:my-16 mx-8 my-12">
          <h1 className="poppins lg:text-3xl lg:mb-4 md:text-2xl mb-2 text-xl text-center" id="ourTeamTitle">Our Team</h1>
          <p className="text-center md:text-left poppins lg:text-xl md:text-lg text-md" id="ourTeamContent">
            Our experienced team of optometrists is dedicated to providing you with the highest level of eye care and vision correction services.
            We specialize in comprehensive eye exams to evaluate your overall eye health and provide accurate prescriptions for glasses and contact lenses.
            Our optometrists are highly trained and experienced in the latest technologies and techniques in the field of optometry.
            We are committed to staying up-to-date with the latest research and advancements in eye care to ensure that you receive the best possible treatment.
            Thank you for choosing our optometry practice.
            We look forward to serving you and your family for all of your eye care needs.
          </p>
        </div>
      </div>

      {/* Border */}
      <Border/>

      {/* Doctors */}
      <div className="w-full h-fit" id="doctorBackground">
        <div className="md:flex lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12">
          <img class="doctorImage lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 my-auto mx-auto md:mb-0 mb-10" src={require("../images/DrMicaelaLee2.jpg")}></img>
          <div className="lg:pl-14 md:pl-10 pl-8 my-auto">
            <h1 className="poppins font-bold doctorName lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-2">
              Dr. Micaela Lee
            </h1>
            <p className="poppins lg:text-xl md:text-lg text-base doctorBio">
              Dr. Micaela Lee is a licensed Optometric Glaucoma specialist with a passion for giving back to the community.
              She received her Bachelor of Science in Chemistry from The University of Texas at Austin and her Doctorate of Optometry from the University of Houston College of Optometry.
              Dr. Lee is interested in pediatric optometry & ocular disease, including glaucoma and diabetic retinopathy.
              She is of Taiwanese descent and fluent in Spanish since she was born in Buenos Aires, Argentina.
              Dr. Lee enjoys being active, traveling, and spending time with family, friends, and her Labrador named Healy.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Carousel */}
      <ReviewsReact />
    </>
  )
}

export default About
