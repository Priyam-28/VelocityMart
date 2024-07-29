/* eslint-disable no-unused-vars */
import "./index.css";
import { Toaster } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
import LoginSection from "./components/AuthForm/LoginSection";
import SignupSection from "./components/AuthForm/SignupSection";
import { auth } from "./firebase/firebase";
import Profilepage from "./pages/ProfilePage/Profilepage";
import AboutPage from "./pages/AuthPage/AboutPage";
import AboutPageSkeleton from "./pages/AuthPage/AboutPageSkeleton";
import HomePageSkeleton from "./pages/HomePage/HomePageSkeleton";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePageSkeleton from "./pages/ProfilePage/ProfilePageSkeleton";
import PageLayout from "./Page Layout/PageLayout";
import TestPage from "./pages/TestPage";
import FAQPage from "./pages/FaqPage/FAQPage";

import Test from "./pages/TestPage/Test";
import Rent from "./pages/Rent";

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginSection /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignupSection /> : <Navigate to="/" />}
        />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/rents" element={<Rent />} />
      </Routes>
      
      <Toaster />
    </>
  );
}

export default App;
