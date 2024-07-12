import { Link } from "react-router-dom"

export const SecondBar = () => {
    return <div className="sticky top-0 z-50 bg-stone-300 border-b flex py-1 md:py-2 justify-between items-center px-2 md:px-8">
    <div className="text-lg md:text-xl font-extrabold cursor-pointer text-slate-900">
        Blog Nest
    </div>
    <div className="flex flex-row gap-2 justify-center items-center">
        <Link to={`signup`}>
        <div className="invisible md:visible text-slate-900 font-extrabold text-sm md:text-lg mx-1 md:mx-2">Sign Up</div>
        </Link>
        <Link to={`signin`}>
        <div className="border  bg-gradient-to-r text-gray-100 font-extrabold text-xs md:text-lg from-slate-700 to-stone-900 rounded-md px-2 py-1 ">Log In</div>
        </Link>
        
    </div>
</div>
}