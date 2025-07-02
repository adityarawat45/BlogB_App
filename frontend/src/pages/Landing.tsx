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
    <div className="">
  <SecondBar />
    <div className="w-screen h-screen grid grid-rows-2 md:grid-cols-2 justify-center md:items-center items-center">
      <div className="w-screen h-full md:h-screen md:w-auto bg-stone-300"><div className="rounded-3xl h-4/5 md:h-3/5 mx-5 my-3 md:my-16 bg-stone-500 backdrop-blur-xl row-span-1 flex justify-center items-center">Section-1</div></div>
      <div className="w-screen h-full  md:h-screen md:w-auto bg-stone-500"><div className="rounded-3xl h-4/5 md:h-3/5 mx-5 my-3 md:my-16 bg-stone-300 backdrop-blur-xl row-span-1 flex justify-center items-center">Section-2</div></div>
    </div>
    <Footer></Footer>
</div>
  )
}

export default Landing