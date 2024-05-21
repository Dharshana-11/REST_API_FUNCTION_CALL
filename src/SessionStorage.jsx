//LOCAL & SESSION STORAGE-JSON
import React from 'react'

const SessionStorage = () => {

localStorage.clear();
sessionStorage.clear();

//LOCAL STORAGE

let fruits=[{"Apple":"Red"},
            {"Strawberry":"Pink"},
            {"Grapes":"Green"}
]
fruits.forEach(i=>{ //looping over JSON to stores keys and values(for setItem)
        let fruits_name=Object.keys(i)[0]; 
        let fruits_color=i[fruits_name];
        localStorage.setItem(fruits_name, fruits_color); 
    })

let fruits_key=Object.keys(localStorage); //array containing all the keys
let fruits_value=[]; //array that stores all values
for(let i=0;i<fruits_key.length;i++){
  fruits_value.push(localStorage.getItem(fruits_key[i])); //adding all values in array using its key
}

//SESSION STORAGE

let vegetables=[{"Tomato":"Red"},
                {"Carrot":"Orange"}, 
                {"Radish":"White"}
]

vegetables.forEach(i=>
    {
        let vegetables_name=Object.keys(i)[0];
        let vegetables_color=i[vegetables_name];
        sessionStorage.setItem(vegetables_name,vegetables_color);
    }
)
let vegetables_key=Object.keys(sessionStorage);
let vegetables_value=[];
for(let i=0;i<vegetables_key.length;i++)
    {
        vegetables_value.push(sessionStorage.getItem(vegetables_key[i]));
    }
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