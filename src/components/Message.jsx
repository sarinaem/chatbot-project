// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Chatbot from "./Chatbot";
import UserChat from "./UserChat";

export default function Message({ msg }) {
    // const { id } = useParams();
    if (!msg) return null;
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

Message.propTypes ={
  msg:PropTypes.array,
}