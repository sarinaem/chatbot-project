
import arrow from "../assets/arrow.svg";
import sendIcon from "../assets/Send.svg";
import HeaderChatbot from "./HeaderChatbot";
import { useState } from "react";
import Profile from "../assets/Profile.svg";
import copy from "../assets/copy.svg";
import edit from "../assets/edit.svg"
import ReactImg from "../assets/ReactImg.svg";
import shareContent from "../assets/shareContent.svg"
export default function NewTopic() {
  const [inputValue, setInputValue] = useState("");
  const [msg, setMsg] = useState("");
  const handleMsg = (e) => {
    setInputValue(e.target.value)
    const userMessage = inputValue;  // ذخیره پیام کاربر
    setMsg(userMessage);
      setInputValue("");

      fetch("https://translation.googleapis.com/language/translate/v2?key=${API_KEY}", {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 83a3cb6c47b46572dff897baac1683f8dad479a9',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: {msg},
          target_language: 'en', // زبان هدف
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setResponse(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };


 
  return (
    <div>
        <HeaderChatbot />
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
        <div className="flex flex-row gap-3 items-center justify-center">
          <input 
          type="text"
          name="input"
          onChange={(event) =>setInputValue(event.target.value)}
           placeholder="Ask me anything..." className=" w-[70%] rounded-[30px] border border-1 py-4 px-6 border-[#EBEDEC] ml-6 mb-6"/>
           <button onClick={handleMsg}><img src={sendIcon} alt="send" className=" bg-[#01CD98] p-4 rounded-full flex gap-2 mr-6 mb-6" />
           </button>
        </div>
      
        {msg && (

        <div>
           <div className="flex gap-3 mt-6 mb-6">
            <img src={Profile} alt="profile" className="w-6 h-6 ml-6 " />
            <p className="">you</p>
           </div>
           <p className="mr-6 ml-6 mt-4 text-[#01CD98] font-sans font-normal text-base leading-6">{msg}</p>
          <div className="flex gap-6 flex-row ml-6 mt-4">
            <div className="flex gap-2">
            <img className="w-4 h-4" src={edit} alt="edit" />
            <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">Edit</p>
          </div>
          <div className="flex gap-2">
            <img className="w-4 h-4" src={copy} alt="copy" />
            <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">Copy</p>
          </div>
        </div>
         <div>

          <div className="flex gap-3 ml-6 mt-6 items-center">   
     <img src={ReactImg} alt="React Logo" className="w-6 h-6" />
     <h1 className=" font-semibold text-base leading-5 font-sans text-center whitespace-nowrap">Chat Bot AI</h1>
   </div>
   <p className="ml-7 mt-4 mr-6 text-[#051320] font-normal text-base leading-6">
  
   </p>
   <div className="flex gap-6 flex-row ml-6 mt-4">
     <div className="flex gap-2">
     <img className="w-4 h-4" src={copy} alt="" />

       <img className="w-4 h-4" src={shareContent} alt="" />
       <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">Share</p>
     
     </div>
     <div className="flex gap-2">
       <img className="w-4 h-4" src={copy} alt="copy" />
       <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">Copy</p>
     </div>
   </div>
        </div>
          
     

   
   
        </div>

        )}
       </div>






  )
}
