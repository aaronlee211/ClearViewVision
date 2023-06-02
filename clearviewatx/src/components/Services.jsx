import React, { useState, useEffect } from 'react'
import '../css/Services.css'
import Border from './Border.jsx'
import phoneicon from '../images/phoneicon.svg'
import Spectra from '../images/Spectera.png'
import Aetna from '../images/aetna.png'
import Dropdown from '../images/dropdown.png'
import Ambetter from '../images/ambetter.png'
import Davis from '../images/davis.png'
import Superior from '../images/superior.png'
import $ from 'jquery';

function Services() {

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  $(document).ready(function() {
    $('.faqButton').click(function() {
      var button = $(this);
      if (!button.hasClass('animating')) {
        button.addClass('animating');
        var divElement = button.next('div');
        divElement.slideToggle('slow', function() {
          button.removeClass('animating');
        });
        divElement.toggleClass('faqHide');
      }
    });
  });

  return (
    <>
      <div className="flex justify-center items-center mx-auto banner hind lg:h-96 lg:text-7xl md:h-64 md:text-4xl h-40 text-2xl" id="services">
        Our Services
      </div>

      <div className="servicesBackground">

        {/* Comprehensive Eye Exams */}
        <div className="w-full h-fit">
          <div className="md:flex lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12 items-center">
            <img className="lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 md:py-auto md:px-auto md:mx-0 md:my-0 mx-auto my-auto md:mb-0 mb-10" src={require("../images/ComprehensiveEyeExams.png")}></img>
            <div className="lg:pl-14 md:pl-10 pl-8 my-auto">
              <h1 className="serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-2">
                Comprehensive Eye Exams
              </h1>
              <p className="poppins lg:text-xl md:text-lg text-base">
                During an eye exam, your eye doctor will use a variety of tests and procedures to determine the clarity of your vision, assess your eye health, and check for any signs of eye disease or other conditions. <br /><br />
                Some of the tests and procedures that may be performed during an eye exam include: <br />
                <div id="listcontainer">
                  <ul className="bulletList">
                    <li>A refraction test to determine your glasses prescription</li>
                    <li>A visual acuity test to measure the sharpness of your vision</li>
                    <li>A tonometry test to measure the pressure inside your eyes and screen for glaucoma</li>
                    <li>An extraocular muscle test to evaluate the movement and alignment of your eyes</li>
                    <li>A dilated eye exam to examine the retina and rule-out common eye conditions including diabetic retinopathy, glaucoma, and macular degeneration</li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Lens Fittings */}
        <div className="w-full h-fit">
          <div className="md:flex lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12 items-center">
            <img className="lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 md:py-auto md:px-auto md:mx-0 md:my-0 mx-auto my-auto md:mb-0 mb-10" src={require("../images/LensFittings.png")}></img>
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
          <div className="md:flex lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12 items-center">
            <img className="lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 md:py-auto md:px-auto md:mx-0 md:my-0 mx-auto my-auto md:mb-0 mb-10" src={require("../images/EyeTreatments.png")}></img>
            <div className="lg:pl-14 md:pl-10 pl-8 my-auto">
              <h1 className="serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl lg:mb-4 mb-2">
                Eye Disease Management
              </h1>
              <p className="poppins lg:text-xl md:text-lg text-base">
                The type of eye treatment recommended will depend on the underlying cause of the condition, as well as the patient's overall health and medical history. Some common eye conditions that may require treatment include:<br />
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

        <div className='flex items-center justify-center servicesBackground mt-10 mb-10' id="insurance">
          <p className='serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl'>Insurance</p>
        </div>
        <p className='poppins ml-14 lg:text-xl md:text-lg text-base'>We accept the following vision plans:</p>

        <div className='hidden sm:block'>
          <div className='grid grid-cols-3 items-center justify-between gap-x-16 mt-10 pb-10'>
            <div>
              <img src={Spectra} className="insurancebg m-auto h-[80%] w-auto" />
            </div>
            <div>
              <img src={Aetna} className="insurancebg m-auto" />
            </div>
            <div>
              <img src={Davis} className="insurancebg m-auto"/>
            </div>
          </div>
          <div className='grid grid-cols-2 items-center justify-between gap-x-16 mt-10 pb-10'>
              <div>
                <img src={Superior} className="insurancebg m-auto"/>
              </div>
              <div>
                <img src={Ambetter} className="insurancebg m-auto" />
              </div>
            </div>
          </div>

        <div className='block sm:hidden'>
          <div className='grid grid-cols-1 items-center justify-between gap-x-16 mt-10 pb-10'>
            <div>
              <img src={Spectra} className="insurancebg m-auto h-[80%] w-auto" />
            </div>
            <div>
              <img src={Aetna} className="insurancebg m-auto" />
            </div>
            <div>
              <img src={Davis} className="insurancebg m-auto"/>
            </div>
            <div>
                <img src={Superior} className="insurancebg m-auto"/>
              </div>
              <div>
                <img src={Ambetter} className="insurancebg m-auto mt-8" />
              </div>
          </div>
        </div>
        <p className='poppins ml-14 lg:text-xl md:text-lg text-base mt-10'>We're here to help. If your vision plan is not listed, please contact us to discuss your coverage.</p>

        {/* Service Buttons */}
        <div className='flex flex-row items-center justify-center gap-x-16 mt-10 pb-10' id="buttonContainer">
          <div className='badge badge-outline badge-lg w-3/5 md:w-1/3 lg:w-1/4 serviceButtons'>
            <p className='mr-2 ml-2 2xl:text-3xl'>Book an Appointment</p>
          </div>
          {/* <div className='flex badge badge-outline badge-lg w-1/4 serviceButtons'>
            <p className='mr-2 ml-2 2xl:text-3xl'>Call Us 512-957-6001</p>
          </div> */}
        </div>

        <Border />

        {/* FAQ Section */}

        <div className='pb-10 mt-10' id="FAQ">
          <div className='flex items-center justify-center servicesBackground mt-10 pb-10'>
            <p className='serviceName poppins font-bold lg:text-3xl md:text-2xl text-xl'>
              Frequently Asked Questions (FAQ's)
            </p>
          </div>

          <div className='flex w-[60%] grid grid-cols-6 mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins md:text-lg lg:text-2xl text-base col-start-1 col-end-6'>
              How often should I have an eye exam, and what is involved in a comprehensive eye examination?
            </p>
            <button className='justify-self-end faqButton'><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
            <div className='col-start-1 col-end-7 mt-10 faqHide poppins'>
              It is recommended to have a comprehensive eye examination every year (12 months). However, the frequency may vary depending on your age, overall health, and any existing eye conditions. For certain individuals, such as those with diabetes or a family history of eye diseases, more frequent examinations may be necessary.

              During a comprehensive eye examination, your optometrist will perform various tests and evaluations to assess your overall eye health and detect any potential issues. The examination typically includes:

              <ul className="bulletList">
                <br />
                <li>Case History: Your optometrist will ask you about your medical history, including any existing eye conditions, medications you're taking, and any specific concerns you may have.</li>
                <li>Visual Acuity Test: This test measures how well you can see from a distance using an eye chart. It helps determine if you need corrective lenses.</li>
                <li>Refraction Test: This test determines your exact eyeglass prescription, helping to correct any refractive errors such as nearsightedness, farsightedness, or astigmatism.</li>
                <li>Eye Muscle and Pupil Response Test: This evaluation checks the movement and coordination of your eye muscles and examines how your pupils respond to light.</li>
                <li>Slit Lamp Examination: Using a specialized microscope, your optometrist examines the front structures of your eye, including the cornea, iris, and lens, to detect any abnormalities or signs of disease.</li>
                <li>Intraocular Pressure Measurement: This test, commonly known as the "puff of air" test, measures the pressure inside your eyes and helps screen for glaucoma.</li>
                <li>Dilated Eye Examination: Your optometrist may administer eye drops to dilate your pupils, allowing for a more thorough examination of the retina, optic nerve, and blood vessels at the back of your eye.</li>
                <li>Additional Tests: Depending on your individual needs, your optometrist may conduct additional tests, such as visual field testing, color vision testing, or imaging scans, to further assess your eye health.</li>
              </ul>
              <br />
              Remember, a comprehensive eye examination not only determines your visual acuity but also plays a crucial role in detecting early signs of eye diseases or conditions that may not yet be causing noticeable symptoms. Regular eye exams are essential for maintaining optimal eye health and ensuring early intervention if necessary. Your optometrist will provide personalized recommendations based on the findings of your examination.
            </div>
          </div>


          <div className='flex w-[60%] grid grid-cols-6 mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins md:text-lg lg:text-2xl text-base col-start-1 col-end-6'>
              What are the signs and symptoms of dry eye syndrome?
            </p>
            <button className='justify-self-end faqButton'><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
            <div className='col-start-1 col-end-7 mt-10 faqHide poppins'>
              If you frequently experience a gritty, burning sensation in your eyes or notice redness and blurred vision, you might be suffering from dry eyes. Dry eye syndrome is a common condition that occurs when your eyes do not produce enough tears or when the tears evaporate too quickly. There are several causes of dry eyes, including aging, hormonal changes, environmental factors, certain medications, and underlying health conditions. Common symptoms include dryness, itching, sensitivity to light, and discomfort. If you suspect you have dry eyes, it is essential to visit an optometry practice for a comprehensive eye examination and personalized treatment options.
            </div>
          </div>

          <div className='flex w-[60%] grid grid-cols-6 mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins md:text-lg lg:text-2xl text-base col-start-1 col-end-6'>
              Are there any lifestyle changes or dietary recommendations that can improve my eye health?
            </p>
            <button className='justify-self-end faqButton'><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
            <div className='col-start-1 col-end-7 mt-10 faqHide poppins'>
              Absolutely! Making certain lifestyle changes and incorporating specific nutrients into your diet can help improve your overall eye health. Here are some recommendations:

              <ul className="numberList">
                <br />
                <li>Maintain a Balanced Diet: Consuming a well-balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can provide essential nutrients for your eyes. Include foods high in antioxidants such as leafy greens (spinach, kale), citrus fruits, berries, carrots, and bell peppers. These antioxidants help protect your eyes from damage caused by free radicals.</li>
                <li>Omega-3 Fatty Acids: Include foods rich in omega-3 fatty acids, such as fatty fish (salmon, tuna, sardines), walnuts, flaxseed, and chia seeds. Omega-3 fatty acids have been linked to a reduced risk of macular degeneration and dry eyes.</li>
                <li>Stay Hydrated: Drink an adequate amount of water throughout the day to prevent dehydration, which can lead to dry eyes. Proper hydration helps maintain the production of tears and keeps your eyes lubricated.</li>
                <li>Protect Your Eyes from UV Rays: Wear sunglasses that provide 100% UV protection when you're exposed to sunlight. Prolonged exposure to harmful UV rays can increase the risk of cataracts and other eye conditions.</li>
                <li>Take Regular Breaks from Screens: If you spend extended periods in front of digital screens, practice the 20-20-20 rule. Every 20 minutes, take a 20-second break to look at something 20 feet away. This helps reduce eye strain and fatigue.</li>
                <li>Maintain Proper Lighting: Ensure that the lighting in your workspace and living environment is suitable for your eyes. Avoid excessive glare or harsh lighting conditions that can strain your eyes.</li>
                <li>Quit Smoking: Smoking has been linked to an increased risk of cataracts, macular degeneration, and other eye conditions. Quitting smoking can significantly benefit your eye health.</li>
                <li>Manage Chronic Conditions: If you have chronic conditions like diabetes or hypertension, managing them effectively can help prevent or minimize eye-related complications.</li>
              </ul>
              <br />
              While these lifestyle changes can contribute to better eye health, it's important to remember that they should complement regular eye exams and any prescribed treatments or interventions from your optometrist. They can provide personalized recommendations based on your specific needs and help you maintain optimal eye health.
            </div>
          </div>

          <div className='flex w-[60%] grid grid-cols-6 mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins md:text-lg lg:text-2xl text-base col-start-1 col-end-6'>
              How can I prevent and manage eye allergies?
            </p>
            <button className='justify-self-end faqButton'><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
            <div className='col-start-1 col-end-7 mt-10 faqHide poppins'>
              If you're experiencing eye allergies, there are several steps you can take to prevent and manage them effectively. Here are some recommendations:
              <ul className="numberList">
                <br />
                <li>Avoid Allergens: Identify the specific allergens that trigger your eye allergies and take steps to minimize exposure. Common allergens include pollen, dust mites, pet dander, and mold. Stay updated on pollen forecasts and try to stay indoors during peak pollen times. Keep your home clean, use allergen-proof bedding covers, and regularly vacuum and dust to reduce allergens in your living environment.</li>
                <li>Use Artificial Tears: Over-the-counter artificial tears can help soothe and lubricate your eyes, providing relief from itching and dryness associated with eye allergies. Look for preservative-free options if you plan to use them frequently.</li>
                <li>Cold Compresses: Applying a cold compress or washcloth to your closed eyes can help alleviate itching and reduce swelling. It also helps constrict blood vessels and provides temporary relief.</li>
                <li>Avoid Rubbing Your Eyes: While it may be tempting, rubbing your eyes can worsen eye allergy symptoms and lead to further irritation. Instead, gently wash your face and eyes with cool water or use a saline solution to rinse out any allergens.</li>
                <li>Consider Allergy Medications: Over-the-counter oral antihistamines, such as cetirizine or loratadine, can help alleviate systemic allergy symptoms, including those affecting the eyes. However, it's best to consult with your doctor or pharmacist to determine the most suitable medication for you based on your medical history and any existing medications.</li>
                <li>Consult with an Optometrist: If your eye allergies are persistent or significantly impacting your daily life, it's recommended to seek professional help from an optometrist. They can evaluate your specific condition, provide targeted treatment options, and prescribe stronger allergy medications or eye drops if necessary.</li>
                <li>Wear Sunglasses: When venturing outdoors, wear sunglasses to protect your eyes from pollen and other airborne allergens. Choose sunglasses with wraparound frames for maximum coverage.</li>
              </ul>
              <br />
              Remember, prevention and management strategies may vary depending on the severity and nature of your eye allergies. An optometrist can provide personalized recommendations and guidance to help you effectively control your symptoms and improve your quality of life.
            </div>
          </div>

          <div className='flex w-[60%] grid grid-cols-6 mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins md:text-lg lg:text-2xl text-base col-start-1 col-end-6'>
              Can you explain the different types of refractive surgery, such as LASIK, and determine if I'm a suitable candidate?
            </p>
            <button className='justify-self-end faqButton'><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
            <div className='col-start-1 col-end-7 mt-10 faqHide poppins'>
              Refractive surgery, such as LASIK (Laser-Assisted in Situ Keratomileusis), is a popular procedure designed to correct common vision problems, including nearsightedness, farsightedness, and astigmatism. Here are some details about different types of refractive surgeries:
              <ul className="bulletList">
                <br />
                <li>LASIK: LASIK is a widely performed refractive surgery that uses a laser to reshape the cornea, the clear front part of the eye. During the procedure, a thin flap is created on the cornea, which is then lifted to allow the laser to reshape the underlying corneal tissue. The flap is then repositioned, and it naturally adheres back into place. LASIK is known for its quick recovery time and usually provides rapid improvement in vision.</li>
                <li>PRK (Photorefractive Keratectomy): PRK is another laser eye surgery that corrects vision by reshaping the cornea. However, unlike LASIK, it does not involve creating a corneal flap. Instead, the top layer of the cornea (epithelium) is gently removed before the laser treatment. The epithelium regenerates over time. PRK is often suitable for individuals with thinner corneas or those involved in certain occupations or sports that may pose a risk to the LASIK flap.</li>
                <li>SMILE (Small Incision Lenticule Extraction): SMILE is a newer refractive surgery technique that also corrects vision by reshaping the cornea. It uses a femtosecond laser to create a small, thin lenticule within the cornea, which is then removed through a small incision. SMILE requires a smaller incision compared to LASIK, potentially resulting in faster recovery and reduced risk of dry eyes.</li>
              </ul>
              <br />
              To determine if you are a suitable candidate for refractive surgery, it best to schedule a consultation with your optometrist whom will evaluate your eye health, assess your vision prescription stability, measure corneal thickness, and conduct various tests to determine your candidacy. Factors such as your age, overall eye health, and any underlying conditions will also be considered. They will discuss the different options available and recommend the most appropriate procedure for your specific needs.
              <br />
              <br />
              Keep in mind that not everyone is a suitable candidate for refractive surgery. Some conditions or factors, such as certain eye diseases, severe dry eyes, or thin corneas, may affect your eligibility. However, advances in technology have expanded the range of eligible candidates. Your eye care professional will provide personalized recommendations based on your unique circumstances and help you make an informed decision regarding refractive surgery.
            </div>
          </div>

          <div className='flex w-[60%] grid grid-cols-6 mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins md:text-lg lg:text-2xl text-base col-start-1 col-end-6'>
              What is the best way to protect my eyes from digital eye strain?
            </p>
            <button className='justify-self-end faqButton'><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
            <div className='col-start-1 col-end-7 mt-10 faqHide poppins'>
            Protecting your eyes from digital eye strain is crucial, especially with the increasing use of digital devices in our daily lives. Here are some effective strategies to minimize digital eye strain:
              <ul className="numberList">
                <br />
                <li>Follow the 20-20-20 Rule: Every 20 minutes, take a 20-second break and look at something about 20 feet away. This exercise helps relax the focusing muscles in your eyes and reduces eye fatigue.</li>
                <li>Ensure Proper Ergonomics: Position your computer screen at eye level or slightly below to encourage a natural and comfortable gaze. Adjust the screen brightness and contrast to a level that is easy on your eyes. Also, maintain a comfortable distance between your eyes and the screen (approximately 20-28 inches).</li>
                <li>Reduce Glare: Minimize glare on your screen by placing it perpendicular to any windows or bright light sources. Consider using an anti-glare screen protector or adjusting the display settings on your devices to reduce glare.</li>
                <li>Take Regular Breaks: Incorporate regular breaks throughout your screen time. Get up, stretch, and give your eyes a rest. Engage in activities that don't involve digital screens, such as going for a short walk or reading a printed book.</li>
                <li>Blink Frequently: When using digital devices, we tend to blink less frequently, leading to dry eyes and discomfort. Make a conscious effort to blink regularly to keep your eyes moist and prevent dryness.</li>
                <li>Adjust Display Settings: Optimize the display settings on your devices to reduce eye strain. Increase text size and contrast, enable dark mode or night mode, and adjust the color temperature to a warmer, more comfortable setting.</li>
                <li>Use Proper Lighting: Ensure that the lighting in your environment is neither too bright nor too dim. Avoid harsh overhead lighting or excessive contrast between your screen and the surrounding area.</li>
                <li>Consider Blue Light Filters: Blue light emitted by digital screens can contribute to eye strain. Consider using blue light filter applications or wearing blue light-blocking glasses to reduce the amount of blue light reaching your eyes.</li>
                <li>Keep Your Eyes Hydrated: Dry eyes are common with prolonged screen use. Use artificial tears or lubricating eye drops recommended by your optometrist to keep your eyes moist and alleviate dryness.</li>
                <li>Get Regular Eye Exams: Regular comprehensive eye exams are important to monitor your eye health and detect any underlying issues that may contribute to digital eye strain. Your optometrist can provide personalized recommendations and solutions tailored to your specific needs.</li>
              </ul>
              <br />
              By implementing these practices, you can significantly reduce digital eye strain and promote better eye health during prolonged screen use. Remember to listen to your body and address any discomfort or persistent symptoms by seeking professional help from an optometrist if needed.
            </div>
          </div>

          <div className='flex w-[60%] grid grid-cols-6 mx-auto faqBorder mb-10 pb-10 justify-between'>
            <p className='serviceName poppins md:text-lg lg:text-2xl text-base col-start-1 col-end-6'>
              Are contacts compatible with my eyes?
            </p>
            <button className='justify-self-end faqButton'><img src={Dropdown} className='w-[85%] invertdropdown'/></button>
            <div className='col-start-1 col-end-7 mt-10 faqHide poppins'>
              Determining if contact lenses are compatible with your eyes is an important consideration. Contact lenses can provide a convenient and effective alternative to glasses for vision correction. Here's what you need to consider:
              <ul className="bulletList">
                <br />
                <li>Eye Health: The first step is to ensure that your eyes are healthy and suitable for contact lens wear. An optometrist can evaluate your eye health and determine which contact lenses are the most viable option for you.</li>
                <li>Prescription: Contact lenses are available to correct various vision problems, including nearsightedness, farsightedness, astigmatism, and presbyopia. Your optometrist will perform a comprehensive eye examination to determine your precise prescription and recommend the most appropriate type of contact lenses for your specific needs.</li>
                <li>Lifestyle and Activities: Your lifestyle and daily activities play a role in determining the type of contact lenses that may be suitable for you. Factors such as the amount of time you spend on digital devices, participation in sports or physical activities, and preferences for daily disposables or extended wear lenses will be considered when discussing contact lens options.</li>
                <li>Comfort and Fit: Achieving a comfortable and proper fit is essential for successful contact lens wear. During a contact lens fitting appointment, your optometrist will measure the size and curvature of your eyes, assess tear film quality, and evaluate your eyelids to ensure an appropriate lens fit. They may also have you try different types and brands of lenses to find the most comfortable option for you.</li>
                <li>Follow-up and Care: Once you have been fitted with contact lenses, it's important to follow your optometrist's instructions regarding proper insertion, removal, cleaning, and disinfection techniques. Regular follow-up visits will allow your optometrist to monitor your eye health, assess the fit of your lenses, and make any necessary adjustments or recommendations.</li>
              </ul>
              <br />
              Remember, contact lenses are medical devices that require proper care and attention to maintain eye health. It's essential to follow your optometrist's guidelines and schedule regular check-ups to ensure the ongoing compatibility and safety of contact lenses for your eyes.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
