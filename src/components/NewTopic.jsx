
import HeaderChatbot from "./HeaderChatbot";
import {  useState } from "react";
// import ReactImg from "../assets/ReactImg.svg";
import ItemTopic from "./ItemTopic";
import InputField from "./InputField";

import Message from "./Message";
// import { useParams } from "react-router-dom";


 export default function NewTopic() {
  // const location = useLocation();
  // const {title, description} = location.state || {}
  // const {id} = useParams();

  const [inputValue, setInputValue] = useState("");
  const [transtMsg, setTransMsg] = useState("");
  const [showText, setShowText] = useState(true);
  const [historyChat, setHistoryChat] = useState([]);
  const [msg, setMsg] = useState("");
  // const selectedChat = data.find((chat) => chat.id === id); 

  // useEffect(() => {
  //   if (selectedChat) {
  //     const history = selectedChat.map((message) => ({
  //       role: message.role,
  //       content: message.content,
  //     }));
  //     setHistoryChat(history);
  //   }
  // }, [selectedChat]);
  const handleMsg = async (inputValue) => {
    const userMsg = { role: 'user', content: inputValue };
    setHistoryChat(prev => [...prev, userMsg])
    setMsg(inputValue);
    setShowText(false);
    setInputValue("");

    try {
      await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
      .then(response => {
        return response.json();  
      })
      .then(data => {
        console.log(data);
        if(data && data.length > 0){
          const definitions = data[0]?.meanings[0]?.definitions[0]?.definition;
          setTransMsg(definitions);
          const botMessage = { role: 'bot', content: definitions };
          setHistoryChat(prev => [...prev, botMessage]);
     

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
            {showText && (<div className="flex flex-col ">
              <ItemTopic title="Brainstorm names" description="for my fantasy football team with a frog theme"/>
              <ItemTopic title="Suggest some codenames" description="for a project introducing flexible work arrangements"/>
              <ItemTopic title="Write a SQL query" description="that adds a status column to an orders table"/>
              <ItemTopic title="Explain why popcorn pops" description="to a kid who loves watching it in the microwave"/>
            </div>)}
        </div>
        <div>
           {historyChat.map ((msg, index) => (
                <Message key={index} msg={msg} />

           )
        
        
        )}
        </div>
        <InputField inputValue={inputValue} setInputValue={setInputValue} handleMsg={handleMsg}/>
        <div className="border border-[#EBEDEC] mt-10"></div>

       </div>
  )
  
}


