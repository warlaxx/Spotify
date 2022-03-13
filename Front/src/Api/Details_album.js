import { React,useState,useEffect} from 'react';


const Details_albums =() => {
   const [item,SetItem] = useState([]);
   useEffect(() =>{
       fetch("http://localhost:3000/back/Details_albums.php")
       .then((res) => res.json())
       .then(
           (result) => {console.log(result)}
       )



   },[])
    return (
<div>

</div>


    )
    
}

export default Details_albums;