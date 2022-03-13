import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from 'react-spinner-material';
import Mix1 from '../Images/Mix1.jpeg';
import Mix2 from '../Images/Mix2.jpeg';
import Mix3 from '../Images/Mix3.jpeg';
import Mix4 from '../Images/Mix4.jpeg';
import Mix5 from '../Images/Mix5.jpeg';

const Interface_DailyMix = () => {
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);

 


//   if (album.length === 0) {
//     return (
//       <div
//             style={{ width: "100%", display: "flex", justifyContent: "center", height: "50%", selfalign: "center",verticalAlign: "middle", paddingBottom:"80px",paddingTop:"80px"}}
//           >
//            <Spinner radius={120} color={"#fff"} stroke={5} visible={true} />
//           </div>
//     );
//   }

  return (
    <div style={{ display: "flex" }}>


        
      
    <div
    style={{
      // backgroundColor: `${isOver ? "rgb(40,40,40)" : "rgb(24,24,24)"}`,
      borderRadius: "15px",
      width: "20%",
      textAlign: "center",
      paddingTop: "1%",
      paddingBottom: "2.5%",
      cursor: "pointer",
    }}
    className="album"
    onMouseEnter={() => setIsOver(true)}
    onMouseLeave={() => setIsOver(false)}
    onClick={() => {
      navigate("/DailyMix/"+encodeURI("0"))}}>
   
   <img
      src={Mix1}
      style={{ height: "11em", maxWidth: "100%", maxHeight: "100%" }}
    />
   
   
  </div>

  <div
    style={{
      // backgroundColor: `${isOver ? "rgb(40,40,40)" : "rgb(24,24,24)"}`,
      borderRadius: "15px",
      width: "20%",
      textAlign: "center",
      paddingTop: "1%",
      paddingBottom: "2.5%",
      cursor: "pointer",
    }}
    className="album"
    onMouseEnter={() => setIsOver(true)}
    onMouseLeave={() => setIsOver(false)}
    onClick={() => {
      navigate("/DailyMix/"+encodeURI("1"))}}>
   
   <img
      src={Mix2}
      style={{ height: "11em", maxWidth: "100%", maxHeight: "100%" }}
    />
   
   
  </div>

  <div
    style={{
      // backgroundColor: `${isOver ? "rgb(40,40,40)" : "rgb(24,24,24)"}`,
      borderRadius: "15px",
      width: "20%",
      textAlign: "center",
      paddingTop: "1%",
      paddingBottom: "2.5%",
      cursor: "pointer",
    }}
    className="album"
    onMouseEnter={() => setIsOver(true)}
    onMouseLeave={() => setIsOver(false)}
    onClick={() => {
      navigate("/DailyMix/"+encodeURI("2"))}}>
   
   <img
      src={Mix3}
      style={{ height: "11em", maxWidth: "100%", maxHeight: "100%" }}
    />
   
   
  </div>

  <div
    style={{
      // backgroundColor: `${isOver ? "rgb(40,40,40)" : "rgb(24,24,24)"}`,
      borderRadius: "15px",
      width: "20%",
      textAlign: "center",
      paddingTop: "1%",
      paddingBottom: "2.5%",
      cursor: "pointer",
    }}
    className="album"
    onMouseEnter={() => setIsOver(true)}
    onMouseLeave={() => setIsOver(false)}
    onClick={() => {
      navigate("/DailyMix/"+encodeURI("3"))}}>
   
   <img
      src={Mix4}
      style={{ height: "11em", maxWidth: "100%", maxHeight: "100%" }}
    />
   
   
  </div>

  <div
    style={{
      // backgroundColor: `${isOver ? "rgb(40,40,40)" : "rgb(24,24,24)"}`,
      borderRadius: "15px",
      width: "20%",
      textAlign: "center",
      paddingTop: "1%",
      paddingBottom: "2.5%",
      cursor: "pointer",
    }}
    className="album"
    onMouseEnter={() => setIsOver(true)}
    onMouseLeave={() => setIsOver(false)}
    onClick={() => {
      navigate("/DailyMix/"+encodeURI("4"))}}>
   
   <img
      src={Mix5}
      style={{ height: "11em", maxWidth: "100%", maxHeight: "100%" }}
    />
   
   
  </div>


</div>






    
  );
};

export default Interface_DailyMix;
