import React from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'


export default function Header() {
    const location=useLocation();
    const navigate=useNavigate();
    function matchPath(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className='bg-white border-b shadow-md sticky top-0 z-50'>
      <header className='flex justify-between items-center  px-4 max-w-6xl mx-auto'>
        <div>
            <img src="https://www.househub.info/assets/images/HouseHub_logo.png" alt="logo"
            className='h-7 cursor-pointer' 
            onClick={()=>navigate("/")}></img>
        </div>
        <div>
            <ul className='flex space-x-10'>
            <li
              className={`cursor-pointer py-4 text-sm font-semibold text-blue-300 border-b-[3px] border-b-transparent ${
                matchPath("/") && "text-blue-600 border-b-red-500 font-bold"
              }`}
              onClick={()=>navigate("/")}
              
            >
              Home
            </li>
                <li className={`cursor-pointer py-4 text-sm font-semibold text-blue-300 border-b-[3px] border-b-transparent ${
                matchPath("/offers") && "text-blue-600 border-b-red-500"
              }`}
              onClick={()=>navigate("/offers")} >Offers</li>
                <li className={`cursor-pointer py-4 text-sm font-semibold text-blue-300 border-b-[3px] border-b-transparent ${
                matchPath("/sign-in") && "text-blue-600 border-b-red-500"
              }`}
              onClick={()=>navigate("/sign-in")}
              >Sign In</li>
            </ul>
        </div>
      </header>
    </div>
  )
}
