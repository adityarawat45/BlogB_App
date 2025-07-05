import { Link } from "react-router-dom";

interface BlogCardProps {
    id : number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <Avatar name={authorName} />
            <div className="font-semibold pl-2  text-slate-800 text-xs md:text-sm md:text-md flex justify-center flex-col">{authorName}</div>
            <div className="flex justify-center flex-col pl-2">
                <Circle />
            </div>
            <div className="pl-2 font-semibold text-slate-800 text-xs md:text-sm md:text-mdg flex justify-center flex-col">
                {publishedDate}
            </div>
        </div>
        <div className=" text-lg md:text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-sm md:text-md font-normal">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
    </div>
</Link>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-700"></div>;
}

export function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 md:w-7 md:h-7 overflow-hidden bg-slate-900 rounded-full">
            <span className="font-normal text-xs text-neutral-300">{name[0]}</span>
        </div>
    );
}

export function CustomAvatar({name}:{name : string})  {
    return <div className="relative inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 overflow-hidden bg-slate-900 rounded-full">
        <span className="font-normal text-xs text-neutral-300 ">{name[0]}</span>
          </div>  
}