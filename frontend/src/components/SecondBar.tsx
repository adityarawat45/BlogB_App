import { Link } from "react-router-dom"

export const SecondBar = () => {
    return <div className="fixed w-screen top-0 z-50 bg-stone-300 backdrop-blur-xl border-b-stone-100 border-b-2 px-4 py-2 lg:px-8 lg:py-5 flex justify-between items-center">
    <div className="text-2xl lg:text-4xl font-black cursor-pointer text-stone-700">
        Blogster
    </div>
    <div className="flex flex-row gap-2 justify-center items-center">
        <Link to={`signup`}>
        <div className="border invisible lg:visible text-stone-700 font-extrabold text-2xl mx-4 rounded-md px-3 py-1.5 border-amber-950">Sign Up</div>
        </Link>
        <Link to={`signin`}>
        <div className="border bg-stone-700 text-stone-100 font-extrabold text-sm lg:text-2xl rounded-md px-3 py-1.5 ">
            Log In
        </div>
        </Link>
    </div>
</div>
}