import menuMob from "../assets/Hamburger.svg";
import ImgReact from "./ImgReact";
import share from "../assets/share.svg";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";

import sendIcon from "../assets/Send.svg";
export default function NewTopic() {
  return (
    <div>
        <div className="flex flex-row gap-3 justify-start items-center mt-6 mb-3">
            <img src={menuMob} alt="" className="ml-6 flex-grow-0" />
             <div className="flex flex-row gap-4 items-center ml-5 flex-grow">
              <ImgReact />
              <h1 className=" font-semibold text-xl leading-6 font-sans text-center whitespace-nowrap">GPT 4o</h1>
             </div>
              <Link to="/exportFile">
              <img src={share} alt="" className="flex-grow-0"/>
              </Link>
       </div>
       <div className="border border-[#EBEDEC] mt-10"></div>
       <div className="mb-9">
         <h2 className="font-sans font-semibold leading-5 text-base text-center mt-6 text-[#051320]">How can I help you my friend? 😊️</h2>
            <div className="flex flex-col ">
            <div className="border border-[#EBEDEC] p-6 flex justify-between gap-3 rounded-[36px] flex-row ml-6 mr-6 mt-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-semibold leading-5 text-base">Brainstorm names</h3>
              <p className="font-sans  text-[#051320] opacity-70 font-normal leading-[18px] text-sm">for my fantasy football team with a frog theme</p>
            </div>
            <img className="w-6 h-6" src={arrow} alt="arrow" />
          </div>
          <div className="border border-[#EBEDEC] p-6 flex justify-between gap-3 rounded-[36px] flex-row ml-6 mr-6 mt-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-semibold leading-5 text-base">Suggest some codenames</h3>
              <p className="font-sans  text-[#051320] opacity-70 font-normal leading-[18px] text-sm">for a project introducing flexible work arrangements</p>
            </div>
            <img className="w-6 h-6" src={arrow} alt="arrow" />
          </div> 
          <div className="border border-[#EBEDEC] p-6 flex justify-between gap-3 rounded-[36px] flex-row ml-6 mr-6 mt-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-semibold leading-5 text-base">Write a SQL query</h3>
              <p className="font-sans  text-[#051320] opacity-70 font-normal leading-[18px] text-sm">that adds a status column to an orders table</p>
            </div>
            <img className="w-6 h-6" src={arrow} alt="arrow" />
          </div> 
          <div className="border border-[#EBEDEC] p-6 flex justify-between gap-3 rounded-[36px] flex-row ml-6 mr-6 mt-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-semibold leading-5 text-base">Explain why popcorn pops</h3>
              <p className="font-sans  text-[#051320] opacity-70 font-normal leading-[18px] text-sm">to a kid who loves watching it in the microwave</p>
            </div>
            <img className="w-6 h-6" src={arrow} alt="arrow" />
          </div>
    
            </div>
        </div>
        <div className="flex flex-row gap-3 items-center mb-">
          <input type="text" placeholder="Ask me anything..." className=" w-[70%] rounded-[30px] border border-1 py-4 px-6 border-[#EBEDEC] ml-6 mb-6"/>
          <Link to="/send">
           <img src={sendIcon} alt="send" className=" bg-[#01CD98] p-4 rounded-full flex gap-2 mr-6 mb-6" />

          </Link>
        </div>
       </div>






  )
}
