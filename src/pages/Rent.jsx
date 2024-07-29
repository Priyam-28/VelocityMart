import FeedRents from "../components/FeedRents/FeedRents"
import Footer from "../components/Footer/Footer"
import LogInNav from "../components/LogInNav/LogInNav"
import Sidebar from "../components/Sidebar/Sidebar"


const Rent = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-[#FADAD4]">
      <LogInNav />
      <div className="main-section-home flex w-full mt-[var(--navbar-height)] ">
        <Sidebar />
    <FeedRents />
        {/* <UserPosts/> */}
      </div>
      <Footer />
    </div>
  )
}

export default Rent
