import React from 'react'

 function Sidevideos(props) {
    return (
        <div className="videoList">
            <h3>NEXT VIDEO</h3>

            <div className="videoItemCntr">
                <div className="vidThumbCntnr">{props.sidevideos.image}</div>
                <div className="videoInfo">Become A Travel Pro In One Easy Lesson…
                <p>Scotty Cranmer</p></div>
            </div>

            <div className="videoItemCntr">
                <div className="vidThumbCntnr"><img src="./assets/images/video-list-2.jpg" alt="video thumbnail" /></div>
                <div className="videoInfo">Les Houches The Hidden Gem Of The…
                <p>Scotty Cranmer</p></div>
            </div>

            <div className="videoItemCntr">
                <div className="vidThumbCntnr"><img src="./assets/images/video-list-3.jpg" alt="video thumbnail" /></div>
                <div className="videoInfo">Travel Health Useful Medical Information…
                <p>Scotty Cranmer</p></div>
            </div>

            <div className="videoItemCntr">
                <div className="vidThumbCntnr"><img src="./assets/images/video-list-4.jpg" alt="video thumbnail" /></div>
                <div className="videoInfo">Cheap Airline Tickets Great Ways To Save
                <p>Emily Harper</p></div>
            </div>

            <div className="videoItemCntr">
                <div className="vidThumbCntnr"><img src="./assets/images/video-list-5.jpg" alt="video thumbnail"/></div>
                <div className="videoInfo">Take A Romantic Break In A Boutique Hotel
                <p>Ethan Owen</p></div>
            </div>

            <div className="videoItemCntr">
                <div className="vidThumbCntnr"><img src="./assets/images/video-list-6.jpg" alt="video thumbnail" /></div>
                <div className="videoInfo">Choose The Perfect Accommodations
                <p>Lydia Perez</p></div>
            </div>

            <div className="videoItemCntr">
                <div className="vidThumbCntnr"><img src="./assets/images/video-list-7.jpg" alt="video thumbnail" /></div>
                <div className="videoInfo">Cruising Destination Ideas
                <p>Timothy Austin</p></div>
            </div>

            <div className="videoItemCntr">
                <div className="vidThumbCntnr"><img src="./assets/images/video-list-8.jpg" alt="video thumbnail" /></div>
                <div className="videoInfo">Train Travel On Track For Safety
                <p>Scotty Cranmer</p></div>
            </div>

        </div>

    )
}

export default Sidevideos
