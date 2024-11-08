import React from "react";

const Page5 = () => {
  return (
    <div className="h-screen relative px-8 py-7 bg-white">
      <div className="h-full w-full bg-black rounded-[50px] overflow-hidden relative shadow-xl shadow-gray-700">
        <video autoPlay muted loop className="h-full w-full object-cover" src="src/assets/moon.mp4"></video>
        <div className="absolute z-10 -bottom-10 left-28 h-full">
          <h1 className="font-[font4] text-[35vw] text-white">ABOUT</h1>
        </div>
      </div>
    </div>
  );
};

export default Page5;
