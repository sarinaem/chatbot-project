import BackIcon from "../assets/BackIcon.jpg";
import emailImg from "../assets/emaill.svg";
import keyImg from "../assets/key.jpg";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex flex-col gap-[24px] mr-8 mt-6">
      <div className="flex gap-[12px] relative items-center">
        <label htmlFor="email"></label>
        <input
          className=" rounded-2xl border border-[#EBEDEC] border-solid w-full h-[56px] placeholder: pl-[50px]"
          type="email"
          placeholder="Email"
          id="email"
        />
        <img
          src={emailImg}
          alt="email"
          className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]"
        />
      </div>
      <div className="flex gap-[12px] relative items-center">
        <label htmlFor="Password"></label>
        <input
          className=" rounded-2xl border border-[#EBEDEC] border-solid w-full h-[56px] placeholder: pl-[50px]"
          type="password"
          placeholder="Password"
          id="Password"
        />
        <img
          src={BackIcon}
          alt="Back-icon"
          className="absolute right-2 top-4"
        />
        <img
          src={keyImg}
          alt="password"
          className="w-7 h-7 ml-[16px] absolute top-[14px] left-[16px]"
        />
      </div>
      <Link to="/enter-pass">
        <p className=" flex flex-col w-full pb-8 text-right font-semibold text-sm leading-[18px] text-[#01CD98]">
          Forgot Password?
        </p>
      </Link>
      <button
        type="button"
        className=" flex gap-2 justify-center text-center  h-[56px] px-6 py-[18px] ml-6  rounded-[36px] bg-[#01CD98] text-white font-semibold text-base leading-5"
      >
        signUp
      </button>
    </div>
  );
}

export default SignUp;
