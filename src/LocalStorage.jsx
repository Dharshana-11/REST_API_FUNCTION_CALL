import React from 'react'

const LocalStorage = () => 
    {
    localStorage.clear();
    localStorage.setItem('Apple', 'Green')
    localStorage.setItem('Strawberry', 'Pink')
    localStorage.setItem('Mango', 'Yellow')
    let fruits=[];
    for(let i=0;i<localStorage.length;i++)
        {
            let key=localStorage.key(i);
            let value =localStorage.getItem(key);
            fruits.push([key,value]);
        }


    sessionStorage.clear();
    sessionStorage.setItem('Tomato', 'Red')
    sessionStorage.setItem('Radish', 'White')
    sessionStorage.setItem('Carrot', 'Orange')
    let vegetables=[];

    for(let i=0;i<sessionStorage.length;i++)
        {
            let key=sessionStorage.key(i);
            let value =sessionStorage.getItem(key);
            vegetables.push([key,value]);
            }
  return (
    <div>
        <h4>Local Storage</h4>
        {fruits.map(i=>(
            <div>
            <p>Key: value- {i[0]}: {i[1]}</p></div>
        )
        )}

        <h4>Session Storage</h4>
        {vegetables.map(i=>(
            <div>
            <p>Key: value- {i[0]}: {i[1]}</p></div>
        )
        )}
    </div>
  )
}

export default LocalStorage;

