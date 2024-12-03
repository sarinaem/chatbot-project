import email from "../assets/email.jpg"
import key from "../assets/key.jpg"
import BackIcon from "../assets/BackIcon.jpg"
export default function LoginRegister() {

  return (
    <div className="flex flex-col gap-[24px]">
     <div className="flex gap-[12px] relative items-center">
        <label htmlFor="email"></label>
        <input className=" rounded-2xl border border-[#EBEDEC] border-solid w-[364px] h-[56px] placeholder: pl-[50px]" type="email" placeholder="Email" id="email"/>
        <img src={email} alt="email" className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]" />
    </div>
    <div className="flex gap-[12px] relative items-center">
        <label htmlFor="Password"></label>
        <input className=" rounded-2xl border border-[#EBEDEC] border-solid w-[364px] h-[56px] placeholder: pl-[50px]" type="Password" placeholder="Password" id="Password"/>
        <img src={BackIcon} alt="Back-icon" className="absolute " />
        <img src={key} alt="password" className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]" />
    </div>
    </div>
  )
}

