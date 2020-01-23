import React, { useState, useEffect } from "react";
import axios from "axios";
import  "../index.css"
import "../App.css"
import Info from './info'

function Picture(props) {
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState([]);
  
  
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=GZXYS1vsP5GoPj97qxBhqo16wssF7BWDxTt8E0zS"
      )
      .then(response => {
        
        setPhoto(response.data);
       
      });
  }, []);
  

  return (
       
    <div>
       

        <Info 
        title={photo.title}
        date={photo.date}
        explanation={photo.explanation}
        copyright={photo.copyright}/>


        <img src = {photo.hdurl}alt="Pic of the dAy"/>
      
    </div>
  )
}

export default Picture;
