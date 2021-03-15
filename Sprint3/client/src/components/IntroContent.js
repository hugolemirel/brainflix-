import React from 'react'

function IntroContent(props) {
    return (
        <p className="intro">{props.currentVideo.descript}</p>
    );
}

export default IntroContent
