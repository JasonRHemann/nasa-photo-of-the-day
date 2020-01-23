import React from "react";
import "./App.css";
import Picture from './components/picture'


function App() {
  
  return (
    <div className="App">
      <h1>Picture of the Day!!</h1>
      <div>
      <Picture />
      {/* <Date /> */}
      </div>
     
    </div>
  );
}

export default App;
