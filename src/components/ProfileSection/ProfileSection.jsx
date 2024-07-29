/* eslint-disable no-unused-vars */

import React from 'react';
import useAuthStore from "../../store/authStore";
import useUserProfileStore from "../../store/userProfileStore";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const ProfileSection = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  let fullName = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).fullName : "";
  let email = localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).email : "";

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#080D15] to-gray-900 w-5/6 overflow-y-scroll" style={{height: "calc(100vh - var(--navbar-height))"}}>
      <div className="flex flex-row m-0 p-10 justify-start gap-14 items-center">
        <div className="avatar">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://avatar.iran.liara.run/public" alt="Avatar" />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl text-red-600 font-mono font-bold animate__animated ">{fullName}</h1>
          <h2 className="text-[#b6b5b5] pt-2 pb-1">{email}</h2>
          <p className="text-[#b6b5b5] pt-2 pb-1">A-637 VIT,Chennai</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 pt-4">
        <button className="btn btn-sm text-white btn-neutral">Your Added Items</button>
        <button className="btn btn-sm bg-[#DC2626] text-white px-10">History</button>
      </div>

      <div className="divider"></div>
      
      <div>
        {/* <Card /> */}
      </div>
    </div>
  );
};

export default ProfileSection;
