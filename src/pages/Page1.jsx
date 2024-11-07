import React from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const Page1 = () => {
  return (
    <div className='h-screen px-8 p-7 bg-white'>
        <div className="p-28 h-full w-full bg-no-repeat shadow-xl shadow-gray-700 bg-cover bg-bottom rounded-[50px]" style={{backgroundImage: "url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1057,h_641,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)"}}>
            <img className='h-28 ' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
            <TiltText />
            <Page1Bottom />
        </div>
    </div>
  )
}

export default Page1