import './index.css'
import ReactImg from "/src/assets/ReactImg.svg";

import { Link } from 'react-router-dom';
import facebook from '/src/assets/facebook.svg'
import googleIcon from "/src/assets/google.svg"
import Login from './components/Login';

function App() {
 

  return (
    <div>
   <div className=" font-sans min-h-screen ml-8 mr-8 ">
      <div className="flex flex-col gap-[24px] py-[64px] px-[32px] font-sans max-w-[90vw] mx-auto">
       <img src={ReactImg} alt="ReactImg" className="w-16 h-16 " />
       <h3 className="text-[40px] font-semibold leading-10">Login to your 
          <br />
          account</h3>
       <span className="font-normal text-sm text-[#616161] leading-6">
         Don’t have an account? 
       <span></span>
       <Link to="/chatbot-project/signUp" className="text-[#01CD98] text-base font-semibold leading-5 mb-0"> Sign Up</Link>
       </span>
     </div>
     <div className="flex flex-col gap-[24px] mr-8 mt-0">
      <Login />
     </div>
      
      

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



