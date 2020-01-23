import React from 'react'
import styled from "styled-components";

const DateStyle = styled.h4`
    color: white;
`



const Date = props => {
console.log(props, 'date')
    return(
        <DateStyle>
            <h4>{props.date}</h4>
            
            <form>
				<label for="date">Choose a Day</label>
				<input id="date" type="date" />
			</form>  


        </DateStyle>
    )
}

export default Date;