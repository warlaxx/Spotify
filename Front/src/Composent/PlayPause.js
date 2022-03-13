import React, { useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const Playpause = (props) => {
  const [play, setplay] = useState(false);
  const [visible, setvisible] = useState(true);

  return (
    <div onClick = { () => {
      console.log("oui")
      var audie = document.getElementById("myAudio");
      if (audie.paused == false) {
      console.log('pause');
      audie.pause();
      } else {
      console.log('play');
      audie.play();
      }
      }}>
      <AiFillPlayCircle
        style={{
          cursor: "pointer",
          position: "absolute",
          color: "green",
          fontSize: `${play ? "45px" : "40px"}`,
          visibility: `${visible ? "hidden" : "visible"}`,
        }}
        onMouseEnter={() => setplay(true)}
        onMouseLeave={() => setplay(false)}
        onClick={() => setvisible(true)}
      />
      <AiFillPauseCircle
        style={{
          cursor: "pointer",
          position: "absolute",
          color: "green",
          fontSize: `${play ? "45px" : "40px"}`,
          visibility: `${visible ? "visible" : "hidden"}`,
        }}
        onMouseEnter={() => setplay(true)}
        onMouseLeave={() => setplay(false)}
        onClick={() => setvisible(false)}
      />
    </div>
  );
};

export default Playpause;
