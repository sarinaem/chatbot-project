

export default function OldChat(data) {
  return (
    <div className="flex flex-row gap-4 mt-6 ml-4 flex-wrap items-center overflow-x-hidden">
      {data.data.map((item) => {
        let itemText = item.text;
        let itemTitle = item.title;

        if (itemText?.length > 100) {
          itemText = itemText.slice(0, 100 - 3) + "...";
        }
        if (itemTitle?.length > 65) {
          itemTitle = itemTitle.slice(0, 65 - 3) + "...";
        }

        return (
          <div key={item.id} className=" backdrop-blur-[30px] flex w-[45%] px-6 py-8 gap-3 rounded-[36px] border border-[#EBEDEC] flex-col">
            <h3 className="font-sans font-semibold text-base leading-5 text-[#01CD98] overflow-hidden text-ellipsis">
              {itemTitle}
            </h3>
            <p className="overflow-hidden text-ellipsis font-normal text-base font-sans leading-6 text-[#616161] ">
              {itemText}
            </p>
            <span className="">{item.time}</span>
          </div>
        );
      })}
    </div>
  );
}