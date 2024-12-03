import { useState } from "react";
import Battery from  "../assets/Battery.jpg";
import Connection from "../assets/Connection.svg";
import Cellular from "../assets/Cellular.svg"
export default function Header() {
    const now = new Date();

    const [time] = useState(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
  }).replace(/AM|PM/,''));
    
    return (
        <div className="flex justify-between items-center mt-[17px]">
            <p className="ml-[45px] font-sans font-[590px] text-lg">
                {time}
            </p>
            <div className="flex items-center mr-[32px] gap-[3px]">
                <img src={Cellular} alt="Cellular" />
                <img src={Connection} alt="Connection" />
                <img src={Battery} alt="Battery" />
            </div>
        </div>
    )
}