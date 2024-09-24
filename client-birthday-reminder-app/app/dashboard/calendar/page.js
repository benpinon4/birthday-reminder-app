'use client'

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const getBirthdayReminders = async () => {
      const query = await fetch("http://localhost:8094/BirthdayReminders");
      const response = await query.json();
      console.log(response);
    };
    getBirthdayReminders();
  }, []);

  return <p>Calendar Page</p>;
};

export default Page;
