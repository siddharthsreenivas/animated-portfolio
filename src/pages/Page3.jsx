import React from 'react'

const Page3 = () => {
  return (
    <div className='relative h-screen bg-white flex items-center justify-center mb-11'>
      <img className='absolute top-[136px] z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1256,h_722,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
      <video autoPlay loop muted className='h-[62vh] w-[49vw] object-cover relative z-10' src="src/assets/laptop-video.mp4"></video>
      <div className='h-0.5 w-3/5 bg-black top-[40%] absolute z-0'></div>
      <div className='h-0.5 w-4/5 bg-black top-[58%] absolute z-0'></div>
      <div className='h-0.5 w-full bg-black top-[76%] absolute z-0'></div>
    </div>
  )
}

export default Page3