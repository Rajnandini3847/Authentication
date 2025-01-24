"use client"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo () {
    const { data:session } =useSession();
    return (
        <div className="h-screen grid place-items-center">
            <div className="shadow-lg p-5 flex flex-col bg-zinc-300/10">
               <div>
                Name : <span className="font-bold">{ session?.user?.name }</span>
               </div>
               <div>
                Email : <span className="font-bold">{ session?.user?.email }</span>
               </div>
               <button onClick = {() =>signOut()} className="py-2 px-6 bg-red-500 font-bold text-white mt-3">Logout</button>
            </div>
        </div>
    )
}