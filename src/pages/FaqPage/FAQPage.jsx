/* eslint-disable no-unused-vars */
import LogInNav from "../../components/LogInNav/LogInNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import FAQ from "../../components/FAQ/FAQ";

export default function FAQPage() {
  return (
    <div className="bg-[#141414]">
      <LogInNav />
      <div className="main-section-home flex w-full mt-[var(--navbar-height)] overflow-y-auto">
        <Sidebar />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
