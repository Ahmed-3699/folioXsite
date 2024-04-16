"use client"
import React from 'react'
import Navbar from '../Navbar'
import { SlBadge } from "react-icons/sl";
import Image from 'next/image';
import ProgressBar from "@ramonak/react-progress-bar";
import about from '../Images/2.jpg'
import { ImStatsBars2 } from 'react-icons/im'
import { FaAnchor } from 'react-icons/fa'
import { TfiTarget } from 'react-icons/tfi'
import { FaUsersGear } from 'react-icons/fa6'
import { LuFileCode } from 'react-icons/lu'
import AnimatedCursor from "react-animated-cursor"



const About = () => {
  return (
    <>
      <AnimatedCursor color='0,192,255' />
      <Navbar />

      <div className="main h-[max-content] pb-5 w-full bg-[rgb(30,22,73)] flex flex-col justify-start items-center">
        <h1 className="text-[22px] font-semibold text-[rgb(0,192,255)] pt-10">About Me</h1>
        <h1 className="text-4xl font-bold  text-center mt-5 text-white lg:w-[45%] md:w-[60%] sm:w-[75%] w-[95%]">A Passionate Developer Who Loves to Code</h1>
        <div className="h-max lg:w-[82%] w-[95%] mt-20 grid lg:grid-cols-2 grid-cols-1">
          <div className="pics relative h-[90vh]">
            <div className="badge h-20 w-20 cursor-pointer absolute top-24 left-[47px] lg:visible invisible rounded-lg bg-[rgb(0,192,255)] flex justify-center items-center">
              <SlBadge className='text-5xl text-white' />
            </div>
            <div className="pic lg:h-[70vh] lg:w-[65%] h-[400px] md:w-[35%] sm:w-[45%] absolute top-0 lg:left-40 left-0 rounded-md">
              <Image src="https://marketifythemes.net/tailwind/foliox/assets/img/about/1.png" alt="" className="h-full w-full" />
              {/* <img src="https://marketifythemes.net/tailwind/foliox/assets/img/about/1.png" alt="" className="h-full w-full" /> */}
            </div>
            <div className="second_img h-56 w-64 absolute lg:visible invisible bottom-2 left-10 rounded-md">
              <Image src={about} alt='' className='rounded-md' />
            </div>
            <div className=' absolute bottom-4 lg:visible invisible right-10 flex gap-3'>
              <div className="text text-2xl text-white h-14  border-l-8 border-[rgb(0,192,255)]"> <span className="text-5xl ml-3 text-white font-bold"> 12</span></div>
              <p className='text-white'>Successful <br /> Years</p>
            </div>
          </div>
          <div className="intro sm:h-[90vh] h-max flex flex-col justify-around items-start lg:pl-5 pl-0">
            <h1 className="text-4xl font-bold text-white md:mt-0 mt-14">About me</h1>
            <p className=" text-gray-400 text-md mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, nisi dolore. Obcaecati repudiandae repellat necessitatibus voluptatum beatae! Quia, dolorem, consequuntur molestiae dolore quis facere laudantium odio, enim facilis distinctio porro.</p>
            <div className="h-max lg:w-[80%] w-[100%] rounded-md flex sm:flex-row flex-col sm:justify-between sm:items-center lg:mt-0 mt-5">
              <div className="div1 lg:h-[35vh] h-[50vh] sm:w-[50%]  w-full flex flex-col justify-evenly items-start pl-8 border rounded-md">
                <h1 className="Name text-lg text-white font-bold">Name</h1>
                <p className="text-md text-gray-400">Alan walker</p>
                <h1 className="Name text-lg text-white font-bold">Email:</h1>
                <p className="text-md text-gray-400">abc@gmail.com</p>
                <h1 className="Name text-lg text-white font-bold">Phone no:</h1>
                <p className="text-md text-gray-400">+12345678</p>
              </div>
              <div className="div1 lg:h-[35vh] h-[50vh] sm:w-[50%]  w-full flex flex-col border justify-evenly items-start pl-8 rounded-md">
                <h1 className="Name text-lg text-white font-bold">Address</h1>
                <p className="text-md text-gray-400">20, bordeshi, Dhaka</p>
                <h1 className="Name text-lg text-white font-bold">Degree</h1>
                <p className="text-md text-gray-400">Masters</p>
                <h1 className="Name text-lg text-white font-bold">Freelance</h1>
                <p className="text-md text-gray-400">Available</p>
              </div>
            </div>
            <div className="py-4 px-10 lg:mt-2 mt-7 bg-[rgb(0,192,255)] hover:bg-white hover:text-black  rounded-full text-white font-semibold cursor-pointer">Download CV</div>
          </div>
        </div>

        <div className="tiles h-max grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:w-[82%] w-[95%] md:mt-[200px] mt-[100px]">
          <div className="h-[25vh] text-4xl text-[rgb(0,192,255)] font-bold rounded-md flex justify-center items-center cursor-pointer bg-[rgb(67,45,146)]">20  <span className="aa text-lg text-white ml-2">  Digital products</span></div>
          <div className="h-[25vh] text-4xl text-[rgb(0,192,255)] font-bold rounded-md flex justify-center items-center cursor-pointer bg-[rgb(67,45,146)]">280  <span className="aa text-lg text-white ml-2">  Direct Clients</span></div>
          <div className="h-[25vh] text-4xl text-[rgb(0,192,255)] font-bold rounded-md flex justify-center items-center cursor-pointer bg-[rgb(67,45,146)]">3K  <span className="aa text-lg text-white ml-2">  Total projects</span></div>
          <div className="h-[25vh] text-4xl text-[rgb(0,192,255)] font-bold rounded-md flex justify-center items-center cursor-pointer bg-[rgb(67,45,146)]">9+  <span className="aa text-lg text-white ml-2">  Awards win</span></div>
        </div>

        <h1 className="text-2xl font-bold text-[rgb(0,192,255)] pt-28">Skills</h1>
        <h1 className="text-4xl font-bold  text-center mt-5 text-white">I work hard to improve my skills<br /> regularly</h1>

        <div className="h-[70vh] lg:w-[82%] w-[95%] mt-12 flex flex-wrap justify-around items-center mb-[70px]">
          <div className="div h-24 w-[50%] flex flex-col justify-evenly items-start">
            <h1 className="text-white text-xl font-bold">HTML</h1>
            <ProgressBar completed="95" className='w-[90%]' />

          </div>
          <div className="div h-24 w-[50%] flex flex-col justify-evenly items-start">
            <h1 className="text-white text-xl font-bold">CSS</h1>
            <ProgressBar completed="90" className='w-[90%]' />

          </div>
          <div className="div h-24 w-[50%] flex flex-col justify-evenly items-start">
            <h1 className="text-white text-xl font-bold">Javascript</h1>
            <ProgressBar completed="80" className='w-[90%]' />

          </div>
          <div className="div h-24 w-[50%] flex flex-col justify-evenly items-start">
            <h1 className="text-white text-xl font-bold">React</h1>
            <ProgressBar completed="70" className='w-[90%]' />

          </div>
          <div className="div h-24 w-[50%] flex flex-col justify-evenly items-start">
            <h1 className="text-white text-xl font-bold">Vue</h1>
            <ProgressBar completed="75" className='w-[90%]' />

          </div>
          <div className="div h-24 w-[50%] flex flex-col justify-evenly items-start">
            <h1 className="text-white text-xl font-bold">Angular</h1>
            <ProgressBar completed="60" className='w-[90%]' />

          </div>
        </div>

        <p className="text-md text-gray-300 mb-[40px] text-center">Developed with love by <span className='text-[rgb(0,192,255)]'>Ahmed Awan</span> © 2024</p>
      </div>

    </>
  )
}

export default About