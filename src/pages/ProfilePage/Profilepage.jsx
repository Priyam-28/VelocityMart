/* eslint-disable no-unused-vars */
import React from "react";
import ProfileSection from "../../components/ProfileSection/ProfileSection.jsx";
import FeedPosts from "../../components/FeedPosts/FeedPosts.jsx";
// import ProfileSection from "./components/ProfileSection/ProfileSection";
import LogInNav from "../../components/LogInNav/LogInNav.jsx";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer.jsx";

export default function Profilepage() {
  return (
    <div id="profilePage">
      {/* <ProfileSection/> */}
      <LogInNav />
      <div className="flex mt-[var(--navbar-height)]">
        <Sidebar />
        <ProfileSection />
      </div>
      <Footer />
    </div>
  );
}
