"use client"
import React from 'react'
import Navbar from '../Navbar'
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Tilt } from 'react-next-tilt'
import AnimatedCursor from "react-animated-cursor"


const contact = () => {
  return (
    <>
      <AnimatedCursor color='0,192,255' />
    <Navbar/>

    <div className="main h-max w-full bg-[rgb(31,19,69)] gap-5 overflow-hidden flex flex-col justify-start items-center">
        <h1 className="text-2xl font-bold text-[rgb(0,192,255)] pt-12">Contact</h1>
        <h1 className="text-4xl font-bold text-center mt-5 text-white">I Want to Hear from You</h1>

        <div className="container h-max lg:w-[82%] w-[95%] mt-10 grid lg:grid-cols-2 grid-cols-1">

          <div className="h-[55vh] flex flex-col justify-evenly items-start">
            <div className="h-[15vh] w-full  flex justify-around items-center">
              <div className="round flex justify-center items-center text-3xl text-white bg-[rgb(0,192,255)] h-20 w-20 rounded-full">
                <IoLocationSharp />
              </div>
              <div className="remain h-[15vh] w-[70%] flex flex-col justify-evenly items-start">
                <h1 className="text-2xl text-white font-bold">Address</h1>
                <p className="text-lg text-gray-400">20, Somwhere in the world</p>
              </div>
            </div>
            <div className="h-[15vh] w-full  flex justify-around items-center">
              <div className="round flex justify-center items-center text-3xl text-white bg-[rgb(0,192,255)] h-20 w-20 rounded-full">
                <FaEnvelope />     </div>
              <div className="remain h-[15vh] w-[70%] flex flex-col justify-evenly items-start">
                <h1 className="text-2xl text-white font-bold">Email</h1>
                <p className="text-lg text-gray-400">abc@gmail.com</p>
              </div>
            </div>
            <div className="h-[15vh] w-full  flex justify-around items-center">
              <div className="round flex justify-center items-center text-3xl text-white bg-[rgb(0,192,255)] h-20 w-20 rounded-full">
                <FaPhoneAlt />

              </div>
              <div className="remain h-[15vh] w-[70%] flex flex-col justify-evenly items-start">
                <h1 className="text-2xl text-white font-bold">Phone</h1>
                <p className="text-lg text-gray-400">+123456789</p>
              </div>
            </div>
          </div>

          <div className="h-max flex flex-wrap justify-around items-start">
            <input type="text" className="h-12 w-[45%] border mt-2 rounded-lg bg-transparent text-white pl-3" placeholder='Your name...' />
            <input type="text" className="h-12 w-[45%] border mt-2 rounded-lg bg-transparent text-white pl-3" placeholder='Your Email...' />
            <input type="text" className="h-12 w-[45%] border mt-2 rounded-lg bg-transparent text-white pl-3" placeholder='Your Phone no.' />
            <input type="text" className="h-12 w-[45%] border mt-2 rounded-lg bg-transparent text-white pl-3" placeholder='Subject' />
            <textarea name="" id="" className="h-[35vh] mt-3 text-white w-full pt-2 pl-3 bg-transparent border mx-3" placeholder='Your message here....'></textarea>
            <button className="py-3 px-7 bg-[rgb(0,192,255)] text-white text-lg hover:text-black hover:bg-white cursor-pointer rounded-full mt-4">Submit now</button>
          </div>
        </div>
        <Tilt className='lg:w-[82%] w-[95%] m-auto mt-[100px] mb-[40px]'>
          <div className="last h-max cursor-pointer w-full bg-[rgb(67,45,146)] rounded-lg grid lg:grid-cols-2 sm:p-[70px] p-[30px]">
            <div className="h-32 flex flex-col justify-evenly items-start">
              <p className="subs text-xl text-blue-500 font-semibold">Subscribe now</p>
              <h1 className="text-3xl text-white font-bold">Get My Newsletter</h1>
              <p className="text-mg text-gray-300">Get latest news, tips and trics in your inbox</p>
            </div>
            <div className="h-32 flex justify-center items-center">
              <div className="h-20 w-full rounded-2xl flex">
                <input type="text" className="h-20 sm:w-[70%] w-[60%] rounded-l-xl pl-3" placeholder='Your email here....' />
                <button className="h-20 sm:w-[30%] w-[40%] bg-[rgb(0,192,255)] rounded-r-xl sm:text-lg text-sm text-white">Send now</button>
              </div>

            </div>
          </div>
        </Tilt>
        <p className="text-md text-gray-300 mb-[40px] text-center">Developed with love by <span className='text-[rgb(0,192,255)]'>Ahmed Awan</span> © 2024</p>
      </div>
    </>
  )
}

export default contact