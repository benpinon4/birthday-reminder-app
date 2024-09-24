"use client";

import { useState } from "react";

const AddBirthdayReminder = (props) => {
  const setReloadPage = props.setReloadPage;
  const [addTrigger, setAddTrigger] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const addNewBirthdayReminderRequest = async () => {
    const postNew = await fetch("http://localhost:8094/addBirthdayReminder", {
      method: "POST",
      body: JSON.stringify({
        userId: 6969,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await postNew.json();
    setAddTrigger(false);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12">
        <h2 className="text-lg font-medium mb-6">Add A Birthday Reminder</h2>
        <form>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="fname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name:{" "}
              </label>
              <input
                type="text"
                name="first name"
                id="fname"
                placeholder="place text here"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="lname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name:{" "}
              </label>
              <input
                type="text"
                name="expiration-date"
                id="lname"
                placeholder="place text here"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="bDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Birth Date:{" "}
              </label>
              <input
                type="date"
                name="bDate"
                id="bDate"
                placeholder="mm/dd/yyyy"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="dscript"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description:{" "}
              </label>
              <textarea
                type="text"
                name="dscript"
                id="dscript"
                placeholder="place text here"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="mt-8">
            <button
              className="w-full bg-blue-400 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
              onClick={() => {
                addNewBirthdayReminderRequest();
                setReloadPage(true);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBirthdayReminder;
