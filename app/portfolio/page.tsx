"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import Image from 'next/image';
import Axe from '../Images/1 (1).jpg'
import Mock from '../Images/2 (1).jpg'
import Afra from '../Images/3.jpg'
import Idea from '../Images/4.jpg'
import Magic from '../Images/5.jpg'
import Creat from '../Images/6.jpg'
import Alan from '../Images/3 (1).jpg'
import Mike from '../Images/2 (2).jpg'
import Keita from '../Images/1 (2).jpg'
import two from '../Images/2.png'
import three from '../Images/3.png'
import four from '../Images/4.png'
import five from '../Images/5.png'
import six from '../Images/6.png'
import Navbar from '../Navbar';
import AnimatedCursor from "react-animated-cursor"


const portfolio = () => {

  var settings:any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <AnimatedCursor color='0,192,255' />
      <Navbar />

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

        <p className="text-md text-gray-300 mb-[40px] text-center">Developed with love by <span className='text-[rgb(0,192,255)]'>Ahmed Awan</span> © 2024</p>
        
      </div>
    </>
  )
}

export default portfolio