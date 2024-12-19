
import sendIcon from "../assets/Send.svg";
import PropTypes from 'prop-types';


export default function InputField({ inputValue, setInputValue, handleMsg }) {
  return (
      <div className="flex flex-row gap-3 items-center justify-center mt-6">
              <input 
              type="text"
              value={inputValue}
              name="input"
              onChange={(event) =>setInputValue(event.target.value)}
              onKeyDown={(e)=>{
                if(e.key === "Enter") {
                  handleMsg(inputValue);
                }
              }}
               placeholder="Ask me anything..." className=" w-[70%] rounded-[30px] border border-1 py-4 px-6 border-[#EBEDEC] ml-6 mb-6"/>
                 <button onClick={() => handleMsg(inputValue)}><img src={sendIcon} alt="send" className=" bg-[#01CD98] p-4 rounded-full flex gap-2 mr-6 mb-6" />
                </button>
               
            </div>
  )
}


InputField.propTypes ={
    inputValue:PropTypes.string,
    setInputValue:PropTypes.func.isRequired,
    handleMsg: PropTypes.func.isRequired,


    
}