import { ChangeEvent,  useState } from "react";
import { useNavigate } from "react-router-dom"
import { frontendsignupInput } from "../zod";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilState } from "recoil";
import {UserInfo, AuthInfo} from "../hooks/recoil";

const Auth = ({type} : {type : "signup" | "signin"}) => {
    console.log("Rendered the Auth componenet with type : ", type);
    const [userInfo,setUserinfo] = useRecoilState(UserInfo);
    const [authType, setAuthType] = useRecoilState(AuthInfo);
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
    <div className="flex justify-center h-screen w-screen rounded-lg items-center flex-col">
        <div className="shadow-lg shadow-stone-400 md:w-1/3 w-auto bg-stone-300 rounded-2xl flex flex-col justify-center ">
            <div className="md:text-3xl text-xl font-bold flex mx-2 flex-row text-stone-700 justify-center mt-3"> {type == "signin" ? "Account Login" : "Create account"}</div>
            <div className="text-stone-700  mx-2 text-sm md:text-md flex flex-row justify-center">{type ==="signin" ?"Don't have an account?" : "Already have an account?"}<button className="underline ml-2" onClick={()=>{setAuthType( type === "signin" ? "signup" : "signin")}}> {authType} </button></div>
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
            <input onChange={onChange} type={type || "name"} id ="first_name" className="bg-gray-50 border border-stone-400 focus:bg-gray-100  outline-stone-400 focus:outline-stone-500 text-stone-700 text-sm rounded-lg  w-full p-2.5 " placeholder={placeholder} required></input>
       </div>
}