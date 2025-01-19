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
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your password?</p>
          {
            currentState === 'Login' ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Don't have an account? <span className='text-rose-400'>Sign Up</span></p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Already have an account? <span className='text-rose-400'>Login</span></p>
          }
        </div>
        <button className='bg-rose-400 text-white fon-light h-16 px-8 py-2 mt-4 w-full rounded-full'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </AuthUi>
  )
}

export default Login