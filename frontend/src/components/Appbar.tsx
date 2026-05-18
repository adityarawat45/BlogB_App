import { Link, useNavigate } from "react-router-dom";
import { CustomAvatar } from "./BlogCard";
import { IoAddCircle } from "react-icons/io5";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { UserInfo } from "../hooks/recoil";
import { HiOutlineLogout } from "react-icons/hi";

export const Appbar = () => {
  const userinfo = useRecoilValue(UserInfo);
  const resetUser = useResetRecoilState(UserInfo);

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    resetUser();
    navigate("/");
  }

  return (
    <div className="fixed top-4 left-1/2 z-50 w-[95%] -translate-x-1/2">
      <div className="flex items-center justify-between rounded-3xl border border-[#f5eee8]/40 bg-[#ebe3dc]/70 px-4 py-3 backdrop-blur-2xl shadow-xl md:px-8">
        
        {/* Logo */}
        <Link to="/">
          <div className="text-xl md:text-2xl font-black tracking-tight cursor-pointer text-[#5c4b44]">
            Blogster
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Write Button */}
          <Link to="/publish">
            <button
              type="button"
              className="group flex items-center rounded-2xl bg-[#5c4b44] px-3 md:px-5 py-2 text-xs md:text-sm font-semibold text-[#f8f5f2] transition-all duration-300 hover:scale-[1.03] hover:bg-[#4b3d37] hover:shadow-xl"
            >
              <span className="hidden md:block">Write</span>

              <div className=" md:ml-2cl text-base transition-transform duration-300 group-hover:rotate-90">
                <IoAddCircle />
              </div>
            </button>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center justify-center rounded-2xl border border-[#d8cfc8] bg-white/40 p-2.5 text-[#5c4b44] backdrop-blur-xl transition-all duration-300 hover:bg-white/70 hover:shadow-lg"
          >
            <HiOutlineLogout className="text-lg" />
          </button>

          {/* Avatar */}
          <div className="scale-95 md:scale-100">
            <CustomAvatar name={userinfo.name} />
          </div>
        </div>
      </div>
    </div>
  );
};