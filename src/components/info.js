import React from 'react';
import "./info.css";

const Info = (props) => {
  console.log(props, 'DO SOMETHING');
  return (




      <div>
      <h2>{props.title}</h2>
      <h4>{props.date}</h4>
      <p>{props.explanation}</p>
      
    </div>
  )
}
export default Info;