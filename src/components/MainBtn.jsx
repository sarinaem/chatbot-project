
function MainBtn({setCurentPage}) {

    const OpenNewPage = () => {
        setCurentPage("newPage");
        
    }
    
  return (
  
     <button onClick={OpenNewPage} className="my-8 flex gap-2 justify-center text-center w-full h-[56px] px-[18px] py-6  rounded-[36px] bg-[#01CD98] text-white font-semibold text-base leading-5">
        Login
    </button>
  )
}



export default MainBtn