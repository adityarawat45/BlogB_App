import { ChangeEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { frontendsignupInput } from "../zod";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilState } from "recoil";
import { UserInfo, AuthInfo } from "../hooks/recoil";

const Auth = ({
  type,
  onClose,
}: {
  type: "signup" | "signin";
  onClose?: () => void;
}) => {
  const [userInfo, setUserinfo] = useRecoilState(UserInfo);
  const [, setAuthType] = useRecoilState(AuthInfo);

  const navigate = useNavigate();

  const [postInputs, setpostInputs] = useState<frontendsignupInput>({
    username: "",
    password: "",
    name: "",
  });

  const [authError, setAuthError] = useState<string>("");

  useEffect(() => {
    if (!onClose) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  async function sendReq() {
    setAuthError("");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user${
          type === "signup" ? "/signup" : "/signin"
        }`,
        postInputs,
      );

      const jwt = response.data.jwt;
      const name = response.data.name;

      setUserinfo({
        ...userInfo,
        name,
      });

      localStorage.setItem("token", jwt);

      navigate("/blogs");
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        setAuthError(String(e.response.data.message));
      } else {
        setAuthError("Unable to complete authentication. Please try again.");
      }
    }
  }

  const outerClass = onClose
    ? "flex justify-center w-full min-h-screen items-center pt-20 pb-6 px-4"
    : "flex justify-center h-screen w-screen rounded-lg flex-col bg-[#ddd6cf]";

  const cardClass =
    "shadow-2xl md:w-2/5 w-[100%] bg-[#ebe3dc]/80 backdrop-blur-2xl border border-[#f5eee8]/40 rounded-[2rem] flex flex-col justify-center relative overflow-hidden";

  return (
    <div className={outerClass}>
      <div className={cardClass} onClick={(e) => e.stopPropagation()}>
        {/* Glow */}
        <div className="absolute top-[-5rem] right-[-5rem] h-40 w-40 rounded-full bg-amber-200/20 blur-3xl"></div>

        {/* Close Button */}
        {onClose && (
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-4 right-4 text-[#7a655d] hover:text-[#5c4b44] transition-colors text-lg"
          >
            ✕
          </button>
        )}

        {/* Heading */}
        <div className="md:text-4xl text-xl font-black flex mx-2 flex-row text-[#5c4b44] justify-center mt-5 md:mt-8 tracking-tight">
          {type === "signin" ? "Welcome Back" : "Create Account"}
        </div>

        {/* Switch Auth */}
        <div className="text-[#7a655d] mx-2 text-sm md:text-base flex flex-row justify-center mt-2">
          {type === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            className="underline ml-2 hover:text-[#5c4b44] transition-colors"
            onClick={() => {
              const nextType = type === "signin" ? "signup" : "signin";

              setAuthError("");
              setAuthType(nextType);

              setpostInputs({
                username: "",
                password: "",
                name: "",
              });
            }}
          >
            {type === "signin" ? "Sign Up" : "Sign In"}
          </button>
        </div>

        {/* Error */}
        {authError ? (
          <div className="mx-5 md:mx-8 mt-3 flex justify-center rounded-xl bg-red-100/70 px-3 py-2 text-sm font-semibold text-red-500 backdrop-blur-md">
            {authError}
          </div>
        ) : null}

        {/* Inputs */}
        <div className="mt-1 md:mt-2">
          {type === "signup" ? (
            <LabelledInput
              title="Name"
              placeholder="Adam Young"
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          ) : null}

          <LabelledInput
            title="Username"
            placeholder="Username / Email"
            onChange={(e) => {
              setpostInputs({
                ...postInputs,
                username: e.target.value,
              });
            }}
          />

          <LabelledInput
            title="Password"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setpostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col mb-4 md:mb-5 mx-4 md:mx-8 justify-center items-center mt-3">
          <button
            type="button"
            onClick={sendReq}
            className="py-2.5 md:py-3 px-5 w-full my-3 text-sm font-bold text-[#f8f5f2] bg-[#5c4b44] rounded-2xl hover:bg-[#4b3d37] transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface LabelledInputType {
  title: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  title,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div className="mx-4 md:mx-8">
      <label className="block mb-1.5 mt-2 text-sm font-semibold text-[#6d5c54]">
        {title}
      </label>

      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-[#f8f5f2]/80 border border-[#d8cfc8] focus:bg-[#f8f5f2] outline-none focus:border-[#b79f91] text-[#5c4b44] text-sm rounded-2xl w-full p-2.5 md:p-3 transition-all duration-300 backdrop-blur-sm"
        placeholder={placeholder}
        required
      />
    </div>
  );
}