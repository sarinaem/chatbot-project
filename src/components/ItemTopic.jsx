// import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import PropTypes from "prop-types";

export default function ItemTopic({ title, description }) {
  return (
    <>
      {/* <Link
      to={`chatbot-project/NewTopic/:chatId`}> */}
      <div className="border border-[#EBEDEC] p-6 flex justify-between gap-3 rounded-[36px] flex-row ml-6 mr-6 mt-8">
        <div className="flex flex-col gap-3">
          <h3 className="font-sans font-semibold leading-5 text-base">
            {title}
          </h3>
          <p className="font-sans text-[#051320] opacity-70 font-normal leading-[18px] text-sm">
            {description}
          </p>
        </div>
        <img className="w-6 h-6" src={arrow} alt="arrow" />
      </div>
      {/* </Link> */}
    </>
  );
}

ItemTopic.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
