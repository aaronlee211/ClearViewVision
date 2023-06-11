import {React, useMemo } from 'react'
import '../css/Booking.css'
import Border from './Border'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

function Booking() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  })

  if (!isLoaded) return <div>Loading ...</div>

  return (
    <>
        {/* Banner */}
        <div className="flex justify-center items-center mx-auto banner hind lg:h-96 lg:text-7xl md:h-64 md:text-4xl h-40 text-2xl" id="topsection">
            Schedule An Appointment
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 mx-10 md:grid-cols-2 mb-10 mt-10'>
            <div
            class="w-[80%] md:w-[60%] m-auto block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Book your Appointment
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Click here to navigate to our booking portal!
                </p>
                <div className='w-full flex justify-center'>
                    <button type="button" class="w-fit px-5 py-2.5 m-auto bg-[#B5D699] hover:bg-[#014548] hover:text-white ease-in-out duration-500 font-medium rounded-lg text-sm text-center">Schedule Here!</button>
                </div>
            </div>
            <div
            class="w-[80%] md:w-[60%] m-auto mt-10 md:mt-0 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Have Questions?
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Feel free to contact us at by phone at 517-957-6001 or leave us a message on our contact page!
                </p>
                <div className='w-full flex justify-center'>
                    <button type="button" class="w-fit px-5 py-2.5 m-auto bg-[#B5D699] hover:bg-[#014548] hover:text-white ease-in-out duration-500 font-medium rounded-lg text-sm text-center">Contact Us!</button>
                </div>
            </div>
        </div>
        <Border />
        {/* Information + Google Maps API */}
        <div className="m-auto w-[80%] booking-map mb-10 mt-10">
            <Map className="" />
        </div>

    </>
  )
}

function Map() {
  const center = useMemo(() => ({ lat: 30.232531448374512, lng: -97.82296529141712 }), [])

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName='mapcontainer'>
      <MarkerF position={center} />
    </GoogleMap>
  )
}

export default Booking
