import { GiElectricalResistance } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { IoBookSharp } from "react-icons/io5";
import { FaBucket } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import ItemDisplaySection from "../ItemDisplaySection/ItemDisplaySection";
import Slideshow from "../Slideshow/Slideshow";
import 'animate.css';

const HomeSection = () => {
  const categoryList = [
    {
      title: "Electrical and Mechanical components",
      img: <GiElectricalResistance size={30} />,
    },
    {
      title: "Sports and gym",
      img: <CgGym size={30} />,
    },
    {
      title: "Academic",
      img: <IoBookSharp size={30} />,
    },
    {
      title: "Amenities",
      img: <FaBucket size={30} />,
    },
    {
      title: "Others",
      img: <FaCartPlus size={30} />,
    },
  ];
  return (
    <main
      className="w-5/6 overflow-y-auto flex flex-col scrollbar-hidden"
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      {/* <div className="carousel min-h-[400px] overflow-hidden border-black border">
        <div className="carousel-inner *:w-[250px] animate-scroll grid grid-flow-col gap-[10.5rem] auto-cols-[5rem]">
          <div className="carousel-item flex">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Burger"
              className="w-full h-auto"
            />
          </div>
          <div className="carousel-item flex">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Burger"
              className="w-full h-auto"
            />
          </div>
          <div className="carousel-item flex">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
              className="w-full h-auto"
            />
          </div>
          <div className="carousel-item flex">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
              className="w-full h-auto"
            />
          </div>
          <div className="carousel-item flex">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
              className="w-full h-auto"
            />
          </div>
          <div className="carousel-item flex">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
              className="w-full h-auto"
            />
          </div>
          <div className="carousel-item flex">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Burger"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div> */}

      <Slideshow />

      <div className="categories w-full bg-white px-10 pt-10 m-0  ">
        <h2 className="text-2xl font-bold mb-10">
          Browse by categories
        </h2>
        <div className="categories-container flex justify-between animation-element">
          {categoryList.map((catItem, index) => {
            return (
              <div
                className="catItem border-[3px] border-black h-[10rem] w-[10rem] text-black text-lg font-bold flex flex-col gap-3 justify-center items-center text-center hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer active:border-[2.5px] active:border-red-500 active:text-red-500 active:bg-transparent"
                key={index}
              >
                <h2>{catItem.title}</h2>
                {catItem.img}
              </div>
            );
          })}
        </div>
      </div>
      <ItemDisplaySection />
    </main>
  );
};

export default HomeSection;
