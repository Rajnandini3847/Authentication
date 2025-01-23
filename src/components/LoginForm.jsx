import Link from "next/link"
export default function LoginForm () {
    return (
        <div className="grid place-content-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-lg font-bold my-4">Login</h1>
                <form className="flex flex-col gap-3">
                    <input type="text" placeholder="Email"/>
                    <input type="Password" placeholder="Password"/>
                    <button className="bg-green-600 font-bold text-white cursor-pointer px-6 py-2">Login</button>
                    <div className="bg-red-700 text-white w-fit text-sm rounded-md px-3 py-1 mt-2 ">Error Message</div>
                    <Link className="text-sm text-right mt-3 " href={'/register'}>Don't have an Account <span className="underline">Register</span></Link>
                </form>
            </div>
        </div>
    )
}