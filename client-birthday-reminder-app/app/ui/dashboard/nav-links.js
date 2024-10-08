'use client'
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';


 
import { useRouter } from 'next/navigation'

const links = [
    {name: "Home", href: "/", icon: "Homeicon"},
    {name: "Calendar", href: "/calendar", icon: "Homeicon"}
]
const checkSession = async ()=>{
  const bearer_token = localStorage.getItem('token');
  console.log(bearer_token)
  const checkTokenRequest = await fetch("http://localhost:8094/resource/checksession", {
      method: "GET",  
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + bearer_token
      },
    })
    const response = await checkTokenRequest.json();
    console.log(response)
}

const NavLinks = () => {
  const router = useRouter()
  const LinkIcon1 = "Homeicon";
  const LinkIcon2 = "Homeicon";
    return (
        <>
         <button
                key="/"
                onClick={()=>{
                  checkSession()
                  router.push("/addreminder")}}
                // href={link.href}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                {/* <LinkIcon1 className="w-6" /> */}
                <p className="hidden md:block">Home</p>
              </button>
              <button
                key="/calendar"
                onClick={()=>router.push("/calendar")}
                // href={link.href}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                {/* <LinkIcon2 className="w-6" /> */}
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