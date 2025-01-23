import Link from "next/link";
export default function RegisterForm (){
    return (
        <div className="grid place-content-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-lg font-bold my-4">Sign Up</h1>
                <form className="flex flex-col gap-3">
                    <input type="text" placeholder="Full name"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="Password" placeholder="Password"></input>
                    <button className="bg-green-600 cursor-pointer text-white py-2 px-6 font-bold">Register</button>
                    <div className="bg-red-700 w-fit text-white text-sm py-1 px-3 mt-3 rounded-md">
                        Error Message
                    </div>
                    <Link className="text-right text-sm mt-3" href={'/'}>Already have an account <span className="underline">Login</span></Link>
                </form>
            </div>
        </div>
    )
}