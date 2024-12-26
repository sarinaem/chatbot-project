import PropTypes from "prop-types";
import Profile from "../assets/Profile.svg";
import copy from "../assets/copy.svg";
import edit from "../assets/edit.svg";
import { useState } from "react";

export default function UserChat({ msg }) {
  const [editText, setEditText] = useState(msg);
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleBlur = (e) => {
    setEditText(e.target.innerText);
    setIsEdit(false);
  };
  return (
    <div>
      <div className="flex gap-3 mt-6 mb-6">
        <img src={Profile} alt="profile" className="w-6 h-6 ml-6 " />
        <p className="">you</p>
      </div>
      {/* <p className="mr-6 ml-6 mt-4 text-[#01CD98] font-sans font-normal text-base leading-6">{msg}</p> */}
      <p
        className={`mr-6 ml-6 mt-4 text-[#01CD98] font-sans font-normal text-base leading-6 ${
          isEdit ? "rounded border-1 before:content-['⭐'] text-[#000000]" : ""
        }`}
        contentEditable={isEdit}
        onBlur={handleBlur}
      >
        {editText}
      </p>

      <div className="flex gap-6 flex-row ml-6 mt-4">
        <button className="flex gap-2" onClick={handleEdit}>
          <img className="w-4 h-4" src={edit} alt="edit" />
          <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">
            Edit
          </p>
        </button>
        <div className="flex gap-2">
          <img className="w-4 h-4" src={copy} alt="copy" />
          <p className="text-[#616161] font-medium text-sm leading-[18px] font-sans">
            Copy
          </p>
        </div>
        <div className="border border-[#EBEDEC] mt-10"></div>
      </div>
    </div>
  );
}

UserChat.propTypes = {
  msg: PropTypes.string,
};
