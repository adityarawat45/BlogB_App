import { SecondBar } from "../components/SecondBar";
import ThankYouCardImage from "../images/bg.jpg";
import Auth from "../components/Auth";
import { AuthInfo } from "../hooks/recoil";
import { useRecoilState } from "recoil";

const Landing = () => {
  console.log("Rendered the Landing page");
  const [showAuthModal, setShowAuthModal] = useRecoilState(AuthInfo);
  return (
    <div className="w-full min-h-screen bg-stone-400 overflow-hidden">
      {showAuthModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"
          onClick={() => setShowAuthModal(false)}
        ></div>
      )}
      {showAuthModal && (
        <div className="fixed flex items-center h-screen w-screen justify-center z-50">
          <Auth
            key={showAuthModal}
            type={showAuthModal}
            onClose={() => setShowAuthModal(false)}
          />
        </div>
      )}
      <SecondBar></SecondBar>

      <div className="w-full h-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-0">
        {/* Left Section */}
        <div className="h-screen md:h-screen bg-gradient-to-b from-stone-500 to-zinc-200 flex flex-col justify-center items-center pt-16 md:pt-32 px-4 md:px-8 rounded-b-3xl md:rounded-none border-b-stone-400 border-b-2 md:border-b-0">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-stone-700 font-extrabold mb-4 md:mb-6">
              Blogster
            </div>

            <div className="md:hidden text-2xl sm:text-3xl font-extrabold text-stone-100 mb-8 leading-tight">
              Create. Share. Explore!
            </div>

            <div className="hidden md:block px-6 lg:px-12 py-4 text-center text-sm lg:text-lg font-medium text-stone-100 max-w-2xl mx-auto">
              Welcome to our blogging hub, where ideas flourish and perspectives
              thrive. Join us on a journey of discovery, where every word sparks
              a new conversation and every post invites you to explore deeper.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-8 md:mt-12 w-full">
            <button
              onClick={() => setShowAuthModal("signup")}
              className="w-full sm:w-auto"
            >
              <div className="border bg-gradient-to-tr from-slate-100 to-stone-200 text-stone-700 font-extrabold text-sm sm:text-base md:text-lg rounded-md px-8 md:px-12 py-2 md:py-3 hover:shadow-lg transition-shadow">
                Sign Up
              </div>
            </button>
            <button
              onClick={() => setShowAuthModal("signin")}
              className="w-full sm:w-auto"
            >
              <div className="border bg-gradient-to-tr from-slate-100 to-stone-200 text-stone-700 font-extrabold text-sm sm:text-base md:text-lg rounded-md px-8 md:px-12 py-2 md:py-3 hover:shadow-lg transition-shadow">
                Sign In
              </div>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-screen md:h-screen bg-stone-400 relative flex items-end justify-center p-4 md:p-0 overflow-hidden">
          <img
            src={ThankYouCardImage}
            className="w-full h-full object-cover rounded-3xl md:rounded-none opacity-90 absolute inset-0"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="z-10 font-extrabold text-stone-100 text-center md:text-left px-4 md:px-12 pb-8 md:pb-16">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl italic mb-2">
              Made By
            </div>
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl italic mb-3">
              Aditya
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
              With Love and Coffee....
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
