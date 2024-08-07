import Image from "next/image";
import Link from "next/link";
import { authenticate } from '@/app/lib/actions'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <p><Link href={"/dashboard/listview"}>Login Page</Link></p>

      <form action={authenticate}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    </main>
  );
}
