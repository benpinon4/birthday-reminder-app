'use client'

import { useEffect, useState } from "react";
import AddBirthdayReminder from "@/app/ui/dashboard/AddBirthdayReminder";

const Page = () => {
    const [birthdayReminderList, setBirthdayReminderList] = useState([])
    const [reloadPage, setReloadPage]= useState(false)
    const testArray = [1,2,3,4,5]
    const buildElement = testArray.map((item, index)=>{
        return <div key={index}>{item}</div>
    })
    const birthdayReminderListElementList = birthdayReminderList.map((item, index)=>{
        return <div key={index}>{item.firstName}</div>
    })
    useEffect(() => {
        const getBirthdayReminders = async () => {
          const query = await fetch("http://localhost:8094/BirthdayReminders");
          const response = await query.json();
          setBirthdayReminderList(response)
          
        };
        getBirthdayReminders();
        setReloadPage(false)
        
      }, [reloadPage]);

    return (
    <>
    <AddBirthdayReminder setReloadPage={setReloadPage}></AddBirthdayReminder>
    <ol>{birthdayReminderListElementList}</ol>
    
    </>
    
    
    
    
    );

}

export default Page