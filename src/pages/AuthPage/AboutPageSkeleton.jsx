const AboutPageSkeleton = () => {
  return (
    <div>
      <div className="navbar skeleton rounded-none h-[4rem] fixed top-0 z-10"></div>
      <div className="flex mt-[4rem] h-screen">
        <div className="sidebar w-1/6 rounded-none p-5  flex flex-col justify-between">
          <ul className="flex flex-col gap-3">
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
          </ul>
          <div className="w-full h-[50px] skeleton relative -top-[5rem]"></div>
        </div>
        <div className="homepage w-5/6 rounded-none py-6 px-32 flex flex-col gap-8 items-center">
          <div className="w-[200px] h-[50px] skeleton rounded-2xl"></div>
          <div className="w-full h-[250px] skeleton"></div>
          <div className="circle-container-skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageSkeleton;
