"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault ();

    if(!email || !password){
        setError("All fields are required");
    }

    try {
        const res = await signIn("credentials", {
            email,
            password,
            redirect : false,
        });
        if (res.error){
            setError("Invalid Credentials found");
            return;            
        }

        router.replace('dashboard')
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className="grid place-content-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-lg font-bold my-4">Login</h1>
        <form  onSubmit= {handleSubmit} className="flex flex-col gap-3">
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
          <button  className="bg-green-600 font-bold text-white cursor-pointer px-6 py-2">
            Login
          </button>

          {error && (
            <div className="bg-red-700 text-white w-fit text-sm rounded-md px-3 py-1 mt-2 ">
              {error}
            </div>
          )}
          <Link className="text-sm text-right mt-3 " href={"/register"}>
            Don't have an Account <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
