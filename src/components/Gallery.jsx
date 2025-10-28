import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

function Gallery() {
  const VISIBLE = 3; // number of visible images

 
  const images = [
    "https://images.unsplash.com/photo-1760883956955-31d8adb4e6d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
    "https://images.pexels.com/photos/71116/hurricane-earth-satellite-tracking-71116.jpeg",
    "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg",
    "https://images.pexels.com/photos/45208/world-earth-planet-globe-45208.jpeg",
  ];

  const maxStart = Math.max(0, images.length - VISIBLE);
  const [startIndex, setStartIndex] = useState(0);
  const nextSlide = () => {
    if (startIndex < maxStart) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const shiftPercent = (startIndex * 100) / VISIBLE;
  
  const AddImage = () =>{
     
    // alert("Image  added")
  }

  return (
    <div className="bg-[#363c43] px-4 py-3 rounded-3xl shadow-[4px_4px_4px_#141619] w-160 h-73">
      <div className="flex align-center gap-35 md:text-[#777e82] rounded-3xl text-lg font-medium mt-2 ml-7 position-relative">
        <p className="bg-[#171717] text-white rounded-2xl px-7 py-3 text-lg">
          Gallery
        </p>
        <div className="absolute right-50 top-7">
          <button className="text-white rounded-3xl bg-[#40464d] py-3 px-5 text-[12px] shadow-[8px_8px_8px_#212529] font-medium" onClick={AddImage}>
            + ADD IMAGE
          </button>
        </div>
      </div>

      <div className="flex gap-3 absolute inset-y-0 right-15 top-7  transition-transform duration-300 ">
        <FaArrowLeft
          size={40}
          className="bg-[#2a2e32] text-[#6f787c] rounded-full hover:bg-[#1d2228] p-3 cursor-pointer"
          onClick={prevSlide}
        />
        <FaArrowRight
          size={40}
          className="bg-[#2a2e32] text-[#6f787c] rounded-full p-3 hover:bg-[#1d2228] cursor-pointer"
          onClick={nextSlide}
        />
      </div>

      {/* Add overflow container and flex layout */}
      <div className="overflow-hidden pb-4 pl-2 ">
        <div
          className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${shiftPercent}%)` }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="shrink-0 w-1/3 px-4 z-1">
              <img
                src={src}
                alt={`Slide ${idx}`}
                className="w-full h-40 object-cover mt-10 rounded-2xl 
                transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-6 
                filter grayscale hover:grayscale-0 hover:shadow-[8px_8px_8px_#212529]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
