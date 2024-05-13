import React from 'react';
import '../component/venue.css';

export default function Venue() {
    return (
        <>
            <h1 className='heading'>Popular Places</h1>
            <meta charset="UTF-8" />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <title>CSS Cards with Overlay Hover Animation</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
            <link href="style.css" rel="stylesheet" />

            <div id="card-area">
                <div class="wrapper">
                    <div class="box-area">
                        <div class="box">
                            <img alt="" src="assets/grandHotel.jpg" />
                            <div class="overlay">
                                <h3>Grand Hotel</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <a href="#">Book Now</a>
                            </div>
                        </div>
                        <div class="box">
                            <img alt="" src="assets/hidewayheaven.jpg" />
                            <div class="overlay">
                                <h3>Hideway Heaven</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <a href="#">Book Now</a>
                            </div>
                        </div>
                        <div class="box">
                            <img alt="" src="assets/udaipurpalace.jpg" />
                            <div class="overlay">
                                <h3>Udaipur Palace</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <a href="#">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
