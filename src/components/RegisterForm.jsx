"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password ){
        setError("All fields are required");
    }

    try {
        const resUserExists = await fetch('api/userExists', {
          method : "POST",
          headers : {
            "content-Type" : "application/json"
          },
          body : JSON.stringify({ email }),
        })

        
        const { User } = await resUserExists.json();

        if ( User ){
          setError ("User Already Exists");
          return;
        }


        const res= await fetch('api/register',{
            method: "POST",
            headers : {
                "content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, email, password
            }),
         })

         if (res.ok) {
            const form = e.target;
            form.reset();
            router.push("/")
         } else {
            console.log("User registration failed")
         }
    } catch (error) {
        console.log("error occured while registration", error)
        
    }
  }

  console.log("Name :", name);
  


  return (
    <div className="grid place-content-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-lg font-bold my-4">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            placeholder="Password"
          />

          <button className="bg-green-600 cursor-pointer text-white py-2 px-6 font-bold">
            Register
          </button>

          {error && (
            <div className="bg-red-700 w-fit text-white text-sm py-1 px-3 mt-3 rounded-md">
              {error}
            </div>
          )}

          <Link className="text-right text-sm mt-3" href={"/"}>
            Already have an account <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
