'use client'
import React, { useEffect, useRef, useState } from 'react'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from './Images/logo.png'
import { Anybody } from 'next/font/google';


const Navbar = () => {

  const [showlinks, setshowlinks]= useState(false)
  const linksContainerRef :any = useRef(null);
  const linksRef : any = useRef(null);
  const toggleLinks = () => {
    setshowlinks(!showlinks);
  };

  useEffect (()=>{
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      // console.log(linksHeight, "linksHeight");
      if(showlinks){
          linksContainerRef.current.style.height = `${linksHeight}px`;

      }
      else{
          linksContainerRef.current.style.height = '0px'
      }
  }, [showlinks])

  return (
    <>
      <div className='nav-main h-20 w-full bg-[rgb(30,20,72)]'>
        <div className='nav-parnt  lg:w-full h-full lg:flex lg:flex-row lg:items-center lg:justify-evenly flex-col justify-center '>

          <div className='nav-header flex lg:justify-center justify-between items-center h-full lg:w-max w-full'>
            <Image src={logo} alt='' className='h-max w-max lg:ml-0 ml-6' />
            <button onClick={toggleLinks} className='text-3xl lg:mr-5 mr-6 lg:invisible visible'>
              <FaBars className='text-white' />
            </button>
          </div>

          <div className='links-container bg-[rgb(30,20,72)] relative z-10 transition-[.24s] overflow-hidden' ref={linksContainerRef}>
            <ul className='links w-full flex lg:flex-row flex-col gap-5 lg:ml-0 ml-7' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <Link className='text-white hover:text-[rgb(16,187,255)] active:text-[rgb(16,187,255)]' href={url}>{text}</Link>
                  </li>

                )
              })}
            </ul>
          </div>

          <div className='h-[15px] w-[1px] bg-white'></div>

          <ul className='social-icons lg:mr-5 mr-10 flex gap-4 lg:visible invisible'>
            {social.map((link) => {

              const { id, url, icon } = link
              console.log(link);

              return (
                <li key={id}>
                  <Link className='text-lg text-white' href={url}>{icon}</Link>
                </li>
              )
            })}
          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar