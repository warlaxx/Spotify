import { React,useState,useEffect} from 'react';


const Home_albums =() => {
   const [item,SetItem] = useState([]);
   useEffect(() =>{
       fetch("http://localhost:3000/back/Home_albums.php")
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

export default Home_albums;