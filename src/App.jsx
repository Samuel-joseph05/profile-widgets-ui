import ProfileTabs from "./components/ProfileTabs";
import Gallery from "./components/Gallery";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BiGridVertical } from "react-icons/bi";


function App() {
  return (
    <>
    
      <div className="bg-[#272b30] rounded-3xl p-91 position-relative ">
        <FaRegCircleQuestion size={20} weight="thin" className="text-[#9ba5b1] md:absolute  md:top-26 md:left-207 z-1 " />
           <BiGridVertical size={40} className="text-[#4b4f55] md:absolute  md:top-50 md:left-204 z-1" />
         <FaRegCircleQuestion size={20} weight="thin" className="text-[#9ba5b1] md:absolute  md:top-105 md:left-207 z-1 " />
            <BiGridVertical size={40} className="text-[#4b4f55] md:absolute  md:top-130 md:left-204 z-2 " />
            <div className=" bg-[#1a1c1f] shadow-[0_0_80px_20px_rgba(255,255,255,0.05)]  pb-20 blur-xl  md:absolute  md:top-30 md:right-130 z-2">

            </div>
            <div className=" shadow-[8px_8px_8px_#2d3338]">
              <div className="bg-[#77797a] h-14 w-1.75 rounded-3xl  md:absolute  md:top-48 md:right-23 shadow-[5px_5px_8px_#212428] z-1"></div> 
            </div>


      
        <div className=" md:absolute md:inset-y-0 md:right-20 md:top-22 ">
          
          <ProfileTabs />
           
         </div>
        
        <div className="bg-[#303337] h-1  w-130 rounded-3xl  md:absolute  md:top-97 md:right-40  z-1 shadow-[10px_10px_10px_#181b1e]"></div> 
      <div className=" md:absolute md:inset-y-0 md:right-20 md:top-102 ">
         
             <Gallery />
             
        </div>
         <div className="bg-[#303337] h-1  w-130 rounded-3xl  md:absolute  md:top-179 md:right-40  z-1 shadow-[10px_10px_10px_#181b1e]"></div> 
      </div>
  
    </>
  );
}

export default App;
