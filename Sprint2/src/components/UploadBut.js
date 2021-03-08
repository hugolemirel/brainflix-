import React from 'react';
import {Link} from "react-router-dom";

function UploadBut() {
    return (
        <Link to="/Upload" style={{ textDecoration: 'none' }}>
        <button className="uploadBtn">
            <span><img src="../../assets/Icons/PNG/Icon-upload.png" alt="Upload Icon"/></span>UPLOAD</button>
        </Link>
    );
}

export default UploadBut;

