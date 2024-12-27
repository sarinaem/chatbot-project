import { Link } from "react-router-dom";

export default function PasswordsDefine() {
  return (
    <form className="flex justify-center items-center flex-col gap-2">
      <div className="flex flex-row justify-center border-solid border-gray-100 text-nowrap mt-4">
        <label htmlFor="newPass" className="m-1 mt-3">
          New Password:{" "}
        </label>
        <input
          className=" rounded-2xl border border-[#EBEDEC] border-solidh-[56px]  placeholder: pl-[50px]"
          type="password"
          placeholder="Password"
          id="Password"
        />
      </div>
      <Link to="/">
        <button className="mt-8 flex gap-2 justify-center items-center text-center px-6 py-[9px]  rounded-[20px] bg-[#01CD98] text-white font-semibold text-base leading-5">
          save
        </button>
      </Link>
    </form>
  );
}
