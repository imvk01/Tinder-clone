import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";



function TinderCards() {
  const [people,setPeople] = useState([
    {
        name: 'Narender Modi',
        url: 
        "https://www.thestatesman.com/wp-content/uploads/2022/09/03_Merged.jpg",
    },
    {
       name: 'Mark Zuckerberg',
       url: 
       "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRYT8u3wI9a6gaceV_KUz_4LyVnTep01eLQa3xBOSBl-uBjA54InsDoUIZBiim-VGpQv2ad2OTZQ5hDa6U",
    },
    {
        name: 'Ritesh Agarwal',
        url: 
        "https://ecellmlnc.com/wp-content/uploads/2021/08/Ritesh_Agarwal-OYO.jpeg",
    },
    {
       name: 'Rocky',
       url:
       "https://im.rediff.com/movies/2022/apr/14kgf4.jpg",
    },
]);

const Swiped=(direction ,nameToDelete)=>{
  console.log("removing:" +nameToDelete);
};
const OutOfFrame=(name) =>{
  console.log(name + "left the screen: ");
};

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir)=>Swiped(dir, person.name)}
            onCardLeftScreen={() =>OutOfFrame(person.name)}
          >
            <div
            style={{backgroundImage: `url(${person.url})`}}
            className="card"
            >
              <h3>{person.name}</h3>
              </div>
            </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;