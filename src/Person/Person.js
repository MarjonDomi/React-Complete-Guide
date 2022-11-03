import react from 'react';
import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components';


const StyledDiv = styled.div`  
width: 60%;
margin: 16px auto;
color: blue;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px){
    width: 450px;
}`;
const stylez ={
    input:{

        color:"red"
    }
}

const person = (props) => {

    return (
    // <div className="Person">
   
        /* //<p>I am {props.name} and i am {Math.floor(Math.random() * 30)} years old!</p> */
        
            <StyledDiv>
    <p onClick ={props.click}>I am {props.name} and i am {props.age} years old!.</p>
    <p>{props.children}</p>
    <br/>
    <input type="text" onChange={props.changed} style={Object.assign({ "background-color": "#e3e300" }, stylez.input)} value={props.name}/>
    </StyledDiv>
    
    )
}

export default person;