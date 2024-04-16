"use client"
import React from 'react'
import AnimatedCursor from "react-animated-cursor"
import { IoIosBriefcase } from 'react-icons/io'
import { IoDiamondOutline } from 'react-icons/io5'
import { CiMonitor, CiSettings } from 'react-icons/ci'
import { Tilt } from 'react-next-tilt'
import avatar from './Images/avatar.png'
// import HoverCard from "@darenft/react-3d-hover-card";
// import "@darenft/react-3d-hover-card/dist/style.css";


// about
import { SlBadge } from "react-icons/sl";
import Image from 'next/image';
import ProgressBar from "@ramonak/react-progress-bar";
import Navbar from './Navbar'
import about from './Images/2.jpg'
import about1 from './Images/1.png'
import { ImStatsBars2 } from 'react-icons/im'
import { FaAnchor } from 'react-icons/fa'
import { TfiTarget } from 'react-icons/tfi'
import { FaUsersGear } from 'react-icons/fa6'
import { LuFileCode } from 'react-icons/lu'

//portfolio

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import Axe from './Images/1 (1).jpg'
import Mock from './Images/2 (1).jpg'
import Afra from './Images/3.jpg'
import Idea from './Images/4.jpg'
import Magic from './Images/5.jpg'
import Creat from './Images/6.jpg'
import Alan from './Images/3 (1).jpg'
import Mike from './Images/2 (2).jpg'
import Keita from './Images/1 (2).jpg'
import two from './Images/2.png'
import three from './Images/3.png'
import four from './Images/4.png'
import five from './Images/5.png'
import six from './Images/6.png'

// Blog

import blog1 from './Images/blog1.jpg'
import blog2 from './Images/blog2.jpg'
import blog3 from './Images/blog3.jpg'

// Contact

import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { Tilt } from 'react-tilt';


const home = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const defaultOptions: any = {
    reverse: false,  // reverse the tilt direction
    max: 30,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <>
      <AnimatedCursor color='0,192,255' />
      <Navbar />
      {/* main */}
      <div className="main h-max w-full bg-[rgb(27,34,86)] flex flex-col justify-between items-center overflow-hidden">
        <div className="pics h-max lg:w-[82%] w-[95%] md:mt-10 mt-5 flex md:flex-row flex-col-reverse">
          <div className="intro h-max md:w-[50%] w-full flex flex-col md:items-start items-center">
            <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold text-white mt-5">James <span className='text-[rgb(0,192,255)]'>Smith</span></h1>
            <p className="md:text-xl sm:text-lg text-sm text-white mt-5">Web designer based in New York</p>
            <div className="py-4 px-9 mt-8 bg-[rgb(0,192,255)] hover:bg-white hover:text-black rounded-full text-white cursor-pointer">Get Connected</div>
          </div>
          <div className="intro h-[60vh] md:w-[50%] w-full flex justify-center items-center">
            {/* <HoverCard scaleFactor={1.4}> */}
            <Image src={avatar} alt='' className="transform scale-75 cursor-pointer md:h-max md:w-max h-[350px]" />
            {/* <img src="https://marketifythemes.net/tailwind/foliox/assets/img/hero/avatar.png" alt="" className="transform scale-75 cursor-pointer md:h-max md:w-max h-[350px]" /> */}
            {/* </HoverCard> */}
          </div>
        </div>
        <div className="tiles h-max lg:w-[82%] w-[95%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20 mb-[100px]">
          {/* <Tilt options={defaultOptions}> */}

          <div className="cards bg-[rgb(58,43,113)] cursor-pointer md:h-[65vh] h-[60vh] rounded-xl flex md:justify-center items-center">
            <div className="inside h-max sm:w-[70%] w-[70%] flex flex-col md:ml-0 ml-10 sm:mb-0">
              <CiSettings className='text-8xl text-[rgb(0,192,255)]' />
              <h1 className="text-[22px] text-white font-bold sm:mt-5 mt-3">Deeper Skillset</h1>
              <p className="text-[16px] text-[rgb(180,175,198)] mt-5">Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
            </div>
          </div>
          {/* </Tilt> */}
          {/* <Tilt options={defaultOptions}> */}
          <div className="cards bg-[rgb(58,43,113)] cursor-pointer md:h-[65vh] h-[60vh] rounded-xl flex md:justify-center items-center">
            <div className="inside h-max w-[70%] flex flex-col md:ml-0 ml-10">
              <IoIosBriefcase className='ic text-7xl text-[rgb(0,192,255)]' />
              <h1 className="text-[22px] text-white font-bold sm:mt-6 mt-4">Creative work</h1>
              <p className="text-[16px] text-[rgb(180,175,198)] mt-5">Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
            </div>
          </div>

          {/* </Tilt> */}
          {/* <Tilt options={defaultOptions}> */}

          <div className="cards bg-[rgb(58,43,113)] cursor-pointer md:h-[65vh] h-[60vh] rounded-xl flex md:justify-center items-center">
            <div className="inside h-hax w-[70%] flex flex-col md:ml-0 ml-10">
              <IoDiamondOutline className='ic text-7xl text-[rgb(0,192,255)]' />
              <h1 className="text-[22px] text-white font-bold sm:mt-5 mt-3">Strong dedication</h1>
              <p className="text-[16px] text-[rgb(180,175,198)] mt-5">Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
            </div>
          </div>
          {/* </Tilt> */}
        </div>
      </div>

      {/* About */}

      <div className="main h-[max-content] pb-5 w-full bg-[rgb(30,22,73)] flex flex-col justify-start items-center">
        <h1 className="text-[22px] font-semibold text-[rgb(0,192,255)] pt-10">About Me</h1>
        <h1 className="text-4xl font-bold  text-center mt-5 text-white lg:w-[45%] md:w-[60%] sm:w-[75%] w-[95%]">A Passionate Developer Who Loves to Code</h1>
        <div className="h-max lg:w-[82%] w-[95%] mt-20 grid lg:grid-cols-2 grid-cols-1">
          <div className="pics relative h-[90vh]">
            <div className="badge h-20 w-20 cursor-pointer absolute top-24 left-[47px] lg:visible invisible rounded-lg bg-[rgb(0,192,255)] flex justify-center items-center">
              <SlBadge className='text-5xl text-white' />
            </div>
            <div className="pic lg:h-[70vh] lg:w-[65%] h-[400px] md:w-[35%] sm:w-[45%] absolute top-0 lg:left-40 left-0 rounded-md">
              <Image src={about1} className="h-full w-full" alt='' />
              {/* <img src={about1} alt="" className="h-full w-full" /> */}
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
      </div>

      {/* services */}

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
      </div>

      {/* Portfolio */}

      <div className="main h-[max-content] pb-5 w-full bg-[rgb(32,18,69)] flex flex-col justify-center items-center overflow-hidden">
        <h1 className="text-2xl font-bold text-[rgb(0,192,255)] pt-10">Portfolio</h1>
        <h1 className="text-4xl font-bold  text-center mt-5 text-white">What I do for my clients</h1>
        <div className="serv h-10 md:w-[60%] sm:w-[75%] w-[95%] mt-16 flex justify-between m-auto">
          <p className="sm:text-[16px] text-[12px] text-white cursor-pointer hover:text-[rgb(0,192,255)]">All</p>
          <p className="sm:text-[16px] text-[12px] text-white cursor-pointer hover:text-[rgb(0,192,255)]">Youtube</p>
          <p className="sm:text-[16px] text-[12px] text-white cursor-pointer hover:text-[rgb(0,192,255)]">Vimeo</p>
          <p className="sm:text-[16px] text-[12px] text-white cursor-pointer hover:text-[rgb(0,192,255)]">Soundcloud</p>
          <p className="sm:text-[16px] text-[12px] text-white cursor-pointer hover:text-[rgb(0,192,255)]">Pop-up</p>
          <p className="sm:text-[16px] text-[12px] text-white cursor-pointer hover:text-[rgb(0,192,255)]">Content</p>
        </div>
        <div className="cards_container h-max lg:w-[82%] w-[95%] mt-10 grid grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="gg cursor-pointer h-[310px] group rounded-lg relative overflow-hidden ">
            <div className="hj h-24 w-[85%] absolute -bottom-28 left-[7.5%] group-hover:bottom-[7.5%] transition-[.34s] group-hover:left-[7.5%] rounded-2xl bg-[rgb(32,18,69)] flex flex-col justify-evenly items-start pl-4 py-4">
              <h1 className="text-xl text-white font-bold">Axe droow</h1>
              <p className="text-lg text-gray-400">Youtube</p>
            </div>
            <Image src={Axe} alt="" className='h-full w-full rounded-lg' />
          </div>
          <div className="gg cursor-pointer h-[310px] rounded-lg relative overflow-hidden group ">
            <div className="hj h-24 w-[85%] absolute -bottom-28 left-[7.5%] group-hover:bottom-[7.5%] transition-[.34s] group-hover:left-[7.5%] rounded-2xl bg-[rgb(32,18,69)] flex flex-col justify-evenly items-start pl-4 py-4">
              <h1 className="text-xl text-white font-bold">mock up clock</h1>
              <p className="text-lg text-gray-400">Vimeo</p>
            </div>
            <Image src={Mock} alt="" className='h-full w-full rounded-lg' />
          </div>
          <div className="gg cursor-pointer h-[310px] rounded-lg relative overflow-hidden group">
            <div className="hj h-24 w-[85%] absolute -bottom-28 left-[7.5%] group-hover:bottom-[7.5%] transition-[.34s] group-hover:left-[7.5%] rounded-2xl bg-[rgb(32,18,69)] flex flex-col justify-evenly items-start pl-4 py-4">
              <h1 className="text-xl text-white font-bold">Afra porter</h1>
              <p className="text-lg text-gray-400">Soundcloud</p>
            </div>
            <Image src={Afra} alt="" className='h-full w-full rounded-lg' />
          </div>
          <div className="gg cursor-pointer h-[310px] rounded-lg relative overflow-hidden group">
            <div className="hj h-24 w-[85%] absolute -bottom-28 left-[7.5%] group-hover:bottom-[7.5%] transition-[.34s] group-hover:left-[7.5%] rounded-2xl bg-[rgb(32,18,69)] flex flex-col justify-evenly items-start pl-4 py-4">
              <h1 className="text-xl text-white font-bold">good Idea</h1>
              <p className="text-lg text-gray-400">Pop-up</p>
            </div>
            <Image src={Idea} alt="" className='h-full w-full rounded-lg' />
          </div>
          <div className="gg cursor-pointer h-[310px] rounded-lg relative overflow-hidden group">
            <div className="hj h-24 w-[85%] absolute -bottom-28 left-[7.5%] group-hover:bottom-[7.5%] transition-[.34s] group-hover:left-[7.5%] rounded-2xl bg-[rgb(32,18,69)] flex flex-col justify-evenly items-start pl-4 py-4">
              <h1 className="text-xl text-white font-bold">Magic Art</h1>
              <p className="text-lg text-gray-400">Pop-up</p>
            </div>
            <Image src={Magic} alt="" className='h-full w-full rounded-lg' />
          </div>
          <div className="gg cursor-pointer h-[310px] rounded-lg relative overflow-hidden group">
            <div className="hj h-24 w-[85%] absolute -bottom-28 left-[7.5%] group-hover:bottom-[7.5%] transition-[.34s] group-hover:left-[7.5%] rounded-2xl bg-[rgb(32,18,69)] flex flex-col justify-evenly items-start pl-4 py-4">
              <h1 className="text-xl text-white font-bold">creative design</h1>
              <p className="text-lg text-gray-400">Content</p>
            </div>
            <Image src={Creat} alt="" className='h-full w-full rounded-lg' />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-[rgb(0,192,255)] pt-28">Testimonials</h1>
        <h1 className="text-4xl font-bold  text-center mt-5 text-white">What Clients Say</h1>
        <div className="d h-[max-content] w-[80%] mt-14">
          <Slider {...settings}>
            <div className='slide'>
              <FaQuoteLeft className='text-7xl text-[rgb(0,192,255)] text-center m-auto' />
              <h1 className="md:text-2xl text-[17px] text-white italic text-center mt-10">This guy is best in his business, Timely completed my project. The design quality is of next level. I really recommed him for big projects</h1>
              <div className="h-20 w-72 m-auto mt-16 flex justify-around items-center">
                <div className="h-16 w-16 rounded-full">
                  <Image src={Alan} alt="" className='h-full w-full rounded-full' />
                </div>
                <div className="h-16 w-44 flex flex-col justify-evenly items-start">
                  <h1 className="text-xl text-white font-bold">Alan Walker</h1>
                  <p className="text-lg text-gray-300">Web Designer</p>
                </div>
              </div>
            </div>
            <div className='slide'>
              <FaQuoteLeft className='text-7xl text-[rgb(0,192,255)] text-center m-auto' />
              <h1 className="md:text-2xl text-[17px] text-white italic text-center mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae numquam ex, saepe laudantium ipsa, veritatis illo laboriosam quae velit qui in vero consectetur delectus est. Dicta sit molestiae asperiores quisquam.</h1>
              <div className="h-20 w-72 m-auto mt-16 flex justify-around items-center">
                <div className="h-16 w-16 rounded-full">
                  <Image src={Mike} alt="" className='h-full w-full rounded-full' />
                </div>
                <div className="h-16 w-44 flex flex-col justify-evenly items-start">
                  <h1 className="text-xl text-white font-bold">Mike Anderson</h1>
                  <p className="text-lg text-gray-300">Vivaco studio</p>
                </div>
              </div>
            </div>
            <div className='slide'>
              <FaQuoteLeft className='text-7xl text-[rgb(0,192,255)] text-center m-auto' />
              <h1 className="md:text-2xl text-[17px] text-white italic text-center mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae numquam ex, saepe laudantium ipsa, veritatis illo laboriosam quae velit qui in vero consectetur delectus est. Dicta sit molestiae asperiores quisquam.</h1>
              <div className="h-20 w-72  m-auto mt-16 flex justify-around items-center">
                <div className="h-16 w-16 rounded-full">
                  <Image src={Keita} alt="" className='h-full w-full rounded-full' />
                </div>
                <div className="h-16 w-44 flex flex-col justify-evenly items-start">
                  <h1 className="text-xl text-white font-bold">Keita Smith</h1>
                  <p className="text-lg text-gray-300">ABC Group</p>
                </div>
              </div>
            </div>

          </Slider>

        </div>

        <div className="tech h-max lg:w-[82%] w-[95%] mt-36 rounded-lg bg-[rgb(67,45,146)] grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-[80px] py-10 px-5">
          {/* <div className="h-20 w-full"> */}
          <Image src={two} alt="" className="opacity-70 h-20 w-full hover:opacity-100 cursor-pointer sm:flex hidden" />
          <Image src={three} alt="" className="opacity-70 h-20 w-full hover:opacity-100 cursor-pointer" />
          <Image src={four} alt="" className="opacity-70 h-20 w-full hover:opacity-100 cursor-pointer" />
          <Image src={five} alt="" className="opacity-70 h-20 w-full hover:opacity-100 cursor-pointer" />
          <Image src={six} alt="" className="opacity-70 h-20 w-full hover:opacity-100 cursor-pointer sm:flex hidden" />
          {/* </div> */}
        </div>
      </div>

      {/* Blog */}

      <div className="main h-[max] w-full bg-[rgb(27,34,86)] flex flex-col justify-start items-center">
        <h1 className="text-2xl font-bold text-[rgb(0,192,255)] pt-10">Blog</h1>
        <h1 className="text-4xl font-bold text-center mt-5 text-white">Latest blog posts</h1>

        <div className="h-max lg:w-[82%] w-[95%] mb-[80px]  mt-16 grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="h-max bg-[rgb(58,43,113)] rounded-lg">
            <div className="pic h-[40vh] w-full rounded-t-lg">
              <Image src={blog1} alt="" className="h-full w-full rounded-t-lg" />
            </div>
            <p className="text-md text-[rgb(1,190,253)] ml-8 mt-8 ">Branding<span className="text-md- text-white"> January 20, 2023</span></p>
            <h1 className="text-xl text-white font-bold ml-7 mb-7 mt-2 px-1 hover:text-blue-400 cursor-pointer">When the music is over<br /> turn off the lights now</h1>
          </div>
          <div className="h-max bg-[rgb(58,43,113)] rounded-lg">
            <div className="pic h-[40vh] w-full rounded-t-lg">
              <Image src={blog2} alt="" className="h-full w-full rounded-t-lg" />
            </div>
            <p className="text-md text-[rgb(1,190,253)] ml-8 mt-8 ">Design<span className="text-md- text-white"> January 20, 2023</span></p>
            <h1 className="text-xl text-white font-bold ml-7 mb-7 mt-2 px-1 hover:text-blue-400 cursor-pointer">How good designers can<br /> collaborate better</h1>
          </div>
          <div className="h-max bg-[rgb(58,43,113)] rounded-lg">
            <div className="pic h-[40vh] w-full rounded-t-lg">
              <Image src={blog3} alt="" className="h-full w-full rounded-t-lg" />
            </div>
            <p className="text-md text-[rgb(1,190,253)] ml-8 mt-8 ">Cyber<span className="text-md- text-white"> January 20, 2023</span></p>
            <h1 className="text-xl text-white font-bold ml-7 mb-7 mt-2 px-1 hover:text-blue-400 cursor-pointer">How to be appreciated for<br /> your hardwork</h1>
          </div>
        </div>
      </div>

      {/* Contact */}

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

export default home