import { Link } from "react-router-dom";


export default function OldChat(data ) {
  // if (!data || !data.data) return <div>No chats available.</div>;
  return (
    <div className="flex flex-row gap-4 mt-6 ml-4 flex-wrap items-center overflow-x-hidden">
      {data.data.map((item) => {
        
        let itemText = item.text;
        let itemTitle = item.title;

        if (itemText?.length > 100) {
          itemText = itemText.slice(0, 100 - 3) + "...";
        }
        if (itemTitle?.length > 61) {
          itemTitle = itemTitle.slice(0, 61 - 3) + "...";
        }

        return (
          
            <div key={item.id} className=" backdrop-blur-[30px] flex w-[43%] px-6 py-8 gap-3 rounded-[36px] border border-[#EBEDEC] flex-col mr-4">
            {/* <Link to={`chatbot-project/NewTopic/${item.id}`}> */}
            <Link to={`/message/${item.id}`} state={{item}}>

            <h3 className="font-sans font-semibold text-base leading-5 text-[#01CD98] overflow-hidden text-ellipsis">
              {itemTitle}
            </h3>
            </Link>

            <p className="overflow-hidden text-ellipsis font-normal text-base font-sans leading-6 text-[#616161] ">
              {itemText}
            </p>
            <span className="text-[#616161] opacity-70 font-normal text-sm leading-[18px] font-sans">{item.time}</span>            
          
          </div>   
        
        );
        
      })}
    </div>
    
    
  );
  
  
}

