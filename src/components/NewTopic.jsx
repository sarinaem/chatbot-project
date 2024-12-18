
import HeaderChatbot from "./HeaderChatbot";
import { useState } from "react";
import copy from "../assets/copy.svg";
import ReactImg from "../assets/ReactImg.svg";
import shareContent from "../assets/shareContent.svg"
import ItemTopic from "./ItemTopic";
import InputField from "./InputField";
import UserChat from "./UserChat";


 export default function NewTopic() {
  const [inputValue, setInputValue] = useState("");
  const [transtMsg, setTransMsg] = useState("");
  // const [loading, setLoading] = useState(false); add the last time

  const [msg, setMsg] = useState("");
  const handleMsg = async (inputValue) => {
    setMsg(inputValue);
    try {
      await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
      .then(response => {
        return response.json();  
      })
      .then(data => {
        console.log(data);
        if(data, data.length > 0){
          const definitions = data[0]?.meanings[0]?.definitions[0]?.definition;
          setTransMsg(definitions);
          setInputValue("");

        } else {
          setTransMsg("definition not found.")          
        }
      })

    }catch(error){
      console.log(error);
      setTransMsg("error")   
      
    }
  }
  
  return (
    <div>
        <HeaderChatbot />
       <div className="border border-[#EBEDEC] mt-10"></div>
       <div className="mb-9">
         <h2 className="font-sans font-semibold leading-5 text-base text-center mt-6 text-[#051320]">How can I help you my friend? 😊️</h2>
            <div className="flex flex-col ">
              <ItemTopic title="Brainstorm names" description="for my fantasy football team with a frog theme"/>
              <ItemTopic title="Suggest some codenames" description="for a project introducing flexible work arrangements"/>
              <ItemTopic title="Write a SQL query" description="that adds a status column to an orders table"/>
              <ItemTopic title="Explain why popcorn pops" description="to a kid who loves watching it in the microwave"/>
            </div>
        </div>
        
        <InputField inputValue={inputValue} setInputValue={setInputValue} handleMsg={handleMsg}/>
        <div className="border border-[#EBEDEC] mt-10"></div>

        {msg && (

        <div>
          <UserChat msg={msg}/>
         <div className="border border-[#EBEDEC] mt-10"></div>
  {transtMsg && (
  <div className="mb-12">
    <div className="flex gap-3 ml-6 mt-6 items-center">   
     <img src={ReactImg} alt="React Logo" className="w-6 h-6" />
     <h1 className="font-semibold text-base leading-5 font-sans text-center whitespace-nowrap">Chat Bot:</h1>
   </div>
   <p className="ml-7 mt-4 mr-6 text-[#051320] font-normal text-base leading-6">{transtMsg}</p>
   <div className="flex gap-6 flex-row ml-6 mt-4">
     <div className="flex gap-2">

       <img className="w-4 h-4" src={shareContent} alt="" />
       <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">Share</p>
     
     </div>
     <div className="flex gap-2">
       <img className="w-4 h-4" src={copy} alt="copy" />
       <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">Copy</p>
     </div>
   </div>
  </div>
 )}
        </div>

        )}
       </div>
  )
  
}
