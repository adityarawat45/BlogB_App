import { useRecoilValue } from "recoil"
import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import UserInfo from "../hooks/recoil"

export const Fullblog = ({ blog }: {blog: Blog}) => {
    const userInfo = useRecoilValue(UserInfo);
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="md:grid md:grid-cols-12 w-full pt-200 max-w-screen-xl">
                <div className="col-span-8 pt-2 px-6 md:px-9 md:pt-8">
                    <div className="text-3xl md:text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        {blog.publishedDate}
                    </div>
                    <div className="pt-2">
                        {blog.content}
                    </div>
                </div>
                <div className="invisible md:visible ml-5 col-span-4 py-3 h-screen px-4 border-l-2 bg-stone-100 border-stone-300">
                <div className="">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                {userInfo.description}
                            </div>
                        </div>
                    </div>  
                </div>
                </div>
            </div>
        </div>
    </div>
} 