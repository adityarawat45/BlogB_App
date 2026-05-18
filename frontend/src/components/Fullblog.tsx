import { useRecoilValue } from "recoil";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import { UserInfo } from "../hooks/recoil";

//@ts-ignore
export const Fullblog = ({ blog }) => {
  const userInfo = useRecoilValue(UserInfo);

  return (
    <div className="min-h-screen bg-[#ddd6cf] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10rem] left-[-10rem] h-[25rem] w-[25rem] rounded-full bg-amber-300/20 blur-3xl"></div>

      <div className="absolute bottom-[-10rem] right-[-10rem] h-[25rem] w-[25rem] rounded-full bg-orange-200/10 blur-3xl"></div>

      <Appbar />

      <div className="relative z-10 flex justify-center px-4 pt-24 pb-8">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* BLOG CONTENT */}
          <div className="lg:col-span-8">
            <div className="rounded-[2rem] border border-[#f5eee8]/40 bg-[#f5eee8]/70 backdrop-blur-xl p-6 md:p-10 shadow-xl">
              
              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-[#5c4b44]">
                {blog.title}
              </h1>

              {/* Date */}
              <div className="pt-4 text-sm md:text-base text-[#8a766d] italic">
                {blog.publishedDate}
              </div>

              {/* Content */}
              <div className="pt-8 text-[#5f524c] leading-8 text-base md:text-lg whitespace-pre-wrap">
                {blog.content}
              </div>

              {/* MOBILE AUTHOR */}
              <div className="mt-12 lg:hidden rounded-3xl border border-[#e7ddd6] bg-white/30 p-5 backdrop-blur-lg">
                <div className="text-[#7a655d] text-sm font-semibold uppercase tracking-widest">
                  Author
                </div>

                <div className="flex items-center mt-4">
                  <div className="pr-4">
                    <Avatar name={blog.author.name || "Anonymous"} />
                  </div>

                  <div>
                    <div className="text-xl font-bold text-[#5c4b44]">
                      {blog.author.name || "Anonymous"}
                    </div>

                    <div className="pt-1 text-[#8a766d] text-sm">
                      {userInfo.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP AUTHOR SIDEBAR */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 rounded-[2rem] border border-[#f5eee8]/40 bg-[#f5eee8]/60 backdrop-blur-xl p-8 shadow-xl">
              
              <div className="text-[#7a655d] text-sm font-semibold uppercase tracking-widest">
                Author
              </div>

              <div className="flex mt-6">
                <div className="pr-5 flex flex-col justify-start">
                  <Avatar name={blog.author.name || "Anonymous"} />
                </div>

                <div>
                  <div className="text-2xl font-black text-[#5c4b44]">
                    {blog.author.name || "Anonymous"}
                  </div>

                  <div className="pt-3 text-[#8a766d] leading-7">
                    {userInfo.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};