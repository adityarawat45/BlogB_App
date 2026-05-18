import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blog = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#ddd6cf]">
        <Appbar />

        <div className="flex flex-col items-center px-4 pt-28 pb-10">
          <div className="w-full max-w-3xl space-y-6">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#ddd6cf]">
      {/* Background Glow */}
      <div className="absolute top-[-10rem] left-[-10rem] h-[25rem] w-[25rem] rounded-full bg-amber-300/20 blur-3xl"></div>

      <div className="absolute bottom-[-10rem] right-[-10rem] h-[25rem] w-[25rem] rounded-full bg-orange-200/10 blur-3xl"></div>

      <Appbar />

      {/* Blog List */}
      <div className="relative z-10 flex justify-center px-4 pt-28 pb-10">
        <div className="w-full max-w-3xl space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden rounded-[2rem] border border-[#f5eee8]/40 bg-[#f5eee8]/70 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl px-2 md:px-0"
            >
              <BlogCard
                id={blog.id}
                publishedDate={blog.publishedDate || "31 Dec, 2024"}
                authorName={blog.author?.name || "Anonymous"}
                content={blog.content}
                title={blog.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};