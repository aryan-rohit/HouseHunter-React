import React from 'react'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import houseHunter from "../assets/jpg/houseHunter.jpeg";


export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
    const location=useLocation();
    const navigate=useNavigate();
    const auth = getAuth();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setPageState("Profile");
        } else {
          setPageState("Sign in");
        }
      });
    }, [auth]);
    function matchPath(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className='bg-blue-600 border-b shadow-md sticky top-0 z-40'>
      <header className='flex justify-between items-center  px-4 max-w-6xl mx-auto'>
        <div>
            <img src={houseHunter} alt="logo"
            className='h-7 cursor-pointer mr-1 sm:h-12 w-40' 
            onClick={()=>navigate("/")}></img>
        </div>
        <div>
            <ul className='flex space-x-5'>
            <li
              className={`cursor-pointer py-4 text-sm font-semibold md:font-bold md:text-xl text-black border-b-[3px] border-b-transparent ${
                matchPath("/") && "text-white border-t-red-500 font-bold"
              }`}
              onClick={()=>navigate("/")}
              
            >
              Home
            </li>
                <li className={`cursor-pointer py-4 text-sm font-semibold md:font-bold md:text-xl text-black border-b-[3px] border-b-transparent ${
                matchPath("/offers") && "text-white border-b-red-500"
              }`}
              onClick={()=>navigate("/offers")} >Offers</li>
                <li className={`cursor-pointer py-4 text-sm font-semibold md:font-bold md:text-xl text-black border-b-[3px] border-b-transparent ${
                (matchPath("/sign-in")||matchPath("/profile")) && "text-white border-b-red-500"
              }`}
              onClick={()=>navigate("/profile")}
              >{pageState}</li>
            </ul>
        </div>
      </header>
    </div>
  )
}
