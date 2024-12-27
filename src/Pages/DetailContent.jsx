// import search from "../assets/search.svg";
import back from "../assets/left-arrow.svg";
import Profile from "../assets/Profile.svg";
import { Link } from "react-router-dom";
import gallery from "../assets/gallery.svg";
import archive from "../assets/archive.svg";
import chat from "../assets/chat.svg";
import ImgReact from "../components/ImgReact";
import OldChat from "../components/OldChat";
import { useEffect, useState } from "react";

export default function DetailContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setData(data.data))
      .catch((error) => console.log("error is", error));
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-6">
        <Link to="/">
          <div className="flex flex-row gap-2 items-center ml-4 ">
            <img src={back} alt="" />

            <p className="text-[#051320]">Back</p>
          </div>
        </Link>
        <Link to="/profile">
          <img
            src={Profile}
            alt=""
            className="mr-6 flex justify-center items-center w-[40px] h-[40px]"
          />
        </Link>
      </div>
      <div className="mt-6 ml-6">
        <h1 className="ml-6 text-[40px] leading-[48px] font-sans">
          Start a new chat
          <br />
          <span className="flex flex-row gap-3 items-center">
            With <ImgReact />
          </span>
          <span className="mb-6 flex flex-row items-center gap-4 text-4xl font-bold bg-gradient-to-r from-[#051320] to-[#00F5B5] bg-clip-text text-transparent">
            Chat bot AI
            <Link to="/newTopic">
              <button className="flex gap-2 items-center justify-center text-center w-[160px] h-[56px] px-6 py-[18px] rounded-[36px] bg-[#01CD98] text-white font-semibold text-base leading-5">
                + <span></span> New Topic
              </button>
            </Link>
          </span>
        </h1>
      </div>
      <div className="border border-[#EBEDEC]"></div>
      <div>
        <div className="flex gap-4 flex-row ml-6 mt-8 items-center">
          <h3 className="font-sans text-[24px] font-semibold leading-8 text-[#051320] ml-6">
            History
          </h3>
          <input
            type="search"
            placeholder="Search ..."
            className="relative  w-[65%] font-medium text-base leading-5 text-[#616161] border border-[#EBEDEC] rounded-[32px] py-3 px-6 flex flex-row gap-2"
          />
          {/* <img src={search} alt="search" className="absolute right-[15%] top-[87%]" /> */}
        </div>
        <div className="flex flex-row gap-4 ml-6 mt-6 overflow">
          <button className="text-white flex gap-2 items-center justify-center text-center px-6 py-3 rounded-[32px] bg-[#051320] font-semibold text-base leading-5 ml-6 w-[30%]">
            <img src={chat} alt="" />
            <span className="text-base font-medium font-sans leading-5">
              Chats
            </span>
          </button>
          <button className="flex gap-2 items-center justify-center text-center px-6 py-3   rounded-[32px] border border-[#EBEDEC] border-solid font-semibold text-base leading-5 w-[30%]">
            <img src={archive} alt="" />
            <span className="text-base font-medium font-sans leading-5 text-[#616161]">
              Archived
            </span>
          </button>
          <button className="flex gap-2 items-center justify-center text-center px-6 py-3  flex-shrink rounded-[32px] border border-[#EBEDEC] border-solid font-semibold text-base leading-5 w-[50%]">
            <img src={gallery} alt="" />
            <span className="text-base font-medium font-sans leading-5 text-[#616161]">
              Images
            </span>
          </button>
        </div>
      </div>
      <div>
        <OldChat data={data} />
      </div>
    </div>
  );
}
