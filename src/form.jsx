import React, { useState } from "react";
const Form = () => {
  let country=[
    {id:1, name:"India"}, 
  {id:2, name:"Australia"}]

let state=[
    {id:1,name:"Andhra Pradesh", country_id:1},
    {id:2,name:"Karnataka", country_id:1},
    {id:3,name:"Kerala", country_id:1},
    {id:4,name:"Odisha;", country_id:1},
    {id:5,name:"Tamil Nadu", country_id:1},
    {id:6,name:"Western Australia", country_id:2},
    {id:7,name:"Northern Territory", country_id:2},
    {id:8,name:"South Australia", country_id:2},
    {id:9,name:"Queensland", country_id:2},
    {id:10,name:"New South Wales", country_id:2}];

let district=[
    {id:1,name:"Alluri Sitharama Raja", state_id:1},
    {id:2,name:"Guntur", state_id:1},
    {id:3,name:"Tirupati", state_id:1},
    {id:4,name:"Visakhapatnam", state_id:1},
    {id:5,name:"West Godavari",  state_id:1},
    {id:6,name:"Chennai",  state_id:5},
    {id:7,name:"Namakkal",  state_id:5},
    {id:8,name:"Salem",  state_id:5},
    {id:9,name:"Thiruvallur",  state_id:5},
    {id:10,name:"Virudhunagar",  state_id:5}
];
const [selected_country,set_country]=useState("");
const [selected_state, set_state] = useState("");
const [selected_district, set_district]=useState("");
const [show_other_district, set_show_other_district]=useState(false) //hiding the other textbox by default
const[other_district, set_other_district]=useState("")


const changed_country=(e,value)=>{
    set_country(e.target.value);
    set_state(""); 
    set_district("");
    set_show_other_district(false);
    console.log("Selected Country ID:", e.target.value);
};
const changed_state=(e)=>{
    set_state(e.target.value);
    set_show_other_district(false)
    console.log("Selected State ID:", e.target.value);
};

const changed_district=(e)=>{
    const district_selected=e.target.value;
    set_district(e.target.value);
    console.log("Selected District ID:", e.target.value);
    if(district_selected==="other")
        {
            set_show_other_district(true) //setting to true displays the other textbox
        }
    else{
        set_show_other_district(false)
    }
};

let filtered_s=state.filter(i=>i.country_id==selected_country);
let filtered_d=district.filter(i=>i.state_id==selected_state);

const handle_other_change=(e)=>
    {
        set_other_district(e.target.value) //input of other textbox is stored
        
    }

const display_other_input=(e)=>
    {
        if(e.key=='Enter')
            {   
                e.preventDefault(); //stops form from submitting automatically
                console.log("Other District:",other_district)
            }

    }

  return (
    <div><center><h3>Forms</h3></center>
    <form><div class="main">
        <label>Country: </label>
        <select onChange={changed_country} >
        <option value="" disabled selected>Select an option</option>
            {
                country.map(c=>(
                    <option value={c.id}>{c.name}</option>
                ))
            }
        </select><br/><br/>

        <label>State: </label>
        <select onChange={changed_state} value={selected_state}>
        <option value="" disabled selected>Select an option</option>
            {
                filtered_s.map(s=>(
                    <option value={s.id}>{s.name}</option>
                ))
            }
        </select><br/><br/>

        <label>District: </label>
        <select onChange={changed_district} value={selected_district}>
        <option value="" disabled selected>Select an option</option>
            {
                filtered_d.map(d=>(
                    <option value={d.id}>{d.name}</option>
                ))
            }
        <option id="other" value="other">Other</option>
        </select><br/><br/>
        {
            show_other_district && (
                <>
                <label>Enter your district:</label>
                <input type="text" value={other_district} onChange={handle_other_change} onKeyDown={display_other_input}/>
                </>
            )
        }
       
       </div>   
    </form>
    </div>
  )
}

export default Form;