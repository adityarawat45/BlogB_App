import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blog = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div>
                <Appbar></Appbar>
                <div className="w-full flex flex-col justify-center items-center">
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
            </div>

            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="justify-center px-3 max-w-screen-lg">
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                publishedDate={blog.publishedDate || "31 Dec, 2024"}
                                authorName={blog.author?.name || "Nothing"} 
                                content={blog.content}
                                title={blog.title}
                            />
                        ))} 
                </div>
            </div>
        </div>
    );
};
