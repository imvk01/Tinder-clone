import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

 function Swipe_Bro(){
  return (
    <div className="swipeButton">
           <IconButton className="swipeButtons__replay">
               <ReplayIcon fontSize="large" />
           </IconButton>

           <IconButton className="swipeButtons__cross">
               <CloseIcon fontSize="large" />
           </IconButton>
           
           <IconButton className="swipeButtons__star">
               <StarRateIcon fontSize="large" />
           </IconButton>

           <IconButton className="swipeButtons__heart">
               <FavoriteIcon fontSize="large" />
           </IconButton>
           
           <IconButton className="swipeButtons__current">
               <FlashOnIcon fontSize="large" />
           </IconButton>

    </div>
  );
};

export default Swipe_Bro;