import React from 'react'

function Video() {
    return (
        <div>
            <video width="100%" height="100%" controls poster="./assets/Images/video-list-0.jpg">
                <source src="./assets/Video/BrainStation Sample Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Video


