import { SecondBar } from "../components/SecondBar"
import ThankYouCardImage from "../images/bg.jpg"
import Auth from "../components/Auth"
import { AuthInfo } from "../hooks/recoil";
import { useRecoilState } from "recoil";


const Landing = () => {
  console.log("Rendered the Landing page");
  const [showAuthModal, setShowAuthModal] = useRecoilState(AuthInfo)
  return (
    <div className="w-screen h-screen bg-stone-400">
            {showAuthModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"
          onClick={() => setShowAuthModal(false)}
        ></div>
      )}
      {showAuthModal && (
        <div className="fixed flex items-center h-screen w-screen justify-center z-50">
          {/* <div className="bg-slate-600"></div> */}
            <Auth key={showAuthModal} type={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </div>
      )}
      <SecondBar></SecondBar>
      <div className="w-full h-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 ">
        <div className="h-full md:h-full md:w-auto w-screen bg-gradient-to-b from-stone-500 to-zinc-200 flex flex-col justify-center items-center rounded-b-full border-b-stone-400 border-b-4 md:rounded-none md:border-b-0">
          <div className="text-7xl md:text-9xl text-stone-700 font-extrabold my-2">Blogster</div>
          <div className="sm:block md:hidden text-3xl text-pretty font-extrabold text-stone-100 text-left mb-10">Create. Share. Explore!</div>
          <div className="hidden md:block md:px-32 px-16 md:py-5 text-center text-md md:text-4xl font-medium text-stone-100">Welcome to our blogging hub, where ideas flourish and perspectives thrive. Join us on a journey of discovery, where every word sparks a new conversation and every post invites you to explore deeper.</div>
          <div className="flex flex-row items-center gap-5 mt-2 md:mt-12">
          <button onClick={() => setShowAuthModal("signup")} >
            <div className="border bg-gradient-to-tr from-slate-100 to-stone-200  text-stone-700 font-extrabold text-sm md:text-xl mx-2 rounded-md px-4 md:px-14 py-1 md:py-3">Sign Up</div>
          </button>
          <button onClick={() => setShowAuthModal("signin")} >
            <div className="border bg-gradient-to-tr from-slate-100 to-stone-200  text-stone-700 font-extrabold text-sm md:text-xl mx-3 rounded-md px-4 md:px-14  py-1 md:py-3 ">Sign In</div>
          </button>
          </div>
        </div>
        <div className="h-full md:h-full md:w-auto w-screen bg-stone-400 flex  items-end p-4 md:p-0">
          <img src={ThankYouCardImage} className=" w-full h-full rounded-3xl md:rounded-none opacity-90 backdrop-blur-sm~"/> <div className="z-10 absolute font-extrabold text-stone-100 text-4xl text-left italic p-9 md:p-28 md:text-9xl">Made By <br></br>Aditya<div className="text-2xl md:text-5xl text-stone-100">With Love and Coffee....</div> </div>
        </div>
      </div>
    </div>
  )
}

export default Landing