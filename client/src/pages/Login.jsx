import React, { useState } from 'react'
import AuthUi from '../components/AuthUi';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');

  const onSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <AuthUi>
      <form onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-[500px] m-auto mt-14 sm:mt-auto gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Name' required />}
        <input type="email" className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Email' required />
        <input type="password" className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Password' required />
        <div className='w-full flex flex-col md:flex-row gap-2 justify-between items-center text-xs sm:text-sm mt-[-4px]'>
          <p className='cursor-pointer'>Forgot your password? <span className='text-[#57201b]/70 cursor-pointer'>Reset</span></p>
          {
            currentState === 'Login' ? <p>Don't have an account? <span onClick={() => setCurrentState('Sign Up')} className='text-[#57201b]/70 cursor-pointer'>Sign Up</span></p> : <p>Already have an account? <span onClick={() => setCurrentState('Login')} className='text-[#57201b]/70 cursor-pointer'>Login</span></p>
          }
        </div>
        <button className='bg-black text-white font-light h-16 px-8 py-2 mt-2 w-full rounded-full'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
        <div className='text-xs sm:text-sm mt-4 flex gap-1 justify-end items-end'>
          <p>Are you an admin?</p>
          <a href='http://localhost:5174' target='_blank' rel="noopener noreferrer" className='text-[#57201b]/70'>Login</a>
        </div>
      </form>
    </AuthUi>
  )
}

export default Login