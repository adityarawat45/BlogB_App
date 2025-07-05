import { Link } from "react-router-dom";
import { SecondBar } from "../components/SecondBar"
import ThankYouCardImage from "../images/bg.jpg"


const Landing = () => {
  return (
    <div className="w-screen h-screen bg-stone-400">
      <SecondBar></SecondBar>
      <div className="w-full h-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 ">
        <div className="h-full lg:h-full lg:w-auto w-screen bg-gradient-to-b from-stone-500 to-zinc-200 flex flex-col justify-center items-center rounded-b-full border-b-stone-400 border-b-4 lg:rounded-none lg:border-b-0">
          <div className="text-7xl lg:text-9xl text-stone-700 font-extrabold my-2">Blogster</div>
          <div className="sm:block lg:hidden text-3xl text-pretty font-extrabold text-stone-100 text-left mb-10">Create. Share. Explore!</div>
          <div className="hidden lg:block lg:px-32 px-16 lg:py-5 text-center text-md lg:text-4xl font-medium text-stone-100">Welcome to our blogging hub, where ideas flourish and perspectives thrive. Join us on a journey of discovery, where every word sparks a new conversation and every post invites you to explore deeper.</div>
          <div className="flex flex-row items-center gap-5 mt-2 lg:mt-12">
          <Link to={`signup`}>
            <div className="border bg-gradient-to-tr from-slate-100 to-stone-200  text-stone-700 font-extrabold text-sm lg:text-xl mx-2 rounded-md px-4 lg:px-14 py-1 lg:py-3">Sign Up</div>
          </Link>
          <Link to={`signin`}>
            <div className="border bg-gradient-to-tr from-slate-100 to-stone-200  text-stone-700 font-extrabold text-sm lg:text-xl mx-3 rounded-md px-4 lg:px-14  py-1 lg:py-3 ">Sign In</div>
          </Link>
          </div>
        </div>
        <div className="h-full lg:h-full lg:w-auto w-screen bg-stone-400 flex  items-end p-4 lg:p-0">
          <img src={ThankYouCardImage} className=" w-full h-full rounded-3xl lg:rounded-none opacity-90 backdrop-blur-sm~"/> <div className="z-10 absolute font-extrabold text-stone-100 text-4xl text-left italic p-9 lg:p-28 lg:text-9xl">Made By <br></br>Aditya<div className="text-2xl lg:text-5xl text-stone-100">With Love and Coffee....</div> </div>
        </div>
      </div>
    </div>
  )
}

export default Landing