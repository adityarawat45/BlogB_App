import { ChangeEvent,  useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { frontendsignupInput } from "../zod";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilState } from "recoil";
import {UserInfo, AuthInfo} from "../hooks/recoil";

const Auth = ({type, onClose} : {type : "signup" | "signin", onClose?: () => void}) => {
    console.log("Rendered the Auth componenet with type : ", type);
    const [userInfo,setUserinfo] = useRecoilState(UserInfo);
    const [authType, setAuthType] = useRecoilState(AuthInfo);
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<frontendsignupInput>({
        username : "",
        password : "",
        name : ""
    })

    useEffect(() => {
        if (!onClose) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey)
        // prevent background scroll while modal is open
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

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
    // if onClose is provided, render as a modal card (don't occupy full-screen)
    const outerClass = onClose ? "flex justify-center w-2/3 h-screen items-center p-4" : "flex justify-center bg-slate-500 h-screen w-screen rounded-lg flex-col";
    const cardClass = "shadow-lg shadow-stone-400 md:w-1/3 w-screen bg-stone-300 rounded-2xl flex flex-col justify-center relative";

    return (
        <div className={outerClass}>
                <div className={cardClass} onClick={(e)=>e.stopPropagation()}>
                        {onClose && (
                                <button aria-label="Close" onClick={onClose} className="absolute top-3 right-3 text-stone-700 hover:text-stone-900">✕</button>
                        )}
            <div className="md:text-3xl text-xl font-bold flex mx-2 flex-row text-stone-700 justify-center mt-3"> {type == "signin" ? "Account Login" : "Create account"}</div>
            <div className="text-stone-700  mx-2 text-sm md:text-md flex flex-row justify-center">{type ==="signup" ?"Don't have an account?" : "Already have an account?"}<button className="underline ml-2" onClick={()=>{setAuthType( type === "signin" ? "signup" : "signin")}}> {authType} </button></div>
            {type === "signup" ? <LabelledInput  title="Name" placeholder="Adam Young" onChange={(e)=>{
                setpostInputs({
                    ...postInputs,
                    name : e.target.value
                })
            }}></LabelledInput> : null}
            <LabelledInput title="Username" placeholder="Username/Email" onChange={(e)=>{
                setpostInputs({
                    ...postInputs,
                    username : e.target.value
                })
            }}></LabelledInput>
            <LabelledInput title="Password" placeholder="Password" type="password" onChange={(e)=>{
                setpostInputs({
                    ...postInputs,
                    password : e.target.value
                })
            }}></LabelledInput>
            <div className="flex flex-col mb-2 mx-4 md:mx-8 justify-center items-center"><button type="button" onClick={sendReq} className="py-2.5 px-5 w-full my-3 text-sm font-medium text-gray-100 focus:outline-none bg-stone-900 rounded-lg border border-gray-200 hover:bg-stone-700 hover:text-gray-200  focus:ring-gray-100">{type === "signup" ? "Sign Up" : "Sign In"}</button>
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
            <label className="block mb-2 mt-1 text-sm font-semibold text-stone-700  ">{title}</label>
          <input onChange={onChange} type={type || "text"} id ="first_name" className="bg-gray-50 border border-stone-400 focus:bg-gray-100  outline-stone-400 focus:outline-stone-500 text-stone-700 text-sm rounded-lg  w-full p-2.5 " placeholder={placeholder} required></input>
       </div>
}