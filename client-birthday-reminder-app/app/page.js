"use client";
import BirthdayReminderPage from "./components/BirthdayReminderPage";
import CalendarPage from "./components/CalendarPage";
import Login from "./components/Login";
import CreateAccountPage from "./components/CreateAccountPage";
import { useRouter, usePathname } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  const renderContent = () => {
    console.log(pathname);
    switch (pathname) {
      case "/":
        console.log("case 1");
        return <Login />;
      case "/addreminder":
        console.log("case 2");
        return <BirthdayReminderPage />;
      case "/calendar":
        console.log("case 3");
        return <CalendarPage />;
      case "/createaccount":
        console.log("case 4");
        return <CreateAccountPage />;
      default:
        console.log("case d");
        return <Login />;
    }
  };

  return <div>{renderContent()}</div>;
}
