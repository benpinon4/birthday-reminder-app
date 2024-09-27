'use client'
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';


 
import { useRouter } from 'next/navigation'

const links = [
    {name: "Home", href: "/", icon: "homeicon"},
    {name: "Calendar", href: "/calendar", icon: "homeicon"}
]


const NavLinks = () => {
  const router = useRouter()
  const LinkIcon1 = "homeicon";
  const LinkIcon2 = "homeicon";
    return (
        <>
         <button
                key="/"
                onClick={()=>router.push("/")}
                // href={link.href}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                <LinkIcon1 className="w-6" />
                <p className="hidden md:block">Home</p>
              </button>
              <button
                key="/calendar"
                onClick={()=>router.push("/calendar")}
                // href={link.href}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                <LinkIcon2 className="w-6" />
                <p className="hidden md:block">Calendar</p>
              </button>
          {/* {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <button
                key={link.name}
                onClick={router.push(link.name)}
                // href={link.href}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </button>
            );
          })} */}
        </>
      );
}


export default NavLinks