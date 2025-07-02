import { Link } from "react-router-dom"

export const SecondBar = () => {
    return <div className="sticky top-0 z-50 bg-stone-300 backdrop-blur-xl border-b-stone-400 border-b-2 px-4 py-2 md:px-8 md:py-5 flex justify-between items-center">
    <div className="text-2xl md:text-4xl bg-gradient-to-tr bg-clip-text text-transparent from-stone-700 to-amber-900 font-black cursor-pointer text-slate-900">
        Blog Nest
    </div>
    <div className="flex flex-row gap-2 justify-center items-center">
        <Link to={`signup`}>
        <div className="invisible md:visible text-amber-900 font-extrabold text-sm md:text-lg mx-1 md:mx-2">Sign Up</div>
        </Link>
        <Link to={`signin`}>
        <div className="border bg-gradient-to-r text-gray-100 font-extrabold text-sm md:text-lg from-stone-700 to-amber-900 rounded-md px-3 py-1.5 ">
            Log In
        </div>
        </Link>
    </div>
</div>
}