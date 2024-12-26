import menuMob from "../assets/Hamburger.svg";
import ImgReact from "./ImgReact";
import share from "../assets/share.svg";
import { Link } from "react-router-dom";

export default function HeaderChatbot() {
  return (
    <div className="flex flex-row gap-3 justify-start items-center mt-6 mb-3">
      <img src={menuMob} alt="" className="ml-6 flex-grow-0" />
      <div className="flex flex-row gap-4 items-center ml-5 flex-grow">
        <ImgReact />
        <h1 className=" font-semibold text-xl leading-6 font-sans text-center whitespace-nowrap">
          GPT 4o
        </h1>
      </div>
      <Link to="/chatbot-project/">
        <img src={share} alt="" className="flex-grow-0" />
      </Link>
    </div>
  );
}
