import data from "../../data.json"

function OldChat() {

  return (
    <div>
        {data.map((item)=> {
        return <div key={item.id} className="backdrop-blur-[30px] flex px-6 py-8 gap-3 rounded-[36px] border border-[#EBEDEC]">
           <h3 className="font-sans font-semibold text-base leading-5 text-[#01CD98]">{item.title}</h3>
           <p className="overflow-hidden text-ellipsis font-normal text-base font-sans leading-6 text-[#616161]">{item.text}</p>
           <span className="">{item.time}</span>
            </div>

        })}
    </div>
  )
}

export default  OldChat;
