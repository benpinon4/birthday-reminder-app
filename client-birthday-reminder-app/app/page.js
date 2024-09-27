
'use client'
import BirthdayReminderPage from "./components/BirthdayReminderPage";
import CalendarPage from "./components/CalendarPage";
import { useRouter,usePathname } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname)

  const renderContent = () => {
    console.log(pathname)
    switch (pathname) {
      
      case '/':
        return <BirthdayReminderPage />;
      case '/calendar':
        return <CalendarPage />;
      default:
        return <BirthdayReminderPage />;

    }
  };

  return (
    <div>

      {renderContent()}
    </div>
  );
}


