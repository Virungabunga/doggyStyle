import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import dog from "../assets/welcome.jpg";
import './Welcome.css'

const Welcome =()=>{
    return (
        <div id="welcomediv">
        <h3 id="welcomeh3">Doggydaycare </h3>
        <img id="welcomeimg" src={dog} alt="dogicon" />
        <Link to={"/DogGallery"}>
        <p id="welcomep">Take me to daycare</p>
        </Link>
        </div>
    )
}

export default Welcome;