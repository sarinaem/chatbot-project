import menuMob from "../assets/Hamburger.svg";
import ImgReact from "./ImgReact";
import share from "../assets/share.svg";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
export default function NewTopic() {
  return (
    <div>
        <div className="flex flex-row gap-3 justify-start items-center mt-6 mb-3">
            <img src={menuMob} alt="" className="ml-6 flex-grow-0" />
             <div className="flex flex-row gap-4 items-center ml-5 flex-grow">
              <ImgReact />
              <h1 className=" font-semibold text-xl leading-6 font-sans text-center whitespace-nowrap">GPT 4o</h1>
             </div>
              <Link to="/downloadFile">
              <img src={share} alt="" className="flex-grow-0"/>
              </Link>
       </div>
       <div className="border border-[#EBEDEC] mt-10"></div>
       <div>
         <h2 className="font-sans font-semibold leading-5 text-base text-center mt-6 text-[#051320]">How can I help you my friend? 😊️</h2>
            <div className="flex flex-col">
            <div className="border border-[#EBEDEC] p-6 flex justify-between gap-3 rounded-[36px] flex-row ml-6 mr-6 mt-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-semibold leading-5 text-base">Brainstorm names</h3>
              <p className="font-sans  text-[#051320] opacity-70 whitespace-nowrap font-normal leading-[18px] text-sm">for my fantasy football team with a frog theme</p>
            </div>
            <img className="w-6 h-6" src={arrow} alt="arrow" />
          </div>
          
    
            </div>
        </div>
      
       </div>






  )
}
