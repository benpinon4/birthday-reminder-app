
import SideNav from '@/app/ui/dashboard/sidenav';
import SessionWrapper from './components/SessionWrapper';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
 
// export default function  Layout({ children }) {
//   return (
//     <SessionWrapper>


//       <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         <SideNav />
//       </div>
//       <div className="flex-grow p-6 md:p-12">{children}</div>
//     </div>

//       </SessionWrapper>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>


<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
<div className="w-full flex-none md:w-64">
  <SideNav />
</div>
<div className="flex-grow p-6 md:p-12">{children}</div>
</div>

</body>
    </html>
  );
}
