import LogInNav from "../components/LogInNav/LogInNav";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Login() {
  return (
    <div>
      {/* <button onClick={hello}>Login</button> */}
      <LogInNav />
      {/* <LoginSection /> */}
      {/* <SignupSection /> */}
      <Sidebar />
      <Footer />
    </div>
  );
}
