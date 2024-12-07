import { Link } from "react-router-dom";
import leftIcon from "../assets/leftIcon.svg";
import Profile from "../assets/Profile.svg";

import more from "../assets/more.svg";
export default function ProfileUser() {
    return (
      <div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row items-center ml-4 gap-3">
          <Link to="/">
          <img src={leftIcon} alt="" className="" />
          </Link>
          <h3 className="font-semibold text-xl leading-6 font-sans text-[#051320]">Profile & Settings</h3>
          </div>
          <img src={more} alt="more detail" className="ml-3" />
        </div>
        <div className="flex flex-col gap-6 items-center justify-between mt-[64px] mb-10">
          <img src={Profile} alt="profile" className="w-[96px] h-[96px]" />
          <h3 className="text-[#051320] font-bold text-[22px] leading-[33px] font-sans">Reza Alavi</h3>
          <div className="mt-12 mx-6"></div>
          <div className="border border-[#EBEDEC] mt-10"></div>
          <div>1</div>
         <div className="border border-[#EBEDEC] mt-10"></div>

        </div>
      </div>
    )
  }
  