export const BlogSkeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse overflow-hidden rounded-[2rem] border border-[#f5eee8]/40 bg-[#f5eee8]/70 backdrop-blur-xl shadow-lg"
    >
      <div className="p-5 md:p-7">
        
        {/* Top Row */}
        <div className="flex items-center">
          {/* Avatar */}
          <div className="h-10 w-10 rounded-full bg-[#d8cfc8]"></div>

          {/* Name + Date */}
          <div className="ml-4 flex flex-col gap-2">
            <div className="h-3 w-28 rounded-full bg-[#d8cfc8]"></div>

            <div className="h-2 w-20 rounded-full bg-[#e6ddd7]"></div>
          </div>
        </div>

        {/* Title */}
        <div className="mt-6 space-y-3">
          <div className="h-5 w-4/5 rounded-full bg-[#cfc4bc]"></div>

          <div className="h-5 w-2/3 rounded-full bg-[#cfc4bc]"></div>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-3">
          <div className="h-3 w-full rounded-full bg-[#ddd4cd]"></div>

          <div className="h-3 w-full rounded-full bg-[#ddd4cd]"></div>

          <div className="h-3 w-4/5 rounded-full bg-[#ddd4cd]"></div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div className="h-2 w-24 rounded-full bg-[#e6ddd7]"></div>

          <div className="h-8 w-20 rounded-2xl bg-[#d8cfc8]"></div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};