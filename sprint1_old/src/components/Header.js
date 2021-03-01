import Logo from './Logo.js';
import Search from './Search.js';
import Upload from './Upload.js';
import Avatar from './Avatar.js';

function Header() {
    return(
      <header className="header"> 
        <Logo />
        <Search />
        <div className="uploadBlock">
        <Upload />
        <Avatar />
        </div>
    </header> 
    );
  }

  

  export default Header;