
import { useState } from 'react';
import emails from "../assets/emaill.svg"
import key from "../assets/key.jpg"
// import BackIcon from "../assets/BackIcon.jpg"
import { Link, useNavigate } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [error, setError] = useState("");
    const navigate = useNavigate();



    function validatePassword(password) {
      if(password?.length < 8) return "password must be 8+ characters."
      if(!/[a-zA-Z]/.test(password)) return "password must include at least one letter."
      if(!/[0-9]/.test(password)) return "password must include at least one number."
      if(!/@/.test(password)) return "password must include the '@' symbol."
      return "";
   }
   function handleLogin(event) {
    event.preventDefault();
    let items = {email, password};

    const errorMsg = validatePassword(password);
    if(errorMsg) {
     setError(errorMsg);
     return;
    }
     fetch('https://6755e8c711ce847c992b8750.mockapi.io/login', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(items)
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(data => {
        console.log(data); 
        navigate('/chatbot-project/newChat');

    })
    .catch(error => {
        console.error('Error:', error); 
        setError("Login failed. please try again.");
    });
  
    }

    const handleToggle = () => {
        
        if(type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password")
        }
    }
  return (
    <form onSubmit={handleLogin} className=''>
      <div className="flex gap-3 relative items-center">
          <label htmlFor="email"></label>
          <input onChange={(event) => setEmail(event.target.value)} className="outline-0 outline-transparent mb-6 rounded-2xl border border-[#EBEDEC] border-solid w-full h-[56px] placeholder: pl-[50px]" type="email" placeholder="Email" id="email"/>
          <img src={emails} alt="email" className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]" />
       </div>
       <div className="flex gap-[12px] relative items-center">
         <label htmlFor="password"></label>
         <input onChange={(event) =>setPassword(event.target.value)} className=" outline-0 outline-transparent rounded-2xl border border-[#EBEDEC] border-solid w-full h-[56px] placeholder: pl-[50px]" autoComplete="current-password"
         type={type} placeholder="Password" id="password"/>
         <span className="flex justify-around items-center" onClick={handleToggle}>
         <Icon className="absolute right-6 top-4 text-[#01CD98] w-7 h-7" icon={icon}/></span>
        
         {/* <img src={BackIcon} alt="Back-icon" className="absolute right-2 top-4" /> */}
          <img src={key} alt="password" className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]" />
      </div>
      {error && <p className="ml-6 mt-2 text-red-500 text-sm mb-4">{error}</p>}
        
      <Link to="/chatbot-project/enter-pass">
      <p className=" flex flex-col w-full mb-8 mt-6 text-right font-semibold text-sm leading-[18px] text-[#01CD98]">Forgot Password?</p>
      </Link>
      <button type="submit" className="cursor-pointer flex gap-2 justify-center text-center w-full h-[56px] px-6 py-[18px] rounded-[36px] bg-[#01CD98] text-white font-semibold text-base leading-5 ml-2">
        Login
    </button>

      </form>
  )
}
