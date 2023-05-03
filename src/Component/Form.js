import React, { useState } from "react";
import '../index.css'
const Form=()=>{
    const [allFormData, setAllFormData]=useState([]);
    const [formData, setFormData]= useState({
        name:"",
        department:"",
        rating:""
    });
   
    const handelChange=(event)=>{
       setFormData({...formData, [event.target.name]:event.target.value});
       console.log("formdata",formData);
    }
    // const handelError=()=>{
    //     console.log("handelError.......")
    // }
return(
    <div className="form">
        <h2>EMPLOYEE FEEDBACK FORM</h2>
        <br/>
        <form>
            <label>Name:-</label>
            <input type="text" name="name" id="name" onChange={handelChange}/>
            <br/>
            <br/>
            <label>Department:-</label>
            <input type="text" name="department"  onChange={handelChange}/>
            <br/>
            <br/>
            <label>Rating:-</label>
            <input type="number" name="rating" onChange={handelChange}/>
            <br/>
            <br/>
            <input type="button" value="Submit"
            onClick={(e)=>{
                e.preventDefault();
                const tempObj=[...allFormData];
                tempObj.push(formData);
                setAllFormData(tempObj);
                console.log("all form data :",allFormData);
            }}
            />
        </form>
        <div className="dataContainer">
        {allFormData.map((value, index)=>{
            return(
                <div key={index} className="data">
                    Name : {value.name} | Department : {value.department} | Rating : {value.rating}
                </div>
            )
        })}
        </div>
    </div>
)
}
export default Form;