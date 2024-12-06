

import './index.css'
// import {Routes, Route } from 'react-router-dom';
import ReactImg from "../src/assets/ReactImg.svg";
import email from "../src/assets/email.jpg"
import key from "../src/assets/key.jpg"
import BackIcon from "../src/assets/BackIcon.jpg"
import { Link } from 'react-router-dom';
import facebook from './assets/facebook.svg'
import googleIcon from "./assets/google.svg"
function App() {

  return (
    <div>
   <div className=" font-sans min-h-screen ml-8 mr-8 ">
      <div className="flex flex-col gap-[24px] py-[64px] px-[32px] font-sans w-[90vw]">
       <img src={ReactImg} alt="ReactImg" className="w-16 h-16 " />
       <h3 className="text-[40px] font-semibold leading-10">Login to your 
          <br />
          account</h3>
       <span className="font-normal  text-sm text-[#616161] leading-6">
       Don’t have an account? 
       <span></span>
       <Link to="/signUp" className="text-[#01CD98] text-base font-semibold leading-5 "> Sign Up</Link>
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
      <input className=" rounded-2xl border border-[#EBEDEC] border-solid w-full h-[56px] placeholder: pl-[50px]" type="password" placeholder="Password" id="Password"/>
      <img src={BackIcon} alt="Back-icon" className="absolute right-2 top-4" />
      <img src={key} alt="password" className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]" />
      </div>
      <Link to="/enter-pass">
      <p className=" flex flex-col w-full pb-8 text-right font-semibold text-sm leading-[18px] text-[#01CD98]">Forgot Password?</p>

      </Link>
  </div>
      
      <Link to="/newChat">
      <button type="button" className=" flex gap-2 justify-center text-center w-full h-[56px] px-6 py-[18px]  rounded-[36px] bg-[#01CD98] text-white font-semibold text-base leading-5">
        Login
    </button>
      </Link>

    <div className="flex items-center mt-8 mb-8">
      <div className="flex-grow bg-[#EBEDEC] border h-0.5"></div>
      <div className="flex-grow-0 mx-5 dark:text-white text-[#616161] font-normal leading-[18px] text-sm font-sans ">Or login with</div>
      <div className="flex-grow  bg-[#EBEDEC] h-0.5"></div>
   </div>

    <div className='flex flex-row justify-evenly'>
      <button className='flex flex-row gap-2 bg-[#6464641F] py-4 px-6 rounded-[36px]'>
      <img src={googleIcon} alt="facebook.pic" />
        <p className='text-[#051320] font-semibold text-base font-sans leading-5'>Google</p>
      </button>
      <button className='flex flex-row gap-2 bg-[#6464641F] py-4 px-6 rounded-[36px]'>
        <img src={facebook} alt="facebook.pic" />
        <p className='text-[#051320] font-semibold text-base font-sans leading-5'>Facebook</p>
      </button>
    </div>

 </div>
    
   
  </div>

  )
}

export default App



