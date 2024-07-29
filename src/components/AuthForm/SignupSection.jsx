/* eslint-disable no-unused-vars */
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiSignatureDuotone } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const SignupSection = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignUpWithEmailAndPassword();
  return (
    <>
      <main className="w-full px-[6rem] pt-[3rem] pb-[5rem] bg-white flex relative ">
        <div className="hero-img w-3/6 flex items-center">
          <img
            src="sign-up.gif"
            alt="College.svg"
            width="550px"
            height="550px"
          />
        </div>
        <section className="w-3/6 flex items-center justify-center flex-col">
          <div className="login-container flex items-center flex-col gap-8 p-[2.5rem] border-2">
            <div className="header-login flex flex-col gap-3">
              <h2 className="text-3xl text-black font-bold">
                Create an account
              </h2>
            </div>
            <form action="" className="flex flex-col gap-5">
              <div className="email-cont flex justify-center items-center gap-3">
                <MdOutlineEmail size={20} />
                <input
                  type="email"
                  placeholder="Enter your VIT mail"
                  className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1 w-[230px] text-[15px]"
                  value={inputs.value}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
              </div>
              <div className="name-cont flex justify-center items-center gap-3">
                <PiSignatureDuotone size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1  w-[230px] text-[15px]"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
              <div className="username cont flex justify-center items-center gap-3">
                <FaRegUser size={20} />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1  w-[230px] text-[15px]"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </div>

              <div className="password-cont flex justify-center items-center gap-3">
                <RiLockPasswordLine size={20} />
                <input
                  type="password"
                  name="password"
                  id=""
                  value={inputs.password}
                  placeholder="Password"
                  className="px-3 py-1 bg-transparent border-b-2 border-slate-600 placeholder:text-slate-400 pl-1 w-[230px] text-[15px]"
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
            </form>
            <div className="buttons w-full flex flex-col justify-around mt-[1rem] gap-4">
              <button
                type="button"
                className=" bg-[#DB4444] flex justify-center items-center text-white font-medium  text-sm h-9 w-full rounded-sm hover:text-[#DB4444] hover:bg-transparent hover:border-2 border-[#DB4444] hover:font-semibold"
                onClick={() => signup(inputs)}
                disabled={loading}
              >
                Sign up
              </button>
              <div className="login-link flex justify-center items-center gap-2">
                <p className="text-sm text-black font-base">
                  Already have an account?
                </p>
                <Link
                  to="/login"
                  href="#"
                  className="text-sm text-black font-medium underline decoration-2 underline-offset-4"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignupSection;
