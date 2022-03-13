import { React,useState,useEffect} from 'react';


const Search_gender =() => {
   const [item,SetItem] = useState([]);
   useEffect(() =>{
       fetch("http://localhost:3000/back/Search_gender.php")
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

export default Search_gender;