"use client";

import { useEffect, useState } from "react";

const AddBirthdayReminder = (props) => {
    const setReloadPage = props.setReloadPage
    const [addTrigger, setAddTrigger] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [description, setDescription] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const addNewBirthdayReminderRequest = async ()=>{
        const postNew = await fetch("http://localhost:8094/addBirthdayReminder", {
            method: "POST",
            body: JSON.stringify({
                userId: 6969,
                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate,
                description: description
            }),
            headers: {
                "Content-Type": "application/json",
              },
        })
        const response = await postNew.json();
        setAddTrigger(false)
        
    }

useEffect(()=>{

    
    
}
,[addTrigger])



  return (
    <div>
      <div>
        <label htmlFor="fname">First Name: </label>
        <input type="text" id="fname" onChange={(e)=>{
            setFirstName(e.target.value)
        }}></input>
        <label htmlFor="lname">Last Name: </label>
        <input type="text" id="lname" onChange={(e)=>{
            setLastName(e.target.value)
        }}></input>
      </div>
      <div>
        <label htmlFor="dscript">Description: </label>
        <textarea id="dscript" onChange={(e)=>{
            setDescription(e.target.value)
        }}></textarea>
        <label htmlFor="bDate">Birth Date: </label>
        <input type="datetime-local" id="bDate" onChange={(e)=>{
            setBirthDate(e.target.value)
        }}></input>
      </div>
      <button onClick={()=>{
        addNewBirthdayReminderRequest()
        setReloadPage(true)
      }}>Save</button>
    </div>
  );
};

export default AddBirthdayReminder;
