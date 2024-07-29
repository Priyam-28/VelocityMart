/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import LogInNav from "../LogInNav/LogInNav";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";

const LoginSection = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();
  return (
    <>
      {/* <LogInNav /> */}
      <main className="w-full pb-[3rem] px-[6rem] bg-white flex relative h-screen">
        <div className="hero-img w-3/6 flex items-center">
          <img
            src="secure-login.gif"
            alt="College.svg"
            width="600px"
            height="600px"
          />
        </div>
        <section className="w-3/6 flex items-center justify-center flex-col">
          <div className="login-container flex items-start flex-col gap-8 p-[1.5rem] border-2">
            <div className="header-login flex flex-col gap-3">
              <h2 className="text-3xl text-black font-bold">
                Login in to VelocityMart
              </h2>
              <p className="text-slate-700 text-lg">Enter your details here</p>
            </div>
            <form action="" className="flex flex-col gap-4">
              <div className="email-cont flex justify-center items-center gap-3">
                <MdOutlineEmail size={20} />
                <input
                  type="email"
                  placeholder="Enter your VIT mail"
                  className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1 w-[230px] text-[15px] "
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
              </div>
              <div className="password-cont flex justify-center items-center gap-3">
                <RiLockPasswordLine size={20} />
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1 w-[230px] text-[15px]"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
            </form>
            <div className="buttons w-full flex flex-col justify-around mt-[1rem]">
              <button
                type="button"
                className=" bg-[#DB4444] w-full flex justify-center items-center text-white font-medium h-[36px] text-sm  rounded-sm hover:text-[#DB4444] hover:bg-transparent hover:border-2 border-[#DB4444]"
                onClick={() => login(inputs)}
              >
                Login
              </button>
              <div
                type="button"
                className="flex gap-2 justify-center items-center text-black text-sm font-medium px-6 py-2 rounded-sm hover:decoration-2 mt-3"
              >
                <p className="font-normal">Don't have an account</p>
                <span className="underline underline-offset-4 decoration-2 cursor-pointer">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginSection;
