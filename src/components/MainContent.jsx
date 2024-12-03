
import ReactImg from "../assets/ReactImg.svg";
import LoginRegister from "./LoginRegister";
export default function MainContent(){
    return (
        <div>
              <div className="flex flex-col gap-[24px] py-[64px] px-[32px] font-sans">
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
       <LoginRegister />
        </div>
    )
}