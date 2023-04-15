import React from 'react'

function Review() {
    return (
        <>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Person 1</h1>
                                <p>Dr. Lee is an outstanding optometrist who truly cares about the health and well-being of her patients. From the moment you walk into her office, you feel welcomed and at ease. Dr. Lee takes the time to listen to your concerns and provides a thorough eye examination that leaves you feeling confident in her diagnosis and treatment plan. I highly recommend Dr. Lee to anyone in need of an optometrist!</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="10000">
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Person 2</h1>
                                <p>I recently had the pleasure of visiting Dr. Lee for an eye exam, and I couldn't be happier with the level of care I received. Dr. Lee was professional, knowledgeable, and friendly throughout my appointment. She answered all of my questions and concerns and provided excellent recommendations for improving my eye health. I would highly recommend Dr. Lee to anyone seeking a top-notch optometrist!</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="10000">
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Person 3</h1>
                                <p>Dr. Lee is an exceptional optometrist who provides excellent care to her patients. She has a warm and welcoming personality that instantly puts you at ease. During my appointment, she took the time to thoroughly examine my eyes and explain any issues she found. She provided me with a detailed treatment plan and followed up with me to ensure my eyes were healing properly. I highly recommend Dr. Lee to anyone seeking a caring and skilled optometrist!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <p><a class="btn btn-lg btn-primary" href="#">Leave a Review</a></p>
        </>
    )
}

export default Review