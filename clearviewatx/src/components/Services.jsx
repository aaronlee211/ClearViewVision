import React from 'react'
import '../css/Services.css'
import Border from './Border.jsx'
import phoneicon from '../images/phoneicon.svg'
import Spectra from '../images/Spectra.jpg'
import Aetna from '../images/aetna.png'
import Dropdown from '../images/dropdown.png'
import Ambetter from '../images/ambetter.png'

function Services() {
  
  const FAQ = [`It is recommended to have a comprehensive eye examination every year (12 months). However, the frequency may vary depending on your age, overall health, and any existing eye conditions. For certain individuals, such as those with diabetes or a family history of eye diseases, more frequent examinations may be necessary.
  During a comprehensive eye examination, your optometrist will perform various tests and evaluations to assess your overall eye health and detect any potential issues. The examination typically includes:
  1. Case History: Your optometrist will ask you about your medical history, including any existing eye conditions, medications you're taking, and any specific concerns you may have.
  2. Visual Acuity Test: This test measures how well you can see from a distance using an eye chart. It helps determine if you need corrective lenses.
  3. Refraction Test: This test determines your exact eyeglass prescription, helping to correct any refractive errors such as nearsightedness, farsightedness, or astigmatism.
  4. Eye Muscle and Pupil Response Test: This evaluation checks the movement and coordination of your eye muscles and examines how your pupils respond to light.
  5. Slit Lamp Examination: Using a specialized microscope, your optometrist examines the front structures of your eye, including the cornea, iris, and lens, to detect any abnormalities or signs of disease.
  6. Intraocular Pressure Measurement: This test, commonly known as the "puff of air" test, measures the pressure inside your eyes and helps screen for glaucoma.
  7. Dilated Eye Examination: Your optometrist may administer eye drops to dilate your pupils, allowing for a more thorough examination of the retina, optic nerve, and blood vessels at the back of your eye.
  8. Additional Tests: Depending on your individual needs, your optometrist may conduct additional tests, such as visual field testing, color vision testing, or imaging scans, to further assess your eye health.
  Remember, a comprehensive eye examination not only determines your visual acuity but also plays a crucial role in detecting early signs of eye diseases or conditions that may not yet be causing noticeable symptoms. Regular eye exams are essential for maintaining optimal eye health and ensuring early intervention if necessary. Your optometrist will provide personalized recommendations based on the findings of your examination.`]

  return (
    <>
      <div className="flex justify-center items-center mx-auto banner hind lg:h-56 lg:text-5xl md:h-36 md:text-3xl h-24 text-xl">
        Our Services
      </div>

      <div className="servicesBackground">
        {/* Comprehensive Eye Exams */}
        <div className="w-full h-fit">
          <div className="md:flex lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12">
            <img class="lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 my-auto mx-auto md:mb-0 mb-10" src={require("../images/ComprehensiveEyeExams.png")}></img>
            <div className="lg:pl-14 md:pl-10 pl-8 my-auto">
              <h1 className="serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-2">
                Comprehensive Eye Exams
              </h1>
              <p className="poppins lg:text-xl md:text-lg text-base">
                During an eye exam, your eye doctor will use a variety of tests and procedures to determine the clarity of your vision, assess your eye health, and check for any signs of eye disease or other conditions. <br /><br />
                Some of the tests and procedures that may be performed during an eye exam include: <br/>
                <div id="listcontainer">
                  <ul className="bulletList">
                    <li>A refraction test to determine your eyeglass prescription</li>
                    <li>A visual acuity test to measure the sharpness of your vision</li>
                    <li>A tonometry test to measure the pressure inside your eyes and screen for glaucoma</li>
                    <li>An eye muscle test to evaluate the movement and alignment of your eyes</li>
                    <li>A dilated eye exam to examine the retina and rule-out common eye conditions including diabetic retinopathy, glaucoma, and macular degeneration</li>
                  </ul>
                </div>
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
                Contact Lens Exams
              </h1>
              <p className="poppins lg:text-xl md:text-lg text-base">
              Your optometrist will measure the curvature and size of the patient's cornea and evaluate the health of the eye to determine the best type of contact lens for the patient. They will also consider the patient's lifestyle, occupation, and activities to determine the appropriate wearing schedule and replacement frequency for the lenses.
              The patient will be instructed on proper insertion and removal of the lenses, as well as proper care and maintenance.
              Prior to finalizing the prescription, a trial of contacts will be provided to the patient to evaluate the fit and comfort to ensure the patient satisfaction.
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
                Eye Disease Management
              </h1>
              <p className="poppins lg:text-xl md:text-lg text-base">
                The type of eye treatment recommended will depend on the underlying cause of the condition, as well as the patient's overall health and medical history. Some common eye conditions that may require treatment include:<br/>
                <ul className="bulletList">
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

        <Border />

        <div className='flex items-center justify-center servicesBackground mt-10 mb-10'>
          <p className='serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl'>Insurance</p>
        </div>
        <p className='poppins ml-14 lg:text-xl md:text-lg text-base'>We accept the following vision plans:</p>
        <div className='flex flex-row items-center justify-center gap-x-16 mt-10 pb-10'>
          <div>
            <img src={Spectra} className="temporarybg" />
          </div>
          <div>
            <img src={Aetna} className="temporarybg" />
          </div>
          <div>
            <img src={Ambetter} className="temporarybg" />
          </div>
        </div>
        <p className='poppins ml-14 lg:text-xl md:text-lg text-base mt-10'>We're here to help. If your vision plan is not listed, please contact us to discuss your coverage.</p>

        {/* Service Buttons */}
        <div className='flex flex-row items-center justify-center gap-x-16 mt-10 pb-10' id="buttonContainer">
          <div className='badge badge-outline badge-lg w-1/4 serviceButtons'>
              <p className='mr-2 ml-2 2xl:text-3xl'>Book an Appointment</p>
          </div>
          <div className='flex badge badge-outline badge-lg w-1/4 serviceButtons'>
            <p className='mr-2 ml-2 2xl:text-3xl'>Call Us 512-957-6001</p>
          </div>
        </div>

        <Border />
        <div className='pb-10 mt-10'>
          <div className='flex items-center justify-center servicesBackground mt-10 pb-10'>
              <p className='serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl'>
                Frequently Asked Questions (FAQ's)
              </p>
          </div>

          <div className='flex w-[60%] mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins lg:text-3xl md:text-2xl text-xl'>
            How often should I have an eye exam, and what is involved in a comprehensive eye examination?
            </p>
            <button><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
            <div>

            </div>
          </div>

          <div className='flex w-[60%] mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins lg:text-3xl md:text-2xl text-xl'>
                Are contacts compatible with my eyes?
            </p>
            <button><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
          </div>

          <div className='flex w-[60%] mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins lg:text-3xl md:text-2xl text-xl'>
                Are contacts compatible with my eyes?
            </p>
            <button><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
          </div>

          <div className='flex w-[60%] mx-auto faqBorder pb-10 justify-between'>
            <p className='serviceName poppins lg:text-3xl md:text-2xl text-xl'>
                Are contacts compatible with my eyes?
            </p>
            <button><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
