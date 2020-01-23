import React from "react";
import "./App.css";
import Picture from './components/picture'
import styled from "styled-components";

const HeaderStyle = styled.h1`
  backgroud-color: black;
`

function App(props) {
  
  return (
    <div className="App">
      <HeaderStyle>
        <h1>Picture of the Day!!</h1>
        </HeaderStyle>
      <div>
        <Picture />
      </div>
     
    </div>
  );
}

export default App;
