"use client";

import BirthdayReminderCard from "@/app/ui/components/BirthdayReminderCard";
import { useEffect, useState } from "react";
import AddBirthdayReminder from "@/app/ui/components/AddBirthdayReminder";
import { useRouter } from "next/navigation";



const BirthdayReminderPage = () => {
  const [birthdayReminderList, setBirthdayReminderList] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const [tokenValue, setTokenValue] = useState("")
  const testArray = [1, 2, 3, 4, 5];
  // const bearer_token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJib2JieTEiLCJpYXQiOjE3Mjc4MTA5NjYsImV4cCI6MTcyNzgxNDU2Nn0.fSHcLZ6H4BXCisd9q8yUd0qHz_kh7BP-WSXvgYp9gmcyrQMDnn2VAV_RyvDt0TkD5_HG2EnpCM8a10Atm2C7yA"
  // const bearer_token = "1"  
  const router = useRouter();
  // const buildElement = testArray.map((item, index) => {
  //   return <div key={index}>{item}</div>;
  // });
  const birthdayReminderListElementList = birthdayReminderList.map(
    (item, index) => {
      return (
        <BirthdayReminderCard
          key={index}
          firstName={item.firstName}
          lastName={item.lastName}
          birthDate={item.birthDate}
          description={item.description}
        ></BirthdayReminderCard>
      );
    }
  );
  
  const checkSession = async () =>{

  }

  useEffect(() => {
   
    const bearer_token = localStorage.getItem('token');
    setTokenValue(bearer_token)
    const getBirthdayReminders = async () => {
      const query = await fetch("http://localhost:8094/resource/BirthdayReminders", {
        method: "GET",  
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + bearer_token
        },
      })
      const response = await query.json();
      console.log(response)



      // if (typeof window !== 'undefined') {
      //   const storedValue = localStorage.getItem('myKey');
      //   if (response) {
      //     setValue(response);
      //   }
      // }
      
      if(query.ok){
        console.log("in first condition")
        setBirthdayReminderList(response);
      } else {
        console.log("in second condition")
        
      }
      
    };
    getBirthdayReminders();
    setReloadPage(false);
  }, [reloadPage, tokenValue]);

  return (
    <div className="flex flex-row h-dvh pb-80" >
      <AddBirthdayReminder setReloadPage={setReloadPage}></AddBirthdayReminder>

      <ul className="bg-white shadow sm:rounded-md max-w-lg overflow-y-auto" id="bdayReminderList" >
        {birthdayReminderListElementList}
      </ul>
    </div>
  );
};

export default BirthdayReminderPage;
