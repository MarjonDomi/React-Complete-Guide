import React, { useState } from 'react';
import './App.css';
import react from 'react';
import { render } from '@testing-library/react';
import Person from './Person/Person';
import { Component } from 'react/cjs/react.production.min';
import person from './Person/Person';
import NameList from './List';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Radium from 'radium';

const StyledButton = styled.button`
backgroundColor:green;
color: white;
font: inherit;
border: 2px solid blue;
padding: 8px;
cursor: pointer;
&:hover{
backgroundColor: lightgreen;
color: black;
`;

const APp = props =>{
const [personsState,setPersonsState] = useState({
    persons: [
      {name:'Maxi',age:29},
      {name:'Manui',age: 29},
      {name:'Marjoni',age: 29}
    ],
    showPersons: false
  });

  const [otherState,setOtherState]= useState('some other value');

  //clicks is the Current State and setClick is the Changed State
  const [clicksCounter,setClicksCounter] = useState(0)

  const addClicks =()=>{
   setClicksCounter(clicksCounter + 1)
  }


  console.log(personsState,otherState);

  const switchNameHandler = (newName) =>{
    console.log("testt")
  setPersonsState({
    persons: [
      {name:newName,age:33},
      {name:'Manuialeee',age: 33},
      {name:'MarjoniDomi',age: 33}
    ],
    persons2: personsState.persons3
  });
  setOtherState({
    otherState: ('my other values')
   });
  // console.log("Was clicked")
  };

const nameChangedHandler = (event) =>{
  setPersonsState({
    persons: [
      {name:'Max',age:33},
      {name: event.target.value ,age: 33},
      {name:'Marjoni Domi',age: 33}
    ]
  });
}
 
const togglePersonsHandler = () =>{
  const doesShow = personsState.showPersons;
  setPersonsState({ persons: [
    {name:'Maxi',age:33},
    {name:'Manuialeee',age: 33},
    {name:'MarjoniDomi',age: 33}
  ],
  showPersons: !doesShow})
}

const style={
  backgroundColor:"green",
  color: 'white',
  font: 'inherit',
  border: '2px solid blue',
  padding: '8px',
  cursor: 'pointer',
  ':hover':{
  backgroundColor: 'lightgreen',
  color:'black'
  }
};

let persona = null;
const personsList =()=>{
if (personsState.showPersons){
  persona=(
    <div>
      {personsState.persons.map((name,age) =>{
        return <ErrorBoundary><Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        /></ErrorBoundary>
      })}
    </div>
  )
  style.backgroundColor = 'red';
  style[':hover'] = {
    backgroundColor: 'salmon',
    color:'white'
  }
}
}
  // let classes = ['red','bold'].join('');
    return(
      <div className = 'App'>
        <p >I stilizuar me css</p>
      <StyledButton
      onClick={() =>{switchNameHandler();togglePersonsHandler();addClicks()}} >Switch Name</StyledButton>
        <br/> <span>{clicksCounter}</span>
        <br/>
        <br/> 
       <Person NameList/>
       <div>

       <Person 
       
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age}
      />
      <Person 
      style={{color:"green"}}
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age} changed={nameChangedHandler}>
        My hobby : Racing</Person>
      <Person 
      
      name={personsState.persons[2].name}
      age={personsState.persons[2].age} />
      </div>  
</div>
    );
}

export default APp;


