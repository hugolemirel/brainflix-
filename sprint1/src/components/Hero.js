import React from 'react'


function Hero() {
    return (
        <div className="hero">
            <div className="videoPlayer">
                <img src="../assets/Images/video-list-0.jpg" />
                {/* <Video /> */}

<div className="ctrlPlateCtnr">
                <div className="ctrlPlate">
                    <div className="videoIcons videoIcons__left">
                        <img src="./assets/Icons/PNG/Icon-play.png" />
                    </div>
                    <div className="videoIcons videoIcons__center">
                    <img src="./assets/Icons/PNG/Icon-scrubber-control.png" />
                    </div>
                    <div className="videoIcons videoIcons__right">
                    <img src="./assets/Icons/PNG/Icon-fullscreen.png" />
                    <img src="./assets/Icons/PNG/Icon-volume.png" />
                    </div>
                </div>
</div>

            </div> 
        </div>
    );
}

export default Hero

