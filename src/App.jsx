import ReactImg from "../src/assets/ReactImg.svg";
import email from "../src/assets/email.jpg"
import key from "../src/assets/key.jpg"
import BackIcon from "../src/assets/BackIcon.jpg"
import './index.css'
import MainBtn from "./components/MainBtn";
import { useState } from "react";
import DetailContent from "./components/DetailContent";

function App() {
  const [curentPage, setCurentPage] = useState("App");

  return (
    <>
    {curentPage === "App" ? (<div>
      <div className=" font-sans min-h-screen w-full ">
        <div className="flex flex-col gap-[24px] py-[64px] px-[32px] font-sans w-[90vw]">
         <img src={ReactImg} alt="ReactImg" className="w-16 h-16 " />
         <h3 className="text-[40px] font-semibold leading-10">Login to your 
            <br />
            account</h3>
         <span className="font-normal  text-sm text-[#616161] leading-6">
         Don’t have an account? 
         <span></span>
         <a href="#" className="text-[#01CD98] text-base font-semibold leading-5 "> Sign Up</a>
         </span>
       </div>
       <div className="flex flex-col gap-[24px] mr-8">
     <div className="flex gap-[12px] relative items-center">
        <label htmlFor="email"></label>
        <input className=" rounded-2xl border border-[#EBEDEC] border-solid w-full h-[56px] placeholder: pl-[50px]" type="email" placeholder="Email" id="email"/>
        <img src={email} alt="email" className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]" />
    </div>
    <div className="flex gap-[12px] relative items-center">
        <label htmlFor="Password"></label>
        <input className=" rounded-2xl border border-[#EBEDEC] border-solid w-full h-[56px] placeholder: pl-[50px]" type="Password" placeholder="Password" id="Password"/>
        <img src={BackIcon} alt="Back-icon" className="absolute left-[320px] top-[14px]" />
        <img src={key} alt="password" className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]" />
        </div>
        <p className=" flex flex-col w-full pb-8 text-right font-semibold text-sm leading-[18px] text-[#01CD98]">Forgot Password?</p>
    </div>
   </div>
        <MainBtn setCurentPage={setCurentPage}/>
    </div>
    )     
   : 
    <DetailContent />
    
    }  
    </>
  )
}

export default App
