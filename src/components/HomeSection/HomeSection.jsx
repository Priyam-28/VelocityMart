/* eslint-disable no-unused-vars */
import { useState } from "react";
import { GiElectricalResistance } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { IoBookSharp } from "react-icons/io5";
import { FaBucket } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import Slideshow from "../Slideshow/Slideshow";
import FilteredSportsAndGym from "../../pages/FilteredPage/FilteredSportsAndGym";
import FilteredElectricalAndMechanics from "../../pages/FilteredPage/FilteredElectricalAndMechanics";
import FilteredAcademics from "../../pages/FilteredPage/FilteredAcademics";
import FilteredAmeneties from "../../pages/FilteredPage/FilteredAmeneties";
import FeedPosts from "../FeedPosts/FeedPosts";
import FeedRents from "../FeedRents/FeedRents";

const HomeSection = () => {

 
 
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  const handleBackButtonClick = () => {
    setSelectedCategoryIndex(null);
  };

  const categoryList = [
    {
      title: "Electrical components",
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
      title: "Mechanical components",
      img: <FaCartPlus size={30} />,
    },
  ];

  return (
    <main
      className="w-5/6 overflow-y-auto  flex flex-col scrollbar-hidden bg-gradient-to-b from-[#101826] to-[#06090E]"
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      <Slideshow />
      <div className="divider"></div>
      {/* categories */}
      <div className="categories w-full bg-transparent px-10 pt-10 m-0 bg-gradient-to-b from-[#06090E] to-gray-900">
        <h2 className="text-2xl font-bold text-gray-200 mb-10" >
          Browse by categories
        </h2>
        <div className="categories-container flex justify-between animation-element">
          {categoryList.map((catItem, index) => (
            <div
              className={`catItem border-[3px] rounded-xl bg-transparent border-neutral-200 h-[10rem] w-[10rem] text-white font-mono text-lg font-bold flex flex-col gap-3 justify-center items-center text-center hover:bg-red-500 hover:border-red-500 hover:text-black cursor-pointer active:border-[2.5px] active:border-red-500 active:text-red-500 active:bg-transparent animate_animated hover:animate__pulse ${
                selectedCategoryIndex === index ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleCategoryClick(index)}
            >
              <h2 className="">{catItem.title}</h2>
              {catItem.img}
            </div>
          ))}
        </div>

        <div className="item-section py-10 bg-transparent w-auto overflow-x-scroll">
          <h1 className="text-2xl text-gray-200 font-bold mb-8">Products</h1>
          <div className="item-container h-96 flex flex-col">
            <div className="item-container h-96 flex flex-col items-start flex-wrap">
              {selectedCategoryIndex === null ? (
                <FeedPosts/>
              ) : (
                <>
                  {selectedCategoryIndex === 0 && (
                    <FilteredElectricalAndMechanics />
                  )}
                  {selectedCategoryIndex === 1 && <FilteredSportsAndGym />}
                  {selectedCategoryIndex === 2 && <FilteredAcademics />}
                  {selectedCategoryIndex === 3 && <FilteredAmeneties />}
                    <div className="">
                    <button
                      className="back-button rounded-xl w-[11rem] h-[35px] mt-6 bg-red-500 text-white"
                      onClick={handleBackButtonClick}
                    >
                      Back to All Products
                    </button>
                  </div>
  
              </>
              )}
            </div>
          </div>
        </div>
          {/* <FeedRents /> */}
      </div>
    </main>
  );
};

export default HomeSection;
