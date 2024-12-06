
import back from "../assets/left-arrow.svg"
import Profile from "../assets/Profile.svg"
import {Link} from "react-router-dom"
export default function DetailContent(){
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
                <img src={Profile} alt="" className="mr-6 flex justify-center items-center w-[40px] h-[40px]" />

                </Link>
            </div>

        </div>
    )
}