import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'
// import blog1 from './Images/blog1.jpg'
// import blog2 from './Images/blog2.jpg'
// import blog3 from './Images/blog3.jpg'
import AnimatedCursor from "react-animated-cursor"


const Blog = () => {
  return (
    <>
      <AnimatedCursor color='0,192,255' />
    <Navbar/>

    <div className="main h-[max] w-full bg-[rgb(27,34,86)] flex flex-col justify-start items-center">
        <h1 className="text-2xl font-bold text-[rgb(0,192,255)] pt-10">Blog</h1>
        <h1 className="text-4xl font-bold text-center mt-5 text-white">Latest blog posts</h1>

        <div className="h-max lg:w-[82%] w-[95%] mb-[80px]  mt-16 grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="h-max bg-[rgb(58,43,113)] rounded-lg">
            <div className="pic h-[40vh] w-full rounded-t-lg">
              {/* <Image src={blog1} alt="" className="h-full w-full rounded-t-lg" /> */}
            </div>
            <p className="text-md text-[rgb(1,190,253)] ml-8 mt-8 ">Branding<span className="text-md- text-white"> January 20, 2023</span></p>
            <h1 className="text-xl text-white font-bold ml-7 mb-7 mt-2 px-1 hover:text-blue-400 cursor-pointer">When the music is over<br /> turn off the lights now</h1>
          </div>
          <div className="h-max bg-[rgb(58,43,113)] rounded-lg">
            <div className="pic h-[40vh] w-full rounded-t-lg">
              {/* <Image src={blog2} alt="" className="h-full w-full rounded-t-lg" /> */}
            </div>
            <p className="text-md text-[rgb(1,190,253)] ml-8 mt-8 ">Design<span className="text-md- text-white"> January 20, 2023</span></p>
            <h1 className="text-xl text-white font-bold ml-7 mb-7 mt-2 px-1 hover:text-blue-400 cursor-pointer">How good designers can<br /> collaborate better</h1>
          </div>
          <div className="h-max bg-[rgb(58,43,113)] rounded-lg">
            <div className="pic h-[40vh] w-full rounded-t-lg">
              {/* <Image src={blog3} alt="" className="h-full w-full rounded-t-lg" /> */}
            </div>
            <p className="text-md text-[rgb(1,190,253)] ml-8 mt-8 ">Cyber<span className="text-md- text-white"> January 20, 2023</span></p>
            <h1 className="text-xl text-white font-bold ml-7 mb-7 mt-2 px-1 hover:text-blue-400 cursor-pointer">How to be appreciated for<br /> your hardwork</h1>
          </div>
        </div>

        <p className="text-md text-gray-300 mb-[40px] text-center">Developed with love by <span className='text-[rgb(0,192,255)]'>Ahmed Awan</span> © 2024</p>

      </div>

    </>
  )
}

export default Blog