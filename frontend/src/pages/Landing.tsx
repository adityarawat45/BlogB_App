import { SecondBar } from "../components/SecondBar";
import ThankYouCardImage from "../images/bg.jpg";
import Auth from "../components/Auth";
import { AuthInfo } from "../hooks/recoil";
import { useRecoilState } from "recoil";

const Landing = () => {
  const [showAuthModal, setShowAuthModal] = useRecoilState(AuthInfo);

  return (
    <div className="relative w-full overflow-hidden bg-[#d6d3d1]">
      {/* Background Glow */}
      <div className="absolute top-[-12rem] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-stone-500/20 blur-3xl"></div>

      <div className="absolute bottom-[-12rem] right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-zinc-700/20 blur-3xl"></div>

      {/* Modal */}
      {showAuthModal && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowAuthModal(false)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <Auth
              key={showAuthModal}
              type={showAuthModal}
              onClose={() => setShowAuthModal(false)}
            />
          </div>
        </>
      )}

      <SecondBar />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* LEFT */}
        <div className="flex min-h-screen w-full flex-col justify-center px-6 md:pt-28 pt-12 pb-12 sm:px-10 lg:w-1/2 lg:px-20 lg:pt-0 lg:pb-0">
          <div>
            <h1 className="text-6xl font-black leading-none tracking-tight text-stone-700 md:text-8xl mt-7">
              Blogster
            </h1>

            <p className="mt-3 text-xl italic text-stone-600 lg:text-2xl">
              Write your universe.
            </p>
          </div>

          <div className="mt-8 max-w-xl text-base font-medium leading-8 text-stone-600 sm:text-lg">
            A minimal and aesthetic platform to share stories, thoughts, and
            experiences — inspired by quiet nights, meaningful conversations,
            and anime-inspired visuals.
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => setShowAuthModal("signup")}
              className="rounded-2xl bg-stone-700 px-10 py-3 text-lg font-bold text-stone-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              Start Writing
            </button>

            <button
              onClick={() => setShowAuthModal("signin")}
              className="rounded-2xl border border-stone-700/20 bg-white/30 px-10 py-3 text-lg font-bold text-stone-700 backdrop-blur-xl transition-all duration-300 hover:bg-white/50"
            >
              Sign In
            </button>
          </div>

          <div className="mt-14 hidden lg:block">
            <p className="text-lg italic text-stone-500">
              “Every late night thought deserves a place to exist.”
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[32rem] w-full overflow-hidden lg:h-screen lg:w-1/2">
          <img
            src={ThankYouCardImage}
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 z-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-2xl sm:max-w-md lg:bottom-10 lg:left-10 lg:right-auto lg:p-8">
            <h2 className="text-2xl font-black italic text-stone-100 lg:text-3xl">
              Crafted by Aditya
            </h2>

            <p className="mt-4 text-sm leading-7 text-stone-300 lg:text-base">
              Built with late-night energy, anime playlists, Cursor, and
              coffee.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>

              <p className="text-sm font-medium text-stone-300">
                currently shipping ideas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;