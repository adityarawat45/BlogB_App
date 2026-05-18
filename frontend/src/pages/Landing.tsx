import { SecondBar } from "../components/SecondBar";
import ThankYouCardImage from "../images/bg.jpg";
import Auth from "../components/Auth";
import { AuthInfo } from "../hooks/recoil";
import { useRecoilState } from "recoil";

const Landing = () => {
  const [showAuthModal, setShowAuthModal] = useRecoilState(AuthInfo);

  return (
    <div className="relative w-full overflow-hidden bg-[#ddd6cf]">
      {/* Background Glow */}
      <div className="absolute top-[-12rem] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-amber-300/20 blur-3xl"></div>

      <div className="absolute bottom-[-12rem] right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-orange-300/10 blur-3xl"></div>

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
        {/* LEFT SECTION */}
        <div className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pt-20 pb-12 sm:px-10 lg:w-1/2 lg:bg-transparent lg:px-20 lg:pt-0 lg:pb-0">
          
          {/* Mobile Background Image */}
          <div className="absolute inset-0 lg:hidden">
            <img
              src={ThankYouCardImage}
              alt="Background"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div>
              <h1 className="md:mt-16 text-6xl font-black leading-none tracking-tight text-stone-100 md:text-8xl lg:mt-0 lg:text-[#5c4b44]">
                Blogster
              </h1>

              <p className="mt-3 text-xl italic text-stone-300 lg:text-2xl lg:text-[#6d5c54]">
                Write your universe.
              </p>
            </div>

            <div className="mt-8 max-w-xl text-base font-medium leading-8 text-stone-200 sm:text-lg lg:text-[#6d5c54]">
              A minimal and aesthetic platform to share stories, thoughts, and
              experiences — inspired by quiet nights, meaningful conversations,
              and anime-inspired visuals.
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setShowAuthModal("signup")}
                className="rounded-2xl bg-stone-100 px-10 py-3 text-lg font-bold text-stone-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl lg:bg-[#5c4b44] lg:text-stone-100 lg:hover:bg-[#4b3d37]"
              >
                Start Writing
              </button>

              <button
                onClick={() => setShowAuthModal("signin")}
                className="rounded-2xl border border-stone-200/20 bg-white/10 px-10 py-3 text-lg font-bold text-stone-100 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 lg:border-[#5c4b44]/10 lg:bg-white/30 lg:text-[#5c4b44] lg:hover:bg-white/50"
              >
                Sign In
              </button>
            </div>

            {/* Mobile Quote */}
            <div className="mt-12 lg:hidden">
              <p className="text-sm italic leading-7 text-stone-300">
                “Every late night thought deserves a place to exist.”
              </p>
            </div>

            {/* Desktop Quote */}
            <div className="mt-14 hidden lg:block">
              <p className="text-lg italic text-[#7a655d]">
                “Every late night thought deserves a place to exist.”
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - ONLY LARGE SCREENS */}
        <div className="relative hidden h-screen w-1/2 overflow-hidden lg:block">
          <img
            src={ThankYouCardImage}
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Floating Card */}
          <div className="absolute bottom-10 left-10 z-10 max-w-md rounded-3xl border border-[#f5eee8]/10 bg-[#f5eee8]/10 p-8 backdrop-blur-xl shadow-2xl">
            <h2 className="text-3xl font-black italic text-stone-100">
              Crafted by Aditya
            </h2>

            <p className="mt-4 text-base leading-7 text-stone-300">
              Built with late-night energy, anime playlists, Cursor, and
              coffee.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-3 w-3 animate-pulse rounded-full bg-amber-400"></div>

              <p className="text-sm font-medium text-stone-300">
                Currently shipping ideas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;