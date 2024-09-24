"use client";

import BirthdayReminderCard from "@/app/ui/components/BirthdayReminderCard";
import { useEffect, useState } from "react";
import AddBirthdayReminder from "@/app/ui/components/AddBirthdayReminder";

const Page = () => {
  const [birthdayReminderList, setBirthdayReminderList] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const testArray = [1, 2, 3, 4, 5];
  const buildElement = testArray.map((item, index) => {
    return <div key={index}>{item}</div>;
  });
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
      const query = await fetch("http://localhost:8094/BirthdayReminders");
      const response = await query.json();
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

export default Page;
