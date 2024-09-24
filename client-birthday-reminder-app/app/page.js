"use client"

import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <p>Login Page</p>
      <Link href="/login" onClick={()=>signIn()}>Sign In</Link>
    </main>
  );
}
