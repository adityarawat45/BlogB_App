import { Link } from "react-router-dom"
import { CustomAvatar } from "./BlogCard"
import { IoAddCircle } from "react-icons/io5"

export const Appbar=() =>{
    return <div className="sticky top-0 z-50 bg-stone-300 border-b flex py-2 justify-between items-center px-5 md:px-8">
        <Link to="/">
        <div className="text-lg md:text-xl font-extrabold cursor-pointer text-slate-900">
            Blog Nest
        </div>
        </Link>
        <div className="flex flex-row justify-center items-center">
        <Link to={`/publish`}>
            <div className="mr-2 md:mr-5">
                <div></div>
                <button type="button"className=" flex justify-between items-center focus:outline-none px-2 md:px-3 py-1 md:py-2  my-2 text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-normal md:font-medium rounded-2xl text-xs"> New <div className="ml-2"><IoAddCircle/> </div> 
                </button></div></Link>
            <CustomAvatar name="Aditya"></CustomAvatar>
        </div>
    </div>
}