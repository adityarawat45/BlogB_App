import { Link } from "react-router-dom";
import { SecondBar } from "../components/SecondBar"
import bloggingImage from "../images/blog.png";
import { Footer } from "../components/Footer";

const Landing = () => {
  return (
    // <div className="">
    //   <SecondBar></SecondBar>
    //   <div className="md:grid md:grid-cols-2 justify-center items-center">
    //     <div className="lg:h-screen md:bg-stone-200">
    //       <div className="flex flex-col rounded-lg mx-2 my-5 bg-stone-200 py-2 md:py-7 px-2 md:px-5">
    //       <div className="text-5xl md:text-6xl md:mr-20 text-wrap text-slate-800 text-left font-extrabold">Blog Nest</div>
    //       <div className="text-4xl md:text-5xl md:mr-20 text-left font-extrabold text-slate-800">Explore the World of Blogging"</div>
    //       <div className="text-slate-900 font-medium md:mr-20  text-left text-md mt-2 md:mt-5">Welcome to our blogging hub, where ideas flourish and perspectives thrive. Join us on a journey of discovery, where every word sparks a new conversation and every post invites you to explore deeper.</div>
    //       </div>
    //       <div className="flex flex-row gap-5 px-3 md:px-0 lg:px-0 md:ml-6 justify-center lg:justify-start items-center">
    //       <Link to={`signin`}>
    //     <div className="border bg-gradient-to-r text-gray-100 font-extrabold text-xs md:text-lg from-slate-700 to-stone-900 rounded-md px-2 py-1 ">Sign In</div>
    //     </Link>
    //     <Link to={`signup`}>
    //     <div className="border  bg-gradient-to-r text-gray-100 font-extrabold text-xs md:text-lg from-slate-700 to-stone-900 rounded-md px-2 py-1 ">Sign Up</div>
    //     </Link>
    //       </div>
    //     </div>
    //     <div className="flex md:h-screen md:bg-stone-200 flex-col gap-2 px-2 md:px-7 py-3 md:py-7 justify-between items-center">
    //       <div className="px-2 md:px-7 py-3 md:py-7 rounded-lg bg-stone-200 flex flex-col justify-between items-center">
    //       <img  className="w-2/5 h-3/6 my-2 "src={bloggingImage}></img>
    //       <div className="px-5 font-medium text-center text-slate-800">Explore the latest insights, stories, and updates from our vibrant community of bloggers. Dive into a world of knowledge, inspiration, and creativity right at your fingertips. Uncover diverse perspectives and deep insights, where every click opens a new chapter of inspiration and discovery.</div>
    //       </div>
    //     </div>
    //     <Footer></Footer>
    //   </div>
    // </div>
    <div className="w-screen h-screen">
      <SecondBar></SecondBar>
      <div className="w-full h-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 ">
        <div className="h-full md:h-full md:w-auto w-screen bg-stone-400 flex flex-col justify-center items-center">
          <div className="text-5xl md:text-9xl text-amber-950 font-extrabold my-2">Blog Nest</div>
          <div className="sm:block md:hidden text-xl text-pretty font-extrabold text-stone-200 text-left mb-5">Create. Share. Explore!</div>
          <div className="hidden md:block md:px-32 px-16 md:py-5 text-center text-md md:text-4xl font-medium text-stone-100">Welcome to our blogging hub, where ideas flourish and perspectives thrive. Join us on a journey of discovery, where every word sparks a new conversation and every post invites you to explore deeper.</div>
          <div className="flex flex-row items-center gap-5 mt-2 md:mt-12">
          <Link to={`signup`}>
            <div className="border bg-gradient-to-tr from-slate-100 to-stone-200  text-amber-950 font-extrabold text-sm md:text-xl mx-2 rounded-md px-4 md:px-14 py-1 md:py-3">Sign Up</div>
          </Link>
          <Link to={`signin`}>
            <div className="border bg-gradient-to-tr from-slate-100 to-stone-200  text-amber-950 font-extrabold text-sm md:text-xl mx-3 rounded-md px-4 md:px-14  py-1 md:py-3 ">Sign In</div>
          </Link>
          </div>
        </div>
        <div className="h-full md:h-full md:w-auto w-screen bg-stone-200 flex justify-center items-center">Section - 2</div>
      </div>
    </div>
  )
}

export default Landing