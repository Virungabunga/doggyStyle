import { useEffect, useState } from "react";
import "./DogGallery.css";
import { Link } from "react-router-dom";


const DogGallery = (props) => {
  
// let presentDogs =props.dogs.filter(dog => dog.present === true )
// presentDogs.forEach(dog => {
  
  
// });
// console.log(presentDogs)


  let listItems = props.dogs.map((dog, index) => {
  if (dog.present === true){
    return (
    <div className='present'  key={index}>
    <Link to={"/DogCard/" + dog.chipNumber}>
      <p>{dog.name}</p>
      <img className="tile-img" src={dog.img}></img>
    </Link>

  </div>
    )
  } else {
    return (
      <div className="notpresent"  key={index}>
    <Link to={"/DogCard/" + dog.chipNumber}>
      <p>{dog.name}</p>
      <img className="tile-img" src={dog.img}></img>
    </Link>
  
  </div>
    )
  }
 });

  return (
   <div className="grid-container">
    {listItems}
     </div>
  );
};

export default DogGallery;
