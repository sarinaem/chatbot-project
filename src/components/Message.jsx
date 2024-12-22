// import { useParams } from "react-router-dom";
import Chatbot from "./Chatbot";
import UserChat from "./UserChat";

export default function Message(msg) {
    // const { id } = useParams();
  return (
                <div>
                    
                  {msg.role === 'user' ? (
                  <UserChat msg={msg.content} /> 
                ) : (
                  <Chatbot  transtMsg={msg.content}/>
                )}
                </div>
               )
            
            
}
