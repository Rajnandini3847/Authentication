export default function UserInfo () {
    return (
        <div className="h-screen grid place-items-center">
            <div className="shadow-lg p-5 flex flex-col bg-zinc-300/10">
               <div>
                Name : <span className="font-bold">John</span>
               </div>
               <div>
                Email : <span className="font-bold">john@gmail.com</span>
               </div>
               <button className="py-2 px-6 bg-red-500 font-bold text-white mt-3">Logout</button>
            </div>
        </div>
    )
}