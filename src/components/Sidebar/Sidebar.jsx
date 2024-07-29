import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { FaHandHolding } from "react-icons/fa";
import { BsHandIndexFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "animate.css";


import useLogout from "../../hooks/useLogout";
import Modal from "../Modal/Modal";
import Modal3 from "../Modal/Modal3";

const Sidebar = () => {

  const { handleLogout } = useLogout();
  return (
    <aside
      className="w-1/6 bg-gradient-to-b from-[#080D15] to-gray-900 flex flex-col justify-between items-center px-[1rem] py-[2rem] border-r-[1px] border-slate-500"
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      <ul className="w-full flex flex-col gap-5 ">
        <Link to="/profile">
          <div className="profile-item w-full flex items-center gap-6 text-white text-lg font-semibold cursor-pointer rounded-xl hover:bg-red-500 hover:text-black active:bg-slate-400 px-[1.4rem] h-[2.5rem] animate__animated animate__backInLeft">
            <CgProfile size={24} />
            <Link to="/profile">Profile</Link>
          </div>
        </Link>
        <Link to="/">
          <div className="home-item w-full flex items-center gap-6 text-white text-lg font-semibold cursor-pointer rounded-xl hover:bg-red-500 hover:text-black active:bg-slate-400 px-[1.4rem] h-[2.5rem] animate__animated animate__backInLeft " id="some-element">
            <IoHomeOutline size={24} />
            <li>Home</li>
          </div>
        </Link>
        <Link to="/about">
          <div className="about-item w-full flex items-center gap-6  text-md font-semibold cursor-pointer rounded-xl text-white text-lg hover:bg-red-500 hover:text-black active:bg-slate-400 px-[1.4rem] h-[2.5rem] animate__animated animate__backInLeft">
            <RiTeamLine size={24} />
            <li>About us</li>
          </div>
        </Link>
        <Link to="/faq">
          <div className="faq-item w-full flex items-center gap-6 text-white text-lg font-semibold cursor-pointer rounded-xl hover:bg-red-500  hover:text-black active:bg-slate-400 px-[1.4rem] h-[2.5rem] animate__animated animate__backInLeft ">
            <MdOutlineQuestionMark size={24} />
            <li>FAQs</li>
          </div>
        </Link>
        <div className="faq-item w-full flex items-center text-white text-lg font-semibold cursor-pointer rounded-xl hover:bg-red-500  hover:text-black active:bg-slate-400 px-[1.5rem] h-[2.5rem] animate__animated animate__backInLeft ">
          <BsHandIndexFill />
          <Modal />
        </div>
        <div className="faq-item w-full flex items-center text-lg font-semibold cursor-pointer rounded-xl hover:bg-red-500 text-white hover:text-black active:bg-slate-400 px-[1.5rem] h-auto animate__animated animate__backInLeft ">
          <FaPlus />
          <Modal3 />
        </div>
        <Link to="/rents">
        <div className="faq-item w-full flex items-center text-lg font-semibold cursor-pointer rounded-xl hover:bg-red-500 text-white hover:text-black gap-6 active:bg-slate-400 px-[1.5rem] h-[2.5rem] animate__animated animate__backInLeft ">
          <FaHandHolding size={24}/>
          <h2>Rent</h2>
        </div>
        </Link>
      </ul>
      <div className="listings-item w-full flex items-center gap-6 text-md font-semibold cursor-pointer rounded-xl hover:bg-slate-100 active:bg-slate-400 px-[1.4rem] h-auto py-[15px] hover:text-black ">
        <LuLogOut size={24} color="red" className="rotate-180" />
        <h2 className="text-red-500 font-Poppins " onClick={handleLogout}>
          Logout
        </h2>
      </div>
    </aside>
  );
};

export default Sidebar;
