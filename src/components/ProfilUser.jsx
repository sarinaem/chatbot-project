import { Link } from "react-router-dom";
import leftIcon from "../assets/leftIcon.svg";
import Profile from "../assets/Profile.svg";
import more from "../assets/more.svg";
import arrow from "../assets/arrow.svg";
export default function ProfileUser() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-5">
        <div className="flex flex-row items-center ml-4 gap-3">
          <Link to="/">
            <img src={leftIcon} alt="" className="" />
          </Link>
          <h3 className="font-semibold text-xl leading-6 font-sans text-[#051320]">
            Profile & Settings
          </h3>
        </div>
        <img src={more} alt="more detail" className="ml-3" />
      </div>
      <div className="flex flex-col gap-6 items-center justify-between mt-[64px] mb-10">
        <img src={Profile} alt="profile" className="w-[96px] h-[96px]" />
        <h3 className="text-[#051320] font-bold text-[22px] leading-[33px] font-sans">
          Reza Alavi
        </h3>
      </div>
      <div className="flex flex-col mx-6 mt-12 mb-6">
        <div className="flex flex-row justify-between">
          <span className="font-medium leading-6 text-[18px] text-[#051320]">
            Email
          </span>
          <span className="flex flex-row text-[#01CD98] font-normal font-sans text-base leading-5">
            r.alava@gmail.com
            <img src={arrow} alt="" />
          </span>
        </div>
        <div className="border border-[#EBEDEC] mt-6"></div>
        <div className="flex flex-row justify-between mt-7">
          <span className="font-medium leading-6 text-[18px] text-[#051320]">
            Theme
          </span>
          <span className="flex flex-row gap-4 text-[#616161] font-normal font-sans text-base leading-5">
            System default
            <img src={arrow} alt="" />
          </span>
        </div>
        <div className="border border-[#EBEDEC] mt-6"></div>
        <div className="flex flex-row justify-between mt-7">
          <span className="font-medium leading-6 text-[18px] text-[#051320]">
            Data & storage
          </span>
          <span className="flex flex-row gap-4 text-[#616161] font-normal font-sans text-base leading-5">
            28% Used
            <img src={arrow} alt="" />
          </span>
        </div>
        <div className="border border-[#EBEDEC] mt-6"></div>
        <div className="flex flex-row justify-between mt-7">
          <span className="font-medium leading-6 text-[18px] text-[#051320]">
            Change password
          </span>
          <span className="flex flex-row text-[#01CD98] font-normal font-sans text-base leading-5">
            <img src={arrow} alt="" />
          </span>
        </div>
        <div className="border border-[#EBEDEC] mt-6"></div>
        <div className="flex flex-col mt-7 gap-3">
          <span className=" flex justify-between font-medium leading-6 text-[18px] text-[#051320]">
            Send feedback
            <img className="w-6 h-6" src={arrow} alt="" />
          </span>
          <span className="text-[#616161] font-normal font-sans text-sm leading-[18px]">
            Chatbot AI can make mistakes. Consider checking important
            information and send us your feedback{" "}
          </span>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 justify-center items-center text-[#616161] font-normal text-sm leading-[18px] font-sans">
        <spa className="mt-12">Chat Bot AI - Version 2.0.5</spa>
        <span className="flex flex-row gap-4">
          <span>Terms of use</span>
          <span>|</span>
          <span>Privacy policy</span>
        </span>
      </div>
    </div>
  );
}
