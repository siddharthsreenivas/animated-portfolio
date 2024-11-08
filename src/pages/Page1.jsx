import React, { useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)


  const mouseMoving = (e) => {
    // setXVal(e.clientX/100)
    // setYVal(e.clientY/100)
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/30);
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20);
    // tiltRef.current.getBoundingClientRect().x = e.clientX
    
  };


  useGSAP(function(){
    gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: 'power4.out'
    })
  },[xVal,yVal])

  return (
    <div id="page1" onMouseMove={(e)=>{
        mouseMoving(e)
    }} className="h-screen px-8 p-7 relative bg-white">
      <div id="page1-in"
        className="relative p-28 h-full w-full bg-no-repeat shadow-xl shadow-gray-700 bg-cover bg-bottom rounded-[50px]"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1057,h_641,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)",
        }}
      >
        <img
          className="h-28 "
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt=""
        />
        <TiltText tiltRef={tiltRef}  />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
