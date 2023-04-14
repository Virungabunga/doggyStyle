import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DogGallery from './components/DogGallery'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DogCard from './components/DogCard'
import Welcome from './components/Welcome'

const apiUrl = "https://api.jsonbin.io/v3/b/642c10b9ace6f33a220475d9";

function App() {

  const [selectedDog, setSelectedDog ] = useState(null);
  const [dogs, setDogs] = useState([]);
  
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(apiUrl);
    // console.log("response", response);

    let data = await response.json();
    console.log("got data", data);

    setDogs(data.record);
    // console.log(data.record);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ 
          <Welcome/>
        }/> 
        <Route path="/DogGallery" element={ 
          <DogGallery dogs={dogs}/>
        }/> 
        <Route path="/DogCard/:currentdog" element={
          <DogCard dogs={dogs}/>
        }/>
      </Routes>
    </div>
  )
}
export default App


