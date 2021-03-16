import React, {useState} from 'react';
// import moburi from "./images/moburi.jpg"
// import toffee from './images/toffee.jpg'
// import moburi_and_toffee from './images/moburi_and_toffee.jpg'
import {Link} from "react-router-dom";
import './App.css'

// const MY_DOMAIN = 'http://localhost:3001';


const Home = () => {
    const [roomName, setRoomName] = useState("");

    const handleRoomNameChange = (e) => {
      setRoomName(e.target.value);
    }

    //send roomId to server onClick of link
  
    return (
        <div className = "home-page">
            <header className='home-header'>
              <h1> 
                  Showswiper
              </h1>
            </header>
            <div className = 'room-form'>
              <input
                  type = "text"
                  placeholder = "enter room name..."
                  value = {roomName}
                  onChange={handleRoomNameChange}
                  className = "input-field"
              />   
            </div>
            <div className='button'>
              <Link to ={`/${roomName}`} className='join-button'> 
                join room
              </Link>
            </div>
        </div>
    )
}

export default Home