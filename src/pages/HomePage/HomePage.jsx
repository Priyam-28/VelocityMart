/* eslint-disable no-unused-vars */
import LogInNav from "../../components/LogInNav/LogInNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import HomeSection from "../../components/HomeSection/HomeSection";
import UserPosts from "../../components/UserPosts/UserPosts";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-[#FADAD4]">
      <LogInNav />
      <div className="main-section-home flex w-full mt-[var(--navbar-height)] ">
        <Sidebar />
        <HomeSection />
        {/* <UserPosts/> */}
      </div>
      <Footer />
    </div>
  );
}
