import React from 'react'
import { CiMonitor } from "react-icons/ci";
import { FaAnchor } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";
import { TfiTarget } from "react-icons/tfi";
import { FaUsersGear } from "react-icons/fa6";
import { LuFileCode } from "react-icons/lu";
import Navbar from '../Navbar';
// import Contact from '../contact/page';
import AnimatedCursor from "react-animated-cursor"

const Services = () => {
  return (
    <div>
      <AnimatedCursor color='0,192,255' />
      <Navbar />
      <div className="main h-[max-content] w-full bg-[rgb(27,34,86)] flex flex-col justify-start items-center pb-5">
        <h1 className="text-2xl font-bold text-[rgb(0,192,255)] pt-10">Services</h1>
        <h1 className="text-4xl font-bold  text-center mt-5 text-white">What I do for my clients</h1>

        <div className="tiles_container h-max lg:w-[82%] w-[95%] gap-6 mt-16 grid grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-[80px]">

          <div className="cardsss cursor-pointer h-max bg-[rgb(58,43,113)] rounded-xl flex flex-col justify-evenly items-center py-14 group">
            <div className="div h-28 w-28 flex justify-center items-center relative">
              < CiMonitor className='icon absolute top-0 left-0 group-hover:top-[30%] group-hover:left-[29%] transition-[.34s] group-hover:scale-100 scale-150 text-[rgb(0,192,255)] group-hover:text-white text-5xl' />
              <div className="inside h-16 w-16 rounded-full bg-[rgb(67,45,146)] group-hover:bg-[rgb(0,192,255)] transition-[.34s]"></div>
            </div>
            <h1 className='text-xl font-bold text-white mt-4'>Website Design</h1>
            <p className="text-center text-gray-300 px-4 mt-5">Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor</p>
          </div>

          <div className="cardsss cursor-pointer h-max bg-[rgb(58,43,113)] rounded-xl flex flex-col justify-evenly items-center py-14 group">
            <div className="div h-28 w-28 flex justify-center items-center relative">
              <FaAnchor className='icon absolute top-0 left-0 group-hover:top-[29%] group-hover:left-[29%] transition-[.34s] group-hover:scale-100 scale-150 text-[rgb(0,192,255)] group-hover:text-white text-5xl' />
              <div className="inside h-16 w-16 rounded-full bg-[rgb(67,45,146)] group-hover:bg-[rgb(0,192,255)] transition-[.34s]"></div>
            </div>
            <h1 className='text-xl font-bold text-white mt-4'>Graphic Design</h1>
            <p className="text-center text-gray-300 px-4 mt-5">Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor</p>
          </div>

          <div className="cardsss cursor-pointer h-max bg-[rgb(58,43,113)] rounded-xl  flex flex-col justify-evenly items-center py-14 group">
            <div className="div h-28 w-28 flex justify-center items-center relative">
              <ImStatsBars2 className='icon absolute top-0 left-0 group-hover:top-[27%] group-hover:left-[28%] transition-[.34s] group-hover:scale-90 scale-150 text-[rgb(0,192,255)] group-hover:text-white text-5xl' />
              <div className="inside h-16 w-16 rounded-full bg-[rgb(67,45,146)] group-hover:bg-[rgb(0,192,255)] transition-[.34s]"></div>
            </div>
            <h1 className='text-xl font-bold text-white mt-4'>Digital Marketing</h1>
            <p className="text-center text-gray-300 px-4 mt-5">Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor</p>
          </div>



          <div className="cardsss cursor-pointer h-max bg-[rgb(58,43,113)] rounded-xl flex flex-col justify-evenly items-center py-14 group">
            <div className="div h-28 w-28 flex justify-center items-center relative">
              <TfiTarget className='icon absolute top-0 left-0 group-hover:top-[29%] group-hover:left-[29%] transition-[.34s] group-hover:scale-100 scale-150 text-[rgb(0,192,255)] group-hover:text-white text-5xl' />
              <div className="inside h-16 w-16 rounded-full bg-[rgb(67,45,146)] group-hover:bg-[rgb(0,192,255)] transition-[.34s]"></div>
            </div>
            <h1 className='text-xl font-bold text-white mt-4'>Photography</h1>
            <p className="text-center text-gray-300 px-4 mt-5">Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor</p>
          </div>

          <div className="cardsss cursor-pointer h-max bg-[rgb(58,43,113)] rounded-xl flex flex-col justify-evenly items-center py-14 group">
            <div className="div h-28 w-28 flex justify-center items-center relative">
              <FaUsersGear className='icon absolute top-0 left-0 group-hover:top-[29%] group-hover:left-[29%] transition-[.34s] group-hover:scale-100 scale-150 text-[rgb(0,192,255)] group-hover:text-white text-5xl' />
              <div className="inside h-16 w-16 rounded-full bg-[rgb(67,45,146)] group-hover:bg-[rgb(0,192,255)] transition-[.34s]"></div>
            </div>
            <h1 className='text-xl font-bold text-white mt-4'>Consultancy</h1>
            <p className="text-center text-gray-300 px-4 mt-5">Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor</p>
          </div>

          <div className="cardsss cursor-pointer h-max bg-[rgb(58,43,113)] rounded-xl  flex flex-col justify-evenly items-center py-14 group">
            <div className="div h-28 w-28 flex justify-center items-center relative">
              < LuFileCode className='icon absolute top-0 left-0 group-hover:top-[29%] group-hover:left-[29%] transition-[.34s] group-hover:scale-90 scale-150 text-[rgb(0,192,255)] group-hover:text-white text-5xl' />
              <div className="inside h-16 w-16 rounded-full bg-[rgb(67,45,146)] group-hover:bg-[rgb(0,192,255)] transition-[.34s]"></div>
            </div>
            <h1 className='text-xl font-bold text-white mt-4'>Web Development</h1>
            <p className="text-center text-gray-300 px-4 mt-5">Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor</p>
          </div>
        </div>
        <p className="text-md text-gray-300 mb-[40px] text-center">Developed with love by <span className='text-[rgb(0,192,255)]'>Ahmed Awan</span> © 2024</p>
      </div>

    </div>
  )
}

export default Services