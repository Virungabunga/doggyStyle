import { useParams } from "react-router-dom";
import './DogCard.css'

const DogCard = (props) => {
  const params = useParams();


// console.log(props.dogs)
   
  let currentDog = props.dogs.find((dog) => dog.chipNumber === params.currentdog);
  

  //console.log(currentDog.name)
  console.log(currentDog.owner.name)
  return (

  <div id="doggo" className="dogCard">
    <h3>{currentDog.name} </h3>
    <p className="dot"></p>
    <img src={currentDog.img} alt={currentDog.name} />
    <p>{currentDog.sex}</p>
    <p>age {currentDog.age}</p>
    <p>Breed:{currentDog.breed}</p>
    <div className="owner">
      <p>Owner: {currentDog.owner.name}</p>
      <p>{currentDog.owner.last}</p>
      <p>tel: {currentDog.owner.phoneNumber}</p>
    </div>
  </div>
  );
};

export default DogCard;
