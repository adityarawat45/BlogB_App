import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { IoSparkles } from "react-icons/io5";

const currentDate = new Date();

let publishedDate = `${currentDate.toDateString().slice(4)}`;

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#ddd6cf]">
      {/* Background Glow */}
      <div className="absolute top-[-10rem] left-[-10rem] h-[25rem] w-[25rem] rounded-full bg-amber-300/20 blur-3xl"></div>

      <div className="absolute bottom-[-10rem] right-[-10rem] h-[25rem] w-[25rem] rounded-full bg-orange-200/10 blur-3xl"></div>

      <Appbar />

      {/* Main Content */}
      <div className="relative z-10 flex justify-center px-4 pt-28 pb-10">
        <div className="w-full max-w-5xl rounded-[2rem] border border-[#f5eee8]/40 bg-[#f5eee8]/70 p-5 md:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#5c4b44] p-2 text-[#f8f5f2]">
                <IoSparkles />
              </div>

              <div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#5c4b44]">
                  Create Story
                </h1>

                <p className="mt-1 text-sm md:text-base italic text-[#7a655d]">
                  Turn your thoughts into something beautiful.
                </p>
              </div>
            </div>
          </div>

          {/* Title Input */}
          <div>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="w-full rounded-2xl border border-[#d8cfc8] bg-[#f8f5f2]/80 p-4 text-2xl md:text-4xl font-black tracking-tight text-[#5c4b44] placeholder-[#a39188] outline-none transition-all duration-300 focus:border-[#b79f91] focus:bg-[#f8f5f2]"
              placeholder="Give your story a title..."
            />
          </div>

          {/* Editor */}
          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          {/* Bottom Actions */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            
            {/* Date */}
            <div className="text-sm italic text-[#8a766d]">
              Publishing on {publishedDate}
            </div>

            {/* Publish Button */}
            <button
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
                    publishedDate,
                    content: description,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );

                navigate(`/blog/${response.data.id}`);
              }}
              type="submit"
              className="rounded-2xl bg-[#5c4b44] px-6 py-3 text-sm md:text-base font-bold text-[#f8f5f2] transition-all duration-300 hover:scale-[1.02] hover:bg-[#4b3d37] hover:shadow-2xl"
            >
              Publish Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-6">
      <div className="rounded-[2rem] border border-[#d8cfc8] bg-[#f8f5f2]/70 backdrop-blur-xl overflow-hidden">
        
        {/* Toolbar */}
        <div className="border-b border-[#e5dbd4] px-5 py-3">
          <div className="text-sm font-medium italic text-[#8a766d]">
            Your thoughts begin here...
          </div>
        </div>

        {/* Textarea */}
        <textarea
          onChange={onChange}
          id="editor"
          rows={16}
          className="block w-full resize-none bg-transparent px-5 py-5 text-base leading-8 text-[#5c4b44] outline-none placeholder-[#a39188]"
          placeholder="Write an article..."
          required
        />
      </div>
    </div>
  );
}