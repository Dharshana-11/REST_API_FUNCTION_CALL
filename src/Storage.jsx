//LOCAL & SESSION STORAGE-JSON
import React from 'react'

const SessionStorage = () => {

localStorage.clear();
sessionStorage.clear();

//LOCAL STORAGE

let fruits=[{"Apple":"Red"},
            {"Strawberry":"Pink"},
            {"Grapes":"Green"},
]
let fruits_stringify=JSON.stringify(fruits); //converts JSON to string
localStorage.setItem("Fruits",fruits_stringify);  //sets the stringified text in local storage
let fruits_get=localStorage.getItem("Fruits"); //gets the JSON obj from local storage
let fruits_parsed=JSON.parse(fruits_get); //parses the string to JSON

let fruits_key=fruits_parsed.map(key=>Object.keys(key)[0]); //maps through parsed JSON to store keys
let fruits_value=fruits_parsed.map(i=>{ //maps through parsed JSON to store all values using keys
  let key=Object.keys(i)[0];
  return i[key];
})

//SESSION STORAGE

let vegetables=[{"Tomato":"Red"},
                {"Carrot":"Orange"}, 
                {"Radish":"White"}
]

let vegetables_stringified=JSON.stringify(vegetables);
sessionStorage.setItem("Vegetables",vegetables_stringified);
let vegetables_get=sessionStorage.getItem("Vegetables")
let vegetables_parsed=JSON.parse(vegetables_get)

let vegetables_key=vegetables_parsed.map(key=>Object.keys(key)[0]);
let vegetables_value=vegetables_parsed.map(i=>
  {
    let key=Object.keys(i)[0];
    return i[key];
  }
)
  return (
    <div style={{marginLeft:"40px", textAlign:"left"}}>
      <h4>Local Storage- JSON</h4>
      <p>Keys:</p><ul>
      {fruits_key.map(i=>(
            <div>
            <li>{i}</li>
            </div>
        )
        )}</ul>
        <p>Values:</p><ul>
        {fruits_value.map(i=>(
            <div><li>
            {i}</li></div>
        )
        )}</ul>

      <h4>Session Storage- JSON</h4>
      <p>Keys:</p><ul>
      {vegetables_key.map(key=>(
            <div><li>
            {key}</li></div>
        )
        )}</ul>
        <p>Values:</p><ul>
        {vegetables_value.map(value=>(
            <div><li>
            {value}</li></div>
        )
        )}</ul>
    
    </div>
  )
}

export default SessionStorage;