import React from 'react'

function TechnicianCard(props) {
  const { name: technicianName, imgSrc } = props
  return (
    <div className="flex flex-col justify-center lg:px-14 lg:py-20 md:px-10 md:py-16 px-8 py-12 col-span-1">
        <img class="doctorImage lg:h-80 lg:w-80 md:h-56 md:w-56 h-40 w-40 my-auto mx-auto md:mb-0 mb-10" src={require(`../../images/${imgSrc}`)} alt="ClearView Vision Austin ATX, Austin Sunset Valley Eye Doctor"></img>
        <div className="my-auto">
            <h1 className="poppins font-bold doctorName text-center lg:text-3xl md:text-2xl text-xl mb-4 mt-0 lg:mt-6">
                {technicianName}
            </h1>
            <p className="poppins lg:text-xl md:text-lg text-center text-base doctorBio">
                Optometric Technician
            </p>
        </div>
    </div>
  )
}

export default TechnicianCard
