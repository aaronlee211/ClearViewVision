import React from 'react'
import '../css/Services.css'
import phoneicon from '../images/phoneicon.svg'

function Services() {
  return (
    <>
      <div className="flex justify-center items-center mx-auto lg:h-56 hind 2xl:text-5xl banner">
            Our Services
      </div>

      <div id="servicesBackground">
        {/* Comprehensive Eye Exams */}
        <div className="w-full h-fit">
          <div className="md:flex lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12">
            <img class="lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 my-auto mx-auto md:mb-0 mb-10" src={require("../images/ComprehensiveEyeExams.png")}></img>
            <div className="lg:pl-14 md:pl-10 pl-8 my-auto">
              <h1 className="serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-2">
                Comprehensive Eye Exams
              </h1>
              <p className="poppins lg:text-xl md:text-lg text-base">
                During an eye exam, your eye doctor will use a variety of tests and procedures to determine the clarity of your vision, assess your eye health, and check for any signs of eye disease or other issues. <br /><br />
                Some of the tests and procedures that may be performed during an eye exam include: <br/>
                <ul>
                  <li>A visual acuity test to measure the sharpness of your vision</li>
                  <li>A refraction test to determine your eyeglass prescription</li>
                  <li>An eye muscle test to evaluate the movement and alignment of your eyes</li>
                  <li>A dilated eye exam to examine the retina and other internal structures of your eyes</li>
                  <li>A tonometry test to measure the pressure inside your eyes and screen for glaucoma</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        {/* Contact Lens Fittings */}
        <div className="w-full h-fit">
          <div className="md:flex lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12">
            <img class="lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 my-auto mx-auto md:mb-0 mb-10" src={require("../images/LensFittings.png")}></img>
            <div className="lg:pl-14 md:pl-10 pl-8 my-auto">
              <h1 className="serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-2">
                Comprehensive Eye Exams
              </h1>
              <p className="poppins lg:text-xl md:text-lg text-base">
              The optometrist will measure the curvature and size of the patient's cornea and evaluate the health of the eye to determine the best type of contact lens for the patient. They will also consider the patient's lifestyle, occupation, and activities to determine the appropriate wearing schedule and replacement frequency for the lenses.
              After selecting the appropriate type of contact lens, the optometrist will provide a trial pair for the patient to wear and evaluate the fit and comfort. The patient will be instructed on proper insertion and removal of the lenses, as well as proper care and maintenance.
              If the trial lenses fit well and provide clear and comfortable vision, the optometrist will finalize the prescription and order the lenses. The patient will then have a follow-up appointment to ensure that the lenses are still fitting properly and to address any concerns or issues.
              </p>
            </div>
          </div>
        </div>
        {/* Eye Treatments */}
        <div className="w-full h-fit">
          <div className="md:flex lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12">
            <img class="lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 my-auto mx-auto md:mb-0 mb-10" src={require("../images/EyeTreatments.png")}></img>
            <div className="lg:pl-14 md:pl-10 pl-8 my-auto">
              <h1 className="serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-2">
                Comprehensive Eye Exams
              </h1>
              <p className="poppins lg:text-xl md:text-lg text-base">
                The type of eye treatment recommended will depend on the underlying cause of the condition, as well as the patient's overall health and medical history. Some common eye conditions that may require treatment include:<br/>
                <ul id="numberList">
                  <li>Refractive errors such as nearsightedness, farsightedness, and astigmatism.</li>
                  <li>Eye infections, such as conjunctivitis or corneal ulcers.</li>
                  <li>Glaucoma, a group of eye conditions that can damage the optic nerve and cause vision loss.</li>
                  <li>Cataracts, a clouding of the lens of the eye that can cause blurry vision.</li>
                  <li>Age-related macular degeneration, a progressive condition that can cause vision loss in the central part of the retina.</li>
                  <li>Dry eye syndrome, a condition that can cause discomfort, irritation, and vision problems.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Service Buttons */}
        <div className='flex flex-row items-center justify-center gap-x-16' id="buttonContainer">
          <div className='badge badge-outline badge-lg serviceButtons'>
              <p className='mr-2 ml-2 2xl:text-3xl'>Book an Appointment</p>
          </div>
          <div className='flex badge badge-outline badge-lg serviceButtons'>
            <img id="svgicon" src={phoneicon}/>
            <p className='mr-2 ml-2 2xl:text-3xl'>Call Us XXX-XXX-XXXX</p>
          </div>
        </div>

      </div>
      <div>
        Insurance
      </div>
    </>
  )
}

export default Services
