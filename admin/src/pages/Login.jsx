import React, { useState } from 'react'
import AuthUi from '../components/AuthUi';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { LoaderCircle } from 'lucide-react';

const Login = ({ setToken }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthUi>
      <form onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-[500px] m-auto mt-14 sm:mt-auto gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mt-5'>
          <p className='prata-regular text-3xl'>Admin Login</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Email' required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Password' required />

        {
          loading ?
            <button className='bg-black text-white font-light h-16 px-8 py-2 mt-4 w-full rounded-full flex items-center justify-center'><LoaderCircle size={32} className='animate-spin' /></button> :
            <button className='bg-black text-white font-light h-16 px-8 py-2 mt-4 w-full rounded-full'>Login</button>
              
          }
      </form>
    </AuthUi>
  )
}

export default Login