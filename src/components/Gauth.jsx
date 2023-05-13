import React from 'react'
import {FcGoogle} from "react-icons/fc"

export default function Gauth() {
  return (
    <div>
      <button className='flex items-center justify-center w-full bg-red-700 text-white px-5 py-3 uppercase
      font-medium active:shadow-lg hover:shadow-lg transition duration-200 ease-in-out rounded'>
        <FcGoogle className='text-2xl bg-white rounded-full mr-3'/>
        Continue with Google
      </button>
    </div>
  )
}
