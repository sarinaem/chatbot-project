import PropTypes from "prop-types";
import copy from "../assets/copy.svg";
import shareContent from "../assets/shareContent.svg";
import ReactImg from "../assets/ReactImg.svg";

export default function Chatbot({ transtMsg }) {
  return (
    <div>
      <div className="flex gap-3 ml-6 mt-6 items-center">
        <img src={ReactImg} alt="React Logo" className="w-6 h-6" />
        <h1 className="font-semibold text-base leading-5 font-sans text-center whitespace-nowrap">
          Chat Bot:
        </h1>
      </div>
      <p className="ml-7 mt-4 mr-6 text-[#051320] font-normal text-base leading-6">
        {transtMsg}
      </p>
      <div className="flex gap-6 flex-row ml-6 mt-4">
        <div className="flex gap-2">
          <img className="w-4 h-4" src={shareContent} alt="" />
          <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">
            Share
          </p>
        </div>
        <div className="flex gap-2">
          <img className="w-4 h-4" src={copy} alt="copy" />
          <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">
            Copy
          </p>
        </div>
      </div>
    </div>
  );
}

Chatbot.propTypes = {
  transtMsg: PropTypes.string,
};