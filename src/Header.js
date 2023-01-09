import React from 'react'; 
import "./Header.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MessageIcon from "@material-ui/icons/Message";
import IconButton from "@material-ui/core/IconButton";
function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonOutlineIcon fontSize="large" className="header_icon"  />
        </IconButton>
         
        <img 
        className="header_logo"
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tinder-icon.png"
        alt=""
        />
        <IconButton>
           <MessageIcon fontSize="large" className="header_icon" />
        </IconButton>
       
    </div>
  );  
}

export default Header;