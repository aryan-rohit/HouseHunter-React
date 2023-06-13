import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'



export default function Footer() {
  return (
    <div className='bg-white border-b shadow-md sticky top-0 z-40'>
      <footer className=' flex flex-col items-center w-full px-4 max-w-6xl mx-auto'>
      {/* <h1 className="text-3xl text-center mt-6 font-bold mb-6">About Us</h1> */}
        <div className="text-3xl text-center mt-5 font-bold">
            <ul className='flex space-x-10 '>
            <li ><a href='https://www.instagram.com/aryan_kumar1203/'>
            <FaInstagram className="text-lg mr-1 text-blue-600 cursor-pointer font-bold " />
            </a>
            </li>
            <li><a href='https://twitter.com/aryankumar5555'>
            <FaTwitterSquare className="text-lg mr-1 text-blue-600" />
            </a>
            </li>
            <li><a href='https://www.linkedin.com/in/aryan-kumar-ba7354226/'>
            <FaLinkedin className="text-lg mr-1 text-blue-600" />
            </a>
            </li>
            </ul>
        </div>
        <p className="text-xl text-center mt-4 font-bold mb-6">&copy;2023 Aryan Kumar | All Rights Reserved</p>
      </footer>
    </div>
  )
}
