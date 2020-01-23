import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"
import Info from './info'
import Date from './date'
import styled from "styled-components";

function Picture(props) {
  const [photo, setPhoto] = useState([]);
  // const [date, setDate] = useState(dateString)
  
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=GZXYS1vsP5GoPj97qxBhqo16wssF7BWDxTt8E0zS"
      )
      .then(response => {
        
        setPhoto(response.data);
       
      });
  }, []);
  
  const ImageStyle = styled.img`
      width: 75%;
      height: auto;
  `
  const DivContainer = styled.div`
    align-content: center;
    justify-content: center;
    border: 5px dotted white;
    background-color: black;

  `
  return (
       
    <DivContainer>
       
       <Date
        date={photo.date}
       />

        <Info 
        title={photo.title}
        date={photo.date}
        explanation={photo.explanation}
        copyright={photo.copyright}/>


        <ImageStyle src = {photo.hdurl}alt="Pic of the dAy"></ImageStyle>
      
    </DivContainer>
  )
}

export default Picture;
