/* eslint-disable no-unused-vars */
import React from "react";
import LoginInNav from "../../components/LogInNav/LogInNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

function AboutPage() {
  return (
    <div>
      <LoginInNav />
      <div className="flex mt-[var(--navbar-height)]">
        <Sidebar />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
