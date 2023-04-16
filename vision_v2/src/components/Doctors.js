import React from 'react'

function Doctors() {
  return (
    <>

        <div class="doctors-header">
            Meet your doctors from Clearview Vision at Austin, TX!
        </div>

        <div class="container-fluid doctor">
            <div class="row doctor-row">
                <div class="col-lg-7 doctor-text">
                    <div class="text">
                        <h2>Dr. Micaela Lee</h2>
                        <p>Dr. Micaela Lee is a licensed Optometric Glaucoma specialist with a passion for giving back to the community. She received her Bachelor of Science in Chemistry from The University of Texas at Austin and her Doctorate of Optometry from the University of Houston College of Optometry. Dr. Lee is interested in pediatric optometry & ocular disease, including glaucoma and diabetic retinopathy. She is of Taiwanese descent and fluent in Spanish since she was born in Buenos Aires, Argentina. Dr. Lee enjoys being active, traveling, and spending time with family, friends, and her Labrador named Healy.</p>
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
                        <p>Dr. Micaela Lee is a licensed Optometric Glaucoma specialist with a passion for giving back to the community. She received her Bachelor of Science in Chemistry from The University of Texas at Austin and her Doctorate of Optometry from the University of Houston College of Optometry. Dr. Lee is interested in pediatric optometry & ocular disease, including glaucoma and diabetic retinopathy. She is of Taiwanese descent and fluent in Spanish since she was born in Buenos Aires, Argentina. Dr. Lee enjoys being active, traveling, and spending time with family, friends, and her Labrador named Healy.</p>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Doctors