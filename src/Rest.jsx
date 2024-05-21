import React, { useEffect, useState } from 'react'

const Rest = () => {
    const[data,set_data]=useState(null); //used to set the response in data; initial value is null
    const[loading, set_loading]=useState(true); //used to find out whether fetching is complete or not; initial value is true

    const fetch_url=()=>{
        fetch('https://dogapi.dog/api/v2/breeds' )
            .then((response)=>{
                if(!response.ok)
                    {
                        throw new Error("Error in getting a response")
                    }
                return response.json() //parse the response into JSON
            })
            .then((response_data)=>{
                set_data(response_data);
                set_loading(false); //loading is complete
            })
            .catch((err)=>{
                console.error("Error in retrieving response", err);
                set_loading(false) //loading is set to false as there is an error
            })
        };
            console.log("datadata",data);
    useEffect(()=>
        {fetch_url()},[]) //dependency array that ensures that useEffect code runs only once
    
       if(loading){
        return <div>Loading...</div>
       }
       let content; 
       if(data){
        // content = data.data.map(i=> <div><ul><li>{JSON.stringify(i)}</li></ul></div>);
        content = data.data.map(i=> <div><ul><li>{i.attributes.name}:{i.attributes.description}</li></ul></div>);
       }
       else{
        content="No content";
       }
  return (
    <div style={{textAlign:"justify", margin:"40px"}}>
        <center><h3>REST API Function Call</h3></center>
       {content}

    </div>
  )
}

export default Rest;