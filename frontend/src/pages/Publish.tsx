import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar />
        <div className="flex justify-center w-full pt-8"> 
            <div className="w-full md:px-48 lg:60">
                <div className="flex justify-center md:justify-normal">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="w-full md:w-4/6 bg-gray-100 border mx-2 border-stone-300 text-gray-900 text-sm rounded-lg focus:outline-slate-500 p-2.5" placeholder="Title" />
                </div>
                

                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="mt-2 ml-2 inline-flex items-center px-2 md:px-5 py-1 md:py-2.5 text-xs md:text-sm font-medium text-center text-gray-100 bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}


function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="mt-2 mx-2 ">
        <div className="w-full mb-4 ">
            <div className="flex items-center rounded-lg justify-between bg-gray-100 border border-slate-300">
            <div className="my-2 bg-gray-100 rounded-b-lg w-full">
                <label className="sr-only">Publish post</label>
                <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-gray-100 border-0 pl-2" placeholder="Write an article..." required />
            </div>
        </div>
       </div>
    </div>
}