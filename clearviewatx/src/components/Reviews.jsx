import React from 'react'
import '../css/Reviews.css'
import { useState } from 'react';
import { ExternalLink } from 'react-external-link';

function Reviews() {
  const [activeTag, setActiveTag] = useState(1);

  const handleClick = (value) => {
    setActiveTag(value);
  };
  return (
    <>
      <div id="carouselSection" className="w-full h-fit py-20">
        <h1 id="customerReviews" className="text-3xl poppins text-center">Customer Reviews</h1>
        <div id="carouselReviews" className="carousel w-full h-fit my-10">
          <div id="slide1" className="carousel-item relative w-full">
            <p className="poppins mx-auto w-3/4">
              Dr. Lee is an outstanding optometrist who truly cares about the health and well-being of her patients.
              From the moment you walk into her office, you feel welcomed and at ease.
              Dr. Lee takes the time to listen to your concerns and provides a thorough eye examination that leaves you feeling confident in her diagnosis and treatment plan.
              I highly recommend Dr. Lee to anyone in need of an optometrist!
            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide3" className="btn btn-square btn-reviews h-screen w-[12%]" onClick={() => { handleClick(3) }}>❮</a>
              <a href="#slide2" className="btn btn-square btn-reviews h-screen w-[12%]" onClick={() => { handleClick(2) }}>❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <p className="poppins mx-auto w-3/4">
              I was very impressed with the level of care I received during my eye exam at Clearview Vision.
              The optometrist was patient and attentive, and made sure to address all of my concerns.
              They used the latest technology to perform the exam, which gave me peace of mind that my vision was being accurately measured.
              The staff was also very friendly and helpful, which made the entire experience a pleasure.
              I would definitely recommend Clearview Vision to anyone in need of an eye exam.
            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide1" className="btn btn-square btn-reviews h-screen w-[12%]" onClick={() => { handleClick(1) }}>❮</a>
              <a href="#slide3" className="btn btn-square btn-reviews h-screen w-[12%]" onClick={() => { handleClick(3) }}>❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <p className="poppins mx-auto w-3/4">
              I had a great experience at Clearview Vision's optometrist eye exam.
              The staff was friendly and welcoming, and the optometrist was extremely knowledgeable and professional.
              They took the time to thoroughly explain every step of the exam and answer all of my questions.
              The exam itself was very comprehensive and I felt confident that my vision was accurately assessed.
              I would highly recommend Clearview Vision for anyone in need of an eye exam.
            </p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
              <a href="#slide2" className="btn btn-square btn-reviews h-screen w-[12%]" onClick={() => { handleClick(2) }}>❮</a>
              <a href="#slide1" className="btn btn-square btn-reviews h-screen w-[12%]" onClick={() => { handleClick(1) }}>❯</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-[10%] mx-auto" id="carouselIndicators">
          <a href="#slide1" className={`btn btn-circle btn-xs mx-1 ${activeTag === 1 ? 'reviewActive' : ''}`} onClick={() => { handleClick(1) }}>.</a>
          <a href="#slide2" className={`btn btn-circle btn-xs mx-1 ${activeTag === 2 ? 'reviewActive' : ''}`} onClick={() => { handleClick(2) }}>.</a>
          <a href="#slide3" className={`btn btn-circle btn-xs mx-1 ${activeTag === 3 ? 'reviewActive' : ''}`} onClick={() => { handleClick(3) }}>.</a>
        </div>
        <div className="flex justify-center">
          <ExternalLink href="https://search.google.com/local/writereview?placeid=ChIJK_GCrudLW4YRcphauNK_WX8">
            <button className="py-2 px-12 rounded-full cardButtons mx-auto mt-10 poppins">Leave a Review</button>
          </ExternalLink>
        </div>
      </div>

    </>
  )
}

export default Reviews