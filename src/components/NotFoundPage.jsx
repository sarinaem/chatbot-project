import notFoundPage from "../assets/NotFoundPage.webp";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <h2 className=" text-black text-center font-semibold mt-12 font-sans">
        😪 گشتم نبود، نگرد نیست
      </h2>
      <img src={notFoundPage} alt="" />
      <Link to="/">
        <button className="flex gap-2 justify-center text-center mt-5 h-[56px] px-6 py-[18px]  rounded-[36px] bg-[#01CD98] text-white font-semibold text-base leading-5">
          بازگشت به صفحه اصلی
        </button>
      </Link>
    </div>
  );
}
