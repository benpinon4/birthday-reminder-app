"use client";


import { useEffect, useState } from "react";
import { useRouter,usePathname } from "next/navigation";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, setTriggerLogin] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // useEffect(()=>{




  // setTriggerLogin(false)

  // },[triggerLogin])

  const logIntoApp = async ()=>{
    const loginRequest = await fetch("http://localhost:8094/api/auth/login", {
  method: "POST",
  body: JSON.stringify({
    userName: userName,
    passWord: password,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})

    const response = await loginRequest.json()
    console.log(response)
}

  return (
    <>
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                  onChange={(e) => {
                    setUserName(e.target.value)
                    console.log(e.target.value);
                  }}
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  User Name
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                  onClick={()=>{logIntoApp()}}
                >
                  Sign in
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Don&#x27;t have an account yet?
                <button
                  onClick={()=>{
                    console.log("sing up")
                    router.push("/createaccount")
                  }
                  }
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Sign up
                </button>
                .
              </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
