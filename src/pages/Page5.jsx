import React from "react";

const Page5 = () => {
  return (
    <div className="h-screen relative p-10 bg-white">
      <div className="h-full w-full bg-black rounded-[50px] overflow-hidden">
        <video autoPlay muted loop className="h-full w-full object-cover" src="src/assets/moon.mp4"></video>
        <h1 className="font-[font4] text-[35vw] absolute left-32 -bottom-36 text-white">ABOUT</h1>
      </div>
    </div>
  );
};

export default Page5;
