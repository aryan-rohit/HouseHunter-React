import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Gauth from '../components/Gauth';


export default function ForgotPassword() {
    
    const [email,setEmail]=useState();
    
    function onChange(e){
        setEmail(e.target.value)
    }
  return (
    <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
            <div className='md:w-[70%] lg:w-[50%] mb-12 md:mb-6'>
            <img src="https://images.unsplash.com/photo-1553991562-9f24b119ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="key"
            className='w-full rounded-2xl'>

            </img>
            </div>
            <div className='w-full md:w-[70%] lg:w-[40%] lg:ml-5'>
                <form >
                    <input 
                    type='email' 
                    className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
                    id="email" 
                    value={email}
                    onChange={onChange}
                    placeholder='email address'></input>
                    
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
                        <p>Don't Have a Account ?
                        <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition duration-300 ease-in-out ml-1 md:ml-2'>
                        Register
                        </Link>
                        </p>
                        <p>
                        <Link to="/sign-in" className='text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out ml-1 md:ml-2'>
                        Sign In
                        </Link>
                        </p>
                    </div>
                    <button className='w-full bg-blue-600 text-white px-5 py-2 font-medium uppercase rounded shadow-md hover:bg-blue-700 
                    transition duration-100 ease-in-out hover:shadow-lg active:bg-blue-800'>
                        Send Reset Password
                    </button>
                    <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                    <p className="text-center font-semibold mx-4">OR</p>
                     </div>
                     <Gauth/>
                </form>
                
            </div>
        </div>
    </section>
  )
}
