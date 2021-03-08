import React from 'react';
import {Link} from "react-router-dom";

function VideoUpldForm(props) {

    return (

        <div>
            <form class="upldForm" >
                <div className="input1">
                    <h4>TITLE YOUR VIDEO</h4>
                    <input type="text" name="video-title" placeholder="Add a title to your video" />
                </div>

                <div className="input2">
                    <h4>ADD A VIDEO DESCRIPTION</h4>
                    <textarea class="textarea" rows="5" name="message" placeholder="Add a description of your video."></textarea>
                </div> 


                <div className="publish">

                <button className="publishBtn">PUBLISH</button>
                <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="cancel">CANCEL</span>
            </Link>
                </div>
            </form>

        </div>
      );
    }

export default VideoUpldForm;
