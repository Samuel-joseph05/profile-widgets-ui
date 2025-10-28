;


function ProfileTabs() {
  return (
    <div className=" bg-[#363c43] px-4 py-3 rounded-2xl shadow-[4px_4px_4px_#141619] w-160 h-70 ">
      
      <div className="   bg-[#151616] mr-7 ml-7   rounded-3xl  gap-10  text-lg font-medium  shadow-[0_2px_12px_rgba(0,0,0,0.08)] ">
        <div
          className="flex justify-center items-center gap-20 p-4
position-fixed"
        >
          <h3
            className="cursor-pointer   bg-linear-to-r from-[#1a1a1b] to-[#1e2023] 
      bg-no-repeat 
      bg-slide 
      bg-slide-hover  rounded-2xl   md:text-[#777e82]  "
          >
            About Me
          </h3>
          <h3
            className="cursor-pointer    bg-linear-to-r from-[#1a1a1b] to-[#1e2023] 
      bg-no-repeat 
      bg-slide 
      bg-slide-hover  rounded-3xl   md:text-[#777e82]  "
          >
            Experiences
          </h3>
          <h3
            className="cursor-pointer    bg-linear-to-r from-[#1a1a1b] to-[#1e2023] 
      bg-no-repeat 
      bg-slide 
      bg-slide-hover  rounded-3xl   md:text-[#777e82]   "
          >
            Recommended
          </h3>
        </div>
      </div>
   
      <p className="text-[#8c8d8d] ml-8 mr-8 my-5  text-[17px] font-medium ">
        Hello! I'm Dave, your sales rep here from Salesforce. I've been{" "}
        <br></br>working at this awesome company for 3 years now.
        <br></br>
        <br></br>I was born and raised in Albany, NY& have been living in Santa
        Carla for the past 10 years my wife Tiffany and my 4 year old twin
        daughters-Emma and Ella. Both of them are just starting school. so my
        calender is usually blocked between 9-10 AM. This is a...
      </p>
    </div>
  );
}

export default ProfileTabs;
