import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { Trash2 } from 'lucide-react';
import { assets } from '../assets/assets';


const List = ({ token }) => {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(backendUrl + '/api/product/list', { headers: { token } })
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {
          loading &&
          Array.from({ length: 10 }).map((_, index) => (
            <div className='hidden md:block'>
              <div key={index} className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm animate-pulse">
                <div className="w-12 h-12 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded col-span-1"></div>
                <div className="h-4 bg-gray-300 rounded col-span-1"></div>
                <div className="h-4 bg-gray-300 rounded col-span-1"></div>
                <div className="h-4 bg-gray-300 rounded col-span-1"></div>
              </div>
            </div>
          ))
        }
        {
          loading &&
          Array.from({ length: 10 }).map((_, index) => (
            <div className='block md:hidden'>
              <div className='flex items-center justify-around gap-2 py-1 px-2 border text-sm animate-pulse'>
                <div className="w-20 h-20 bg-gray-300 rounded"></div>
                <div className='w-1/2 flex flex-col gap-2'>
                  <div className='h-3 w-full bg-gray-300 rounded'></div>
                  <div className='h-3 w-full bg-gray-300 rounded'></div>
                  <div className='h-3 w-full bg-gray-300 rounded'></div>
                  <div className='h-3 w-full bg-gray-300 rounded'></div>
                </div>
              </div>
            </div>
          ))
        }
        {
          !loading && list.map((item, index) => (
            <div key={index} className='hidden md:block'>
              <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
                <img src={item.image[0]} alt="" className='w-12 ' />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{currency} {(85 * item.price) - 1}</p>
                <p onClick={() => removeProduct(item._id)} className='flex justify-center cursor-pointer '><Trash2 size={24} /></p>
              </div>
            </div>
          ))
        }
        {
          !loading && list.map((item, index) => (
            <div key={index} className='block md:hidden'>
              <div className='flex items-center justify-around gap-2 py-1 px-2 border text-sm'>
                <img src={item.image[0]} alt="" className='w-20 ' />
                <div className='w-1/2'>
                  <p className='w-full truncate'>{item.name}</p>
                  <p className='w-full flex items-center justify-start'>{item.category}</p>
                  <p className='w-full flex items-center justify-start'>{currency} {(85 * item.price) - 1}</p>
                  <p onClick={() => removeProduct(item._id)} className='w-full flex items-center justify-end cursor-pointer '><Trash2 size={24} /></p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List;