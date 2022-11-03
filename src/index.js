import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Person from './Person/Person';
import NameList from './List';

const emra = [
  {id:' oni1 ',emer:' Marjonn ', mbiemer:' Domi '},
  {id:' oni2 ',emer:' Marjon ', mbiemer:' Domi '},
  {id:' oni3 ',emer:' Marjon ', mbiemer:' Domi '}
]
const emra2 = [
  {id:' oni1 ',emer:' Marjonndfdf ', mbiemer:' Domi '},
  {id:' oni2 ',emer:' Marjondfdf ', mbiemer:' Domi '},
  {id:' oni3 ',emer:' Marjondfdfd ', mbiemer:' Domi '}
]

// const dataSwitchHandler =(event)=>{
  // const emra2 = [
  //   {id:' oni1 ',emer: event.target.value , mbiemer:' Domi '},
  //   {id:' oni2 ',emer: event.target.value , mbiemer:' Domi '},
  //   {id:' oni3 ',emer: event.target.value , mbiemer:' Domi '}
  // ]

// }

ReactDOM.render(
  <React.StrictMode>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
    <h1>HI,I AM A REACT APP</h1>
    </div>
    <App />
    <NameList dataaaa={emra} />
    <NameList dataaaa={emra2} />
    {/* <App/>b
    <Person name = 'Marjon' age='28' />
    <Person name = "Max" age='28'>My other hobby: Fishing</Person>
    <Person>My other hobby: Swimming</Person> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

