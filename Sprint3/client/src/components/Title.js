import React from 'react'

function Title(props) {
    return (
    <div className="preIntro">
        <h1 className="mainTitle">{props.currentVideo.title}</h1>
 
      <div className="postTitle">     
            <div className="articleInfo">
              <div className="signature">{props.currentVideo.author}</div>
              <div className="date">{props.currentVideo.date}</div>
            </div>

            <div className="stats">
              <div className="views">{props.currentVideo.views}</div>
              <div className="likes">{props.currentVideo.likes}</div>
            </div>
        </div>
    </div>
    )
}


export default Title
