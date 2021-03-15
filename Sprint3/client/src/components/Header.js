import React from 'react';
import '../styles/upload-styles.scss'
import Logo from './Logo';
import Search from './Search';
import UploadBut from './UploadBut';
import Avatar from './Avatar'
import {Link} from "react-router-dom";


function Header() {
    return (
      <header className="header"> 
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <Search />
        <div className="uploadBlock">
        <UploadBut />
        <Avatar />
        </div>
    </header> 
    );
  }

  export default Header;