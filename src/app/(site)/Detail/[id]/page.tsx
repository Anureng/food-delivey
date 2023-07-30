'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiSolidDirectionRight } from 'react-icons/bi';
import { PiShareFatThin } from 'react-icons/pi';
import { BsBookmarkPlus } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import FilterButtonFood from '@/components/FilterButtonFood';
import Footer from '@/components/Footer';

interface IARestaurent {
  Name: string,
  Description: string,
  Time: string,
  Rating : string
  Image:string
}
const Page = ({params}:any , searchParams: { [key: string]: string | string[] | undefined }) => {
  const [idData, setIdData] = useState<IARestaurent | undefined>()
  useEffect(() => {
    axios.get(`https://foodapi-wqk4.onrender.com/api/getAllRestaurent/restaurent/${params.id}`)
    .then((response) => {
      console.log(response.data);
      setIdData(response.data.restaurents)
    })
    .catch((error)=>{
    console.log(error.message);
    })
  }, [params.id])
  return (
    <>
    <Navbar/>
    <div className='flex flex-col '>
    <main className='flex space-x-4 items-center justify-center p-3'>
        <img src={String(idData?.Image)} height={700} width={700} alt='Nothing'/>
        <div className='space-y-4 flex flex-col items-end justify-center'>

        <img src={String(idData?.Image)} height={335} width={335} alt='Nothing'/>
        <img src={String(idData?.Image)} height={335} width={335} alt='Nothing'/>
        </div>
    </main>

    <div  className='flex  items-center justify-around p-3'>
    <div className='space-y-4'>
    <div className='space-y-1'>
    <p className='text-4xl'>{idData?.Name}</p>
        <p className='font-light'>{idData?.Description}</p>
        <p className='font-light'>
        {idData?.Time}
        </p>
    </div>
    <div className='space-y-4'>
        <p className='flex items-center space-x-3'>
            <p className='text-orange-400 font-light'>
            Open now :-
            </p>
          
             {idData?.Rating}
             </p>
        <div className='flex space-x-4'>
            <button className='border border-gray-400 px-1 py-2 rounded-xl flex items-center gap-x-1'><BiSolidDirectionRight className='text-red-300 text-lg'/> Direction</button>
            <button className='border border-gray-400 px-1 py-2 rounded-xl flex items-center gap-x-1'><BsBookmarkPlus className='text-red-300 text-lg'/> Bookmark</button>
            <button className='border border-gray-400 px-1 py-2 rounded-xl flex items-center gap-x-1'><PiShareFatThin className='text-red-300 text-lg'/> Share</button>
        </div>
    </div>
    </div>
    <div>
        <p>
            <p>3.9</p>
            <p>4.5</p>
        </p>
    </div>
    </div>

</div>
<Footer/>
    </>
  )
}

export default Page