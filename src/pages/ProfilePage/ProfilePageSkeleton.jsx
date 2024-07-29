const ProfilePageSkeleton = () => {
  return (
    <div>
      <div className="navbar skeleton rounded-none h-[4rem] fixed top-0 z-10"></div>
      <div className="flex mt-[4rem]">
        <div className="sidebar w-1/6 rounded-none p-5 flex flex-col justify-between h-screen">
          <ul className="flex flex-col gap-3">
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
          </ul>
          <div className="w-full h-[50px] skeleton relative -top-[3rem]"></div>
        </div>
        <div className="profile-section-skeleton w-5/6 py-16 px-12 flex flex-col gap-12">
          <div className="section-header-skeleton flex justify-between">
            <div className="profile-img-skeleton h-[7rem] min-w-[7rem] rounded-full skeleton"></div>
            <div className="profile-details-skeleton w-full ml-[2rem]">
              <ul className="flex flex-col gap-3">
                <li className="w-[200px] h-8 skeleton"></li>
                <li className="w-[170px] h-8 skeleton"></li>
                <li className="w-[600px] h-8 skeleton"></li>
              </ul>
            </div>
          </div>
          <div className="card-container-skeleton w-full h-[300px]">
            <ul className="w-full flex gap-6">
              <li className="card w-[330px] h-[300px]  skeleton"></li>
              <li className="card w-[330px] h-[300px] skeleton"></li>
              <li className="card w-[330px] h-[300px] skeleton"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageSkeleton;
