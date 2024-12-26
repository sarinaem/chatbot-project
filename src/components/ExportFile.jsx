import close from "../assets/Close.svg";
import exportFile from "../assets/export.svg";

export default function ExportFile() {
  return (
    <>
      <div className="flex gap-3 mt-[39px] justify-evenly">
        <img src={close} alt="close" className="" />
        <div className="flex flex-row gap-[3px] items-center">
          <img className="" src={exportFile} alt="exportFile" />
          <h3 className="font-semibold leading-6 text-xl text-[#051320]">
            Export as PDF
          </h3>
        </div>
      </div>
    </>
  );
}
