import React from 'react';
import styled from "styled-components";


const InfoStyles = styled.div`
  border: 5px solid white;
  color: white;
  background-color: gray;
  width: 75%;
  margin: auto;
`

const Info = (props) => {
  console.log(props, 'DO SOMETHING');
  return (
    <InfoStyles>
      <h2>{props.title}</h2>
      <p>{props.explanation}</p> 
    </InfoStyles>
  )
}
export default Info;