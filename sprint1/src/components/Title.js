import React from 'react'

function Title(props) {
    return (
    <div className="preIntro">
        <h1 className="mainTitle"> {props.mainVideo.title}</h1>
 
 <div className="postTitle">     
      <div className="articleInfo">
        <div className="signature">By Red Cow</div>
        <div className="date">12/18/2019</div>
      </div>

      <div className="stats">
        <div className="views">1,001,023</div>
        <div className="likes">110,985</div>
      </div>
  </div>

    </div>
    )
}


export default Title
