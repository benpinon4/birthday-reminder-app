"use client";

import BirthdayReminderCard from "@/app/ui/components/BirthdayReminderCard";
import { useEffect, useState } from "react";
import AddBirthdayReminder from "@/app/ui/components/AddBirthdayReminder";

const BirthdayReminderPage = () => {
  const [birthdayReminderList, setBirthdayReminderList] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const testArray = [1, 2, 3, 4, 5];
  const bearer_token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJib2JieTEiLCJpYXQiOjE3Mjc3ODA2MDIsImV4cCI6MTcyNzc4NDIwMn0.75A7p9Pqv_MW2SxyoNc_E8gT0YqhZYNPTfNiNKznu1BmkJ4CwA9yr89d53yfomEp2yjrksJj6qtE5UBwiBK_YQ" 
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
  useEffect(() => {
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
      setBirthdayReminderList(response);
    };
    getBirthdayReminders();
    setReloadPage(false);
  }, [reloadPage]);

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
