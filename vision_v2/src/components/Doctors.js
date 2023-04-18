import React from 'react'

function Doctors() {
  return (
    <>
        <div class='container-fluid doctors-header'>
            <div class='col-lg-8 doctors-desc'>
                <h5>
                    Our experienced team of optometrists is dedicated to providing you with the highest level of eye care and vision correction services. 
                    We specialize in comprehensive eye exams to evaluate your overall eye health and provide accurate prescriptions for glasses and contact lenses. 
                    Our optometrists are highly trained and experienced in the latest technologies and techniques in the field of optometry. 
                    We are committed to staying up-to-date with the latest research and advancements in eye care to ensure that you receive the best possible treatment. 
                    Thank you for choosing our optometry practice. We look forward to serving you and your family for all of your eye care needs.
                </h5>
            </div>
            <img class="doctor-header-image" src={require("../images/headerbg3.jpg")}></img>
        </div>
        <div class="container-fluid doctor">
            <div class="row doctor-row">
                <div class="col-lg-7 doctor-text">
                    <div class="text">
                        <h2>Dr. Micaela Lee</h2>
                        <h6>
                            Dr. Micaela Lee is a licensed Optometric Glaucoma specialist with a passion for giving back to the community. 
                            She received her Bachelor of Science in Chemistry from The University of Texas at Austin and her Doctorate of Optometry from the University of Houston College of Optometry. 
                            Dr. Lee is interested in pediatric optometry & ocular disease, including glaucoma and diabetic retinopathy. 
                            She is of Taiwanese descent and fluent in Spanish since she was born in Buenos Aires, Argentina. 
                            Dr. Lee enjoys being active, traveling, and spending time with family, friends, and her Labrador named Healy.
                        </h6>
                    </div>
                </div>
                <div class="col-lg-2 doctor-image right">
                    <img class="circle-image" src={require("../images/DrMicaelaLee.jpg")}></img>
                </div>
                <div class="col-lg-3 transparent"></div>
            </div>
        </div>

        <div class="container-fluid doctor">
            <div class="row doctor-row">
                <div class="col-lg-3 transparent"></div>
                <div class="col-lg-2 doctor-image left">
                    <img class="circle-image" src={require("../images/DrMicaelaLee.jpg")}></img>
                </div>
                <div class="col-lg-7 doctor-text">
                    <div class="text">
                        <h2>Dr. Micaela Lee</h2>
                        <h6>Dr. Micaela Lee is a licensed Optometric Glaucoma specialist with a passion for giving back to the community. She received her Bachelor of Science in Chemistry from The University of Texas at Austin and her Doctorate of Optometry from the University of Houston College of Optometry. Dr. Lee is interested in pediatric optometry & ocular disease, including glaucoma and diabetic retinopathy. She is of Taiwanese descent and fluent in Spanish since she was born in Buenos Aires, Argentina. Dr. Lee enjoys being active, traveling, and spending time with family, friends, and her Labrador named Healy.</h6>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Doctors