import { ChangeEvent,  useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { frontendsignupInput } from "../zod";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilState } from "recoil";
import UserInfo from "../hooks/recoil";

const Auth = ({type} : {type : "signup" | "signin"}) => {
    const [userInfo,setUserinfo] = useRecoilState(UserInfo);
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<frontendsignupInput>({
        username : "",
        password : "",
        name : ""
    })

    async function sendReq(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user${type === "signup" ? "/signup" : "/signin"}`, postInputs);
         const jwt = response.data.jwt;
         const name = response.data.name;
         setUserinfo({
            ...userInfo,
            name
         })
         localStorage.setItem("token",jwt);
         navigate("/blogs")
        }
        catch(e){
            alert("Error while signing up")
        }
    }
  return (
    <div className="h-screen flex justify-center bg-stone-100 items-center flex-col">
        <div className="border border-stone-300 shadow-lg hover:animate-jump shadow-stone-400 w-4/5 md:3/5 bg-stone-200 rounded-md flex flex-col">
            <div className="md:text-3xl text-xl md:text-2xl font-bold flex mx-2 flex-row text-slate-800 justify-center mt-3"> {type == "signin" ? "Account Login" : "Create account"}</div>
            <div className="text-slate-600 mx-2 text-sm md:text-md flex flex-row justify-center">{type ==="signin" ?"Don't have an account?" : "Already have an account?"}<Link className="underline ml-2" to={type === "signin" ? "/signup" : "/signin"}>{type == "signin" ? "Sign Up" : "Sign In"}</Link></div>
            
            {type === "signup" ? <LabelledInput  title="Name" placeholder="Adam Young" onChange={(e)=>{
                setpostInputs({
                    ...postInputs,
                    name : e.target.value
                })
            }}></LabelledInput> : null}
            <LabelledInput title="Username" placeholder="adamyoung@gmail.com" onChange={(e)=>{
                setpostInputs({
                    ...postInputs,
                    username : e.target.value
                })
            }}></LabelledInput>
            <LabelledInput title="Password" placeholder="123!@abc" type="password" onChange={(e)=>{
                setpostInputs({
                    ...postInputs,
                    password : e.target.value
                })
            }}></LabelledInput>
            <div className="flex flex-col mb-2 mx-4 md:mx-8 justify-center items-center"><button type="button" onClick={sendReq} className="py-2.5 px-5 w-full my-3 text-sm font-medium text-gray-100 focus:outline-none bg-slate-900 rounded-lg border border-gray-200 hover:bg-slate-800 hover:text-gray-200  focus:ring-gray-100">{type === "signup" ? "Sign Up" : "Sign In"}</button>
            </div>
            
        
        </div>

    </div>
  )
}

export default Auth

interface LabelledInputType {
    title : string;
    placeholder :string;
    onChange : (e: ChangeEvent<HTMLInputElement>) => void;
    type? : string;
}
function LabelledInput({title,placeholder,type,onChange} : LabelledInputType){
       return <div className="mx-4 md:mx-8">
            <label className="block mb-2 mt-1 text-sm font-semibold text-slate-900 ">{title}</label>
            <input onChange={onChange} type={type || "name"} id ="first_name" className="bg-gray-50 border border-stone-400 focus:bg-gray-100  outline-stone-400 focus:outline-stone-500 text-slate-900 text-sm rounded-lg  w-full p-2.5 " placeholder={placeholder} required></input>
       </div>
}